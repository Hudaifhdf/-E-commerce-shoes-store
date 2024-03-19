import React, { useRef, useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import { context } from '../Context/Context'

function Signup() {
    const { signUpUser, setSignUpUser } = useContext(context)
    const navigate = useNavigate()
    const inputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        const name = inputRef.current.name.value
        const email = inputRef.current.email.value
        const password = inputRef.current.password.value

        const newUser = { name, email, password, cart: [] }
        setSignUpUser([...signUpUser, newUser])
        navigate('/login')
    }

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white w-full max-w-md p-8 rounded-md shadow-md">
                    <h1 className="text-2xl font-semibold text-gray-800 text-center">Create an account</h1>
                    <form onSubmit={handleSubmit} ref={inputRef} className="mt-6">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-800">Name</label>
                            <input
                                name="name"
                                type="text"
                                className="block w-full px-4 py-2 mt-1 text-gray-800 bg-gray-200 border border-gray-300 rounded-md focus:border-gray-500 focus:ring focus:ring-gray-500 focus:outline-none focus:ring-opacity-40"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">Email</label>
                            <input
                                name="email"
                                type="email"
                                className="block w-full px-4 py-2 mt-1 text-gray-800 bg-gray-200 border border-gray-300 rounded-md focus:border-gray-500 focus:ring focus:ring-gray-500 focus:outline-none focus:ring-opacity-40"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-800">Password</label>
                            <input
                                name="password"
                                type="password"
                                className="block w-full px-4 py-2 mt-1 text-gray-800 bg-gray-200 border border-gray-300 rounded-md focus:border-gray-500 focus:ring focus:ring-gray-500 focus:outline-none focus:ring-opacity-40"
                                minLength="8"
                                required
                            />
                        </div>
                        <button type="submit" className="w-full px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none focus:bg-gray-600">Sign up</button>
                    </form>
                    <p className="mt-4 text-xs text-center text-gray-800">Already a member? <NavLink to="/login" className="font-semibold text-purple-600 hover:underline">Sign in</NavLink></p>
                </div>
            </div>
        </>
    )
}

export default Signup
