import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
export default function Navbar(props) {
    const {user, logOut} = UserAuth()
    const navigate = useNavigate()
    const handleLogOut = async () => {
        try{
            await logOut()
            navigate('/')
        }catch{

        }
    }

    return (
        <div className='text-red-600 flex items-center justify-between p-4 z-[100] absolute w-full mx-auto'>
            <Link to='/'>
                <h1 className='font-bold text-4xl cursor-pointer'>NETFLIX</h1>
            </Link>
            {user?.email ? <div>
                <Link to='/login'>
                    <button className='text-white pr-4 '>Account</button>
                </Link>
                    <button onClick={handleLogOut} className='bg-red-600 px-6 py-4 rounded-md text-white'>Log Out</button>
            </div> : <div>
                <Link to='/login'>
                    <button className='text-white pr-4 '>Sign In</button>
                </Link>
                <Link to='/signup'>
                    <button className='bg-red-600 px-6 py-4 rounded-md text-white'>Sign Up</button>
                </Link>
            </div>}
        </div>
    )
}
