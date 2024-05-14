import React from 'react'
import { Button } from '../components/Button'
import Heading from '../components/Heading'
import Input from '../components/Input'
import SubHeading from '../components/SubHeading'
import BottomWarning from '../components/BottomWarning'
const Signin = () => {
        return (
                <div className=' h-screen bg-slate-950  flex justify-center items-center'>
                        <div className='h-auto w-96 bg-slate-200 flex justify-center p-4 rounded-xl items-center flex-col'>
                                <Heading label={"Sign in "} />
                                <SubHeading label={'Enter your credentials to access your account'} />
                                <Input label={'Email'} placeholder={'username@gmail.com'} />
                                <Input label={'Password '} />
                                <div className='pt-4'>
                                        <Button label={'Sign In'} />
                                </div>
                                <BottomWarning label={'Dont have an account?'} buttonText={'Sign up'} />
                        </div>
                </div>)
}

export default Signin
