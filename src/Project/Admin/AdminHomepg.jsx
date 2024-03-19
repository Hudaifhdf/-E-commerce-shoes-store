import React, { useContext, useState } from 'react'
import AdminNav from './AdminNav'
import { context } from '../Context/Context';
import { useNavigate, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { VscBlank } from "react-icons/vsc";
import { TbHttpDelete } from "react-icons/tb";


function AdminHomepg() {
    const {products,SetProducts}=useContext(context)
    const navigate=useNavigate()
    
    const remove=(id)=>{
      SetProducts(prev=>(
       prev.filter((item)=>item.id !==id)
      ))
// console.log(prev);

    }
    
 
     
// console.log(id);
  return (

    <div className="flex flex-col min-h-screen">
      <AdminNav/>
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">Edit product</h2>
        <div className="grid grid-cols-1 gap-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded shadow-md overflow-hidden"
            >
              <div className="p-4 flex items-center justify-between">
                <NavLink ><div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <p className="text-lg font-semibold">Price: ₹{item.price}</p>
                  </div>
                </div></NavLink>
                <div className="flex items-center">
                  
                  <span className="mx-2"> </span>
                  
                  <span><VscBlank /></span>
                                   
                  <button onClick={()=>navigate(`/adprdctvw/${item.id}`)}  className="text-red-500 focus:outline-none">
                  <FaEdit />

                   </button>
                   <span><VscBlank /></span>
                   <button onClick={()=>remove(item.id)}  className="text-gray-600 focus:outline-none">
                  <TbHttpDelete style={{zoom:'130%'}} />


                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      
    </div>
  );
   
  
};
      
  


export default AdminHomepg
