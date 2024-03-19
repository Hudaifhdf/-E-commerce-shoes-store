import React, { useContext } from "react";
import { RiAdminFill } from "react-icons/ri";
import { MdShoppingCart } from "react-icons/md";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { context } from "../Context/Context";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";


function AdminNav() {
    const [showSidebar, setShowSidebar] = useState(false);
    const {Luser,setLuser,tt,products,SetProducts } = useContext(context);
    const {id}=useParams()
    const navigate=useNavigate()
    const [filterData,setFilterData]=useState([])

    const handlefilter=(e)=>{
        const searchword=e.target.value
        const newfilter=products.filter((item)=>{
          return item.name.toLowerCase().includes(searchword.toLowerCase())
        })
        if(searchword===""){
          setFilterData([]);
        }else{
          setFilterData(newfilter)
        }
          
       }

  return (
    <div>
        <div>
      <div
        id="nav"
        className=" sticky top-0 navbar bg-base-100 content-center justify-between flex flex-wrap items-center  p-4"
      >
        <div className="flex items-center">
          <button
            className={`btn btn-circle btn-sm md:hidden ${
              showSidebar ? "hidden" : ""
            }`}
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <NavLink to='/adhome' className="btn btn-ghost text-xl mr-4">
            Admin
          </NavLink>
          <div
            className={`form-control ${
              showSidebar ? "hidden md:block" : "block"
            }`}
          >
            
  
          </div>
          {/* <div className="">
          {  products.map((item)=>{
           return <NavLink to=''>
           <p>{item.name}</p>
           </NavLink>
           
           
          })  }
          </div> */}
        </div>
        {/* <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-auto gap-4 md:gap-2 mt-4 md:mt-0">
            
            <NavLink to="/brand" className="btn btn-ghost">
              COLLECTION
            </NavLink>
            <div className="form-control md:hidden">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
          </div> */}
        <div
          className={`md:flex md:items-center ${
            showSidebar ? "block" : "hidden"
          }`}
        >
          

          <div className="flex items-center">
          <div className="flex gap-1 rounded-full items-cente bg-slate-200    ">
                  
                  <NavLink to='/user'  className=" btn btn-ghost text-zinc-600 mr-4 md:mr-0">
                  <PiUsersThreeFill />

                    
                  </NavLink>
                </div>
           
          <div className="flex gap-1 rounded-full items-cente bg-slate-200    ">
                  
                  <NavLink to='/adminadd'  className=" btn btn-ghost text-zinc-600 mr-4 md:mr-0">
                  <MdFormatListBulletedAdd />
                    
                  </NavLink>
                </div>
            <div className="dropdown dropdown-end ml-4 md:ml-0">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
               
                <div className="flex gap-1 rounded-full">
                  
                  <NavLink className="btn btn-ghost mr-4 md:mr-0">
                  
                  <RiAdminFill style={{zoom:'130%'}}  />

                  </NavLink>
                </div>
                
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  
            
                  <NavLink to='/' >Logout</NavLink>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default AdminNav
