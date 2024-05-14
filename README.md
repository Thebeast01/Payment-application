# Basic Payment Application

This application is a basic payment application which allow the user to make payment, it's basically demo and psudo application which assign the user some random amount to the user, and allow them to share, send some amount from their account to other account. It is not a real word working payment system, you cann't share real money on this application it's just a learning project. To understand how the payment application's made and work in real word.


Technologies used for frontend : `Reactjs, react-router-dom, tailwindCSS, axios`
Technologies used for frontend : `MongoDB, mongoose, zod, jsonwebtokens, Cors`

## How to setup Locally

Clone the repo locally :  `git clone 'repo-url'`

1. Open terminal and navigate to the backend folder and run the following command to install all the dependensies `npm install`
2. In `db.js` file and add the database url of your database  `mongoose.connect("your db url")` and connect to the database.
3. In order to run the backend server we are going to use nodemon so go to backend folder and then open the  `package.json` file in you prefered text-editor and replace scripts with this  `"scripts": { "test": "echo \"Error: no test specified\" && exit 1", "dev": "nodemon index.js" },`
4. Now in the backend folder run the following command to start the server `npm run dev`
5. Your nodemon server should start on port : 3000

###### Setting up Frontend :
1. Open frontend folder and run `npm isntall` in the frontend folder in terminal,
2. Now run `npm run dev` to start the frontend application.