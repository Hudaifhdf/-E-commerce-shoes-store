import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { context } from '../Context/Context';
import AdminNav from './AdminNav';

function AdminAddprdct() {
const navigate=useNavigate()

 const[name,setName]=useState('')


const {products,SetProducts}=useContext(context)
const handlesubmit=(e)=>{
    e.preventDefault()
   
    
    let newData=new FormData(e.target)
    let gender=newData.get('gender');
    let image=newData.get('image');
    let category=newData.get('category');
    let price=newData.get('price');
    let name=newData.get('name');
    
   
   

   let newPrdct={
    id:Math.random()*10,
    price:price,
    image:image,
    category:category,
    gender:gender,
    name:name
   }
    
   SetProducts([...products,newPrdct]) 
   navigate('/adhome')

}



    

  return (
    <div><AdminNav/>
    <br /><br /><br />
    <form onSubmit={(e)=>handlesubmit(e)} action="">
    <div className="flex items-center  justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full md:w-3/4 lg:w-4/5 xl:w-3/5 flex flex-col lg:flex-row">
        <div className="relative overflow-hidden lg:w-1/2">
          
          <div className="absolute inset-0 bg-black opacity-40"></div>
          
          <div className="absolute bottom-0 left-0 p-4">
            
          </div>
        </div>
        <div className="p-4 lg:p-6 lg:w-1/2">
          <p className="text-gray-700 text-center"><span>ADD PRODUCT DETAILS</span></p>
          <br />
          <ul className="border-t border-gray-200 divide-y divide-gray-200">
            <li className="p-2 lg:p-4">
              <span className="block text-sm font-medium text-gray-800">Name</span>
              <input name='name'  type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-primary focus:border-primary-dark" />
            </li>
            <li className="p-2 lg:p-4">
              <span className="block text-sm font-medium text-gray-800">Category</span>
              <input name='category' type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-primary focus:border-primary-dark" />
            </li>
            <li className="p-2 lg:p-4">
              <span className="block text-sm font-medium text-gray-800">Gender</span>
              <input name='gender' type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-primary focus:border-primary-dark" />
            </li>
            <li className="p-2 lg:p-4">
              <span className="block text-sm font-medium text-gray-800">Price</span>
              <input name='price' type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-primary focus:border-primary-dark" />
            </li>
            <li className="p-2 lg:p-4">
              <span className="block text-sm font-medium text-gray-800">Image Url</span>
              <input name='image' type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-primary focus:border-primary-dark" />
            </li>
          </ul>
          <div className="mt-auto">
            <button
               type='submit'
              className="btn w-full py-2 px-4 text-center bg-primary text-white font-semibold rounded hover:bg-primary-dark transition duration-300">Save</button>
          </div>
        </div>
      </div>
    </div></form></div>
  );
}



export default AdminAddprdct
