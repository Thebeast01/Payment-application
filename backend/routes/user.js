const express = require('express');
const router = express.Router();

const zod = require('zod');
const { User, Account } = require('../db');

const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config');
const { authMiddleware } = require('../middleware');
// Creating signUpBody zod schema
const signupBody = zod.object({
	username: zod.string().email(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string(),
});
// Creating post route for signup
router.post('/signup', async (req, res) => {
	// checking or validation of the user input :
	const { success } = signupBody.safeParse(req.body);

	if (!success) {
		return res.status(411).json({
			message: 'Email already taken/ Incorrect Input',
		});
	}
	// Checking for the existing user in the database :
	const existingUser = await User.findOne({
		username: req.body.username,
	});

	if (existingUser) {
		return res.status(411).json({
			message: 'Email already taken/ Incorrect Input',
		});
	}
	// Creating user if user doesn't exist
	const user = await User.create({
		username: req.body.username,
		password: req.body.password,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
	});
	// Authenticating using jwt secret key :
	const userId = user._id;
	await Account.create({
		userId,
		balance: 1 + Math.random() * 10000,
	});
	const token = jwt.sign(
		{
			userId,
		},
		JWT_SECRET
	);
	res.json({
		message: 'User created successfully',
		token: token,
	});
});
// Creating zod schema for singin body :
const signinBody = zod.object({
	username: zod.string().email(),
	password: zod.string(),
});

router.post('/signin', async (req, res) => {
	const { success } = signinBody.safeParse(req.body);
	if (!success) {
		return res.status(411).json({
			message: 'Email already taken / Incorrect Input',
		});
	}
	const user = await User.findOne({
		username: req.body.username,
		password: req.body.password,
	});
	if (user) {
		const token = jwt.sign(
			{
				userId: user._id,
			},
			JWT_SECRET
		);
		res.json({
			token: token,
		});
		return;
	}
	res.status(411).json({
		message: 'Error while logging in',
	});
});
const updateBody = zod.object({
	password: zod.string().optional(),
	firstName: zod.string().optional(),
	lastName: zod.string().optional(),
});
router.put('/', authMiddleware, async (req, res) => {
	const { sucess } = updateBody.safeParse(req.body);
	if (!sucess) {
		return res.status(411).json({
			message: 'Error while updating Informaiton',
		});
	}
	await User.updateOne(
		{
			_id: req.userId,
		},
		req.body
	);
	res.json({
		message: 'Updated Successfully',
	});
});
router.get('/bulk', async (req, res) => {
	const filter = req.query.filter || '';
	const users = await User.find({
		$or: [
			{
				firstName: {
					$regex: filter,
				},
			},
			{
				lastName: {
					$regex: filter,
				},
			},
		],
	});
	res.json({
		user: users.map((user) => ({
			username: user.username,
			firstName: user.firstName,
			lastName: user.lastName,
			_id: user._id,
		})),
	});
});
module.exports = router;
