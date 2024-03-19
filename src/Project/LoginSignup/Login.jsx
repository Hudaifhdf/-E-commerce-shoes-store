import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { context } from '../Context/Context'
import Navbar from '../Navbar'

function Login() {
    const { signUpUser, setLuser } = useContext(context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = signUpUser.find((user) => user.email === email)
        if (userData && userData.password === password) {
            setLuser(userData)
            navigate('/')
        } else {
            setLuser(null)
            alert('Please enter a valid email or password')
        }
    }

    return (
        <div><Navbar/>
        <div className="flex items-center justify-center h-screen">
            
            <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Sign in</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-800">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="block w-full px-4 py-2 mt-2 text-gray-800 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-40"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-800">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="block w-full px-4 py-2 mt-2 text-gray-800 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 focus:ring focus:ring-gray-500 focus:ring-opacity-40"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800">Login</button>
                </form>
                <p className="mt-4 text-sm text-gray-800 text-center">
                    Don't have an account? <NavLink to="/signup" className="font-semibold text-purple-600 hover:underline">Sign up</NavLink>
                </p>
            </div>
        </div></div>
    )
}

export default Login
