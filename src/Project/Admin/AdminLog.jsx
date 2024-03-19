import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { context } from '../Context/Context';

function AdminLog() {
const navigate=useNavigate()
const {email,setEmail,password,setPassword}=useContext(context)

const Admin={
  name:'Admin',
  email:'Admin@gmail.com',
  password:'123456'
}


const signin=()=>{
  if(Admin.email==email&&Admin.password==password){
    navigate('/adhome')
  }else{
    alert('email or password is incorrect');
  }
}






  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-gray-500 to-gray-700 px-6 py-4">
            <h3 className="text-white text-2xl font-semibold">Sign In</h3>
          </div>
          <div className="p-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
              onChange={(e)=>setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 leading-tight focus:outline-none focus:ring-primary focus:border-primary-dark"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
              onChange={(e)=>setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-2 px-3 leading-tight focus:outline-none focus:ring-primary focus:border-primary-dark"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                className="mr-2 leading-tight"
                id="remember"
                type="checkbox"
              />
              <label className="text-sm text-gray-700" htmlFor="remember">
                Remember Me
              </label>
            </div>
            <button onClick={signin}
              className="w-full bg-primary text-white py-2 px-4 rounded font-semibold hover:bg-primary-dark focus:outline-none focus:ring-primary focus:border-primary-dark"
            >
              Sign In
            </button>
            <p className="mt-6 text-sm text-gray-700 text-center">
              
              <NavLink to='/'  className="text-blue-500 ml-1 font-bold">
                Home
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLog;
