import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button } from '../components/Button'
import Input from '../components/Input'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import BottomWarning from '../components/BottomWarning'
const Signup = () => {
        const [firstName, setFirstName] = useState('')
        const [lastName, setLastName] = useState('')
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState("")
        const navigate = useNavigate()
        return (
                <div className=' h-screen bg-slate-950  flex justify-center items-center'>
                        <div className='h-auto w-96 bg-slate-200 flex justify-center p-4 rounded-xl items-center flex-col'>
                                <Heading label={"Sing Up"} />
                                <SubHeading label={'Enter your Information to create an account'} />
                                <div className='w-full'>
                                        <Input onChange={e => setFirstName(e.target.value)} label={'First Name'} placeholder={'John'} />
                                        <Input onChange={e => setLastName(e.target.value)} label={'Last Name'} placeholder={'Doe'} />
                                        <Input onChange={e => setUsername(e.target.value)} label={'Email'} placeholder={'username@gmail.com'} />
                                        <Input onChange={e => setPassword(e.target.value)} label={'Password '} />

                                        <div className='pt-4'>
                                                <Button onClick={async () => {
                                                        const response = await axios.post('http://localhost:3000/api/v1/user/signup', {
                                                                username, firstName, lastName, password
                                                        })
                                                        // Saving token to the browser local storage
                                                        localStorage.setItem('token', response.data.token)
                                                        navigate('/dashboard')
                                                }} label={'Sign up'} />
                                        </div>
                                        <BottomWarning label={'Already have an account?'} buttonText={'Sign in'} />
                                        <div />
                                </div>
                        </div>
                </div>
        )
}

export default Signup
