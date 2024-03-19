import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { context } from '../Context/Context';
import AdminNav from './AdminNav';

function AdminProductView() {
  const {products,SetProducts}=useContext(context)
  const navigate=useNavigate()
 const {id}=useParams()
 const[gender,setGender]=useState()
 const[image,setImage]=useState('')
 const[category,setCategory]=useState('')
 const[price,setPrice]=useState('')
 const[name,setName]=useState('')

 const finddata=products.find((item)=>item.id==id)
 console.log(finddata);
 const click=()=>{
   const updateproduct=products.map((item)=>{
    let upName=name||item.name;
    let upCategory=category||item.category;
    let upGender=gender||item.gender;
    let UpImage=image||item.image;
    let upPrice=price||item.price;
  if(item.id==id){
    return{
      ...products,
      id :item.id,
      name:upName,
      category:upCategory,
      gender:upGender,
      price:upPrice,
      image:UpImage
  


    }
  }else{
    return item
  }})
  SetProducts(updateproduct)
  navigate('/adhome')

 }
 


  return (
    <div><AdminNav/><br /><br /><br /><br /><br />
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full md:w-3/4 lg:w-4/5 xl:w-3/5 flex flex-col lg:flex-row">
        <div className="relative overflow-hidden lg:w-1/2">
          <img 
            className="w-full h-40 lg:h-full object-cover"
            src={finddata.image}
            alt=""
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <h5 className="text-white text-lg font-semibold">Card Title</h5>
          </div>
        </div>
        <div className="p-4 lg:p-6 lg:w-1/2">
          <p className="text-gray-700 text-center"><span>EDIT PRODUCT DETAILS</span></p>
          <br />
          <ul className="border-t border-gray-200 divide-y divide-gray-200">
            <li className="p-2 lg:p-4">
              <span className="block text-sm font-medium text-gray-800">Name</span>
              <input onChange={(e)=>setName(e.target.value)}  type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-primary focus:border-primary-dark" />
            </li>
            <li className="p-2 lg:p-4">
              <span className="block text-sm font-medium text-gray-800">Category</span>
              <input onChange={(e)=>setCategory(e.target.value)} type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-primary focus:border-primary-dark" />
            </li>
            <li className="p-2 lg:p-4">
              <span className="block text-sm font-medium text-gray-800">Gender</span>
              <input onChange={(e)=>setGender(e.target.value)} type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-primary focus:border-primary-dark" />
            </li>
            <li className="p-2 lg:p-4">
              <span className="block text-sm font-medium text-gray-800">Price</span>
              <input onChange={(e)=>setPrice(e.target.value)} type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-primary focus:border-primary-dark" />
            </li>
            <li className="p-2 lg:p-4">
              <span className="block text-sm font-medium text-gray-800">Image Url</span>
              <input onChange={(e)=>setImage(e.target.value)} type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-primary focus:border-primary-dark" />
            </li>
          </ul>
          <div className="mt-auto">
            <button
               onClick={click}
              className="btn w-full py-2 px-4 text-center bg-primary text-white font-semibold rounded hover:bg-primary-dark transition duration-300">Save</button>
          </div>
        </div>
      </div>
    </div></div>
  );
}

export default AdminProductView;
