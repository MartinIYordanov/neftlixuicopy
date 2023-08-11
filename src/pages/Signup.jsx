import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

export default function Signup(props) {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const navigate = useNavigate()
        const{ user, signUp} = UserAuth()
        const handleSubmit = async (e) =>{
            e.preventDefault()
            try{
                await signUp(email, password)
                navigate('/')
            }catch{
                console.log()
            }
        }

    return (
        <div>
            <div className='w-full h-screen'>
                <img className='sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='fixed w-full px-4 py-24 z-50 shadow-sm'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl  font-bold py-2'>Sign Up</h1>
                            <form className='w-full flex flex-col ' onSubmit={handleSubmit}>
                                <input onChange={(e)=>{setEmail(e.target.value)}} className='my-2 p-3 bg-gray-700 rounded-md ' type="email" placeholder=' Password' autoComplete='email' />
                                <input onChange={(e)=>{setPassword(e.target.value)}} className='my-2 p-3 bg-gray-700 rounded-md' type="password" placeholder=' Password' autoComplete='current-password' />
                                <button className='bg-red-600 py-3 my-6 rounded-md font-bold text-white '>Sign Up</button>
                                <div className='flex justify-between text-sm text-gray-500'>
                                    <p><input type="checkbox" /> Remember me! </p>
                                    <p>Need Help?</p>
                                </div>
                                <p className='py-4'>
                                    <span className='text-gray-500'>Already subscribed to Netflix?</span>{' '}
                                    <Link to='/login' className='text-red-600 font-bold'>
                                        Sign In
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
