import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { context } from "./Context/Context";
import "./Navbar.css";
import { RiAdminFill } from "react-icons/ri";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { Luser, setLuser, tt, products, SetProducts,email } = useContext(context);
  
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(tt, "hh");
  const [filterData, setFilterData] = useState([]);

  const handlefilter = (e) => {
    const searchword = e.target.value;
    const newfilter = products.filter((item) => {
      return item.name.toLowerCase().includes(searchword.toLowerCase());
    });
    if (searchword === "") {
      setFilterData([]);
    } else {
      setFilterData(newfilter);
    }
  };

  return (
    <div>
      <div
        id="nav"
        className=" top-0 navbar bg-base-100 content-center justify-between flex flex-wrap items-center p-4 relative"
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

          <NavLink to="/" className="btn btn-ghost text-xl mr-4">
            Shoezy
          </NavLink>

          <div className={`form-control relative ${showSidebar ? "hidden md:block" : "block"}`}>
            <input
              type="text"
              placeholder="Search"
              data={products}
              className="input input-bordered w-full md:w-80"
              onChange={handlefilter}
            />
            {filterData.length !== 0 && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                {filterData.map((item) => (
                  <NavLink key={item.id} to={`/${item.id}`} className="block py-2 px-4 hover:bg-gray-100">
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>

        <div
          className={`md:flex md:items-center ${
            showSidebar ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-auto gap-4 md:gap-2 mt-4 md:mt-0">
            <NavLink to="/men" className="btn btn-ghost">
              MEN
            </NavLink>
            <NavLink to="/women" className="btn btn-ghost">
              WOMEN
            </NavLink>
            <NavLink to="/brand" className="btn btn-ghost">
              COLLECTION
            </NavLink>
            {/* <NavLink to="/lookbook" className="btn btn-ghost">
              LOOKBOOK
            </NavLink>
            <NavLink to="/contact" className="btn btn-ghost">
              CONTACT US
            </NavLink> */}
            <div className="form-control md:hidden">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0 2 2 0 014 0zM5 21a2 2 0 100-4 2 2 0 000 4zm14 0a2 2 0 100-4 2 2 0 000 4zm-7-9a2 2 0 100-4 2 2 0 000 4z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {Luser && Luser.cart.length}
                  </span>
                </div>
              </div>

              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">
                    Total :₹{Luser && tt}
                  </span>
                  <span className="text-info"></span>
                  <div className="card-actions">
                    <button
                      onClick={() =>
                        Luser ? navigate("/cart") : navigate("/login")
                      }
                      className="btn btn-primary btn-block"
                    >
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown dropdown-end ml-4 md:ml-0">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="flex gap-1 rounded-full">
                  <NavLink className="btn btn-ghost mr-4 md:mr-0">
                    <FaUser />
                  </NavLink>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <NavLink to="/login" className="justify-between">
                    Login
                    <span className="badge">New</span>
                  </NavLink>
                </li>
                <li>
                  <a>Settings</a>
                </li>
            
              </ul>
            </div>
            <div className="flex gap-1 rounded-full items-cente bg-white    ">
              <NavLink to="/adlog" className=" btn btn-ghost text-zinc-600 mr-4 md:mr-0">
                <RiAdminFill style={{ zoom: "130%" }} />
              </NavLink>
            </div>
            
            {Luser && ( <div className="dropdown dropdown-end ml-4 md:ml-0">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                
              <div className="flex gap-1 rounded-full items-cente bg-slate-200    ">
                <NavLink className=" btn btn-ghost text-zinc-600 mr-4 md:mr-0">
                  {Luser.name[1].toUpperCase()}
                </NavLink>
              </div>
            
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
          
               <li >
                  <button onClick={() => setLuser(null)}>Logout</button>
                </li>
              </ul>
            </div>)}




          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
