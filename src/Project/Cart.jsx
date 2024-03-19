import { useContext, useState } from 'react';
import Navbar from './Navbar';
import { context } from './Context/Context';
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { VscBlank } from "react-icons/vsc";
import { NavLink, useParams } from 'react-router-dom';

function Cart() {
  const { Luser, setLuser, tt, setTt } = useContext(context);
  const [count, setCount] = useState(0);
  const {id}=useParams()

  const handleDecrement = (item) => {
    if (item.amount && item.amount > 1) {
      setCount((item.amount -= 1));
    }
  };

  const handleIncrement = (item) => {
    setCount((item.amount += 1));
  };

  const handleRemove = (itemId) => {
    const updatedCart = Luser.cart.filter((item) => item.id !== itemId);
    setLuser((prevUser) => ({
      ...prevUser,
      cart: updatedCart,
    }));
  };
  

  setTt(() =>
    Luser.cart.reduce((acc, item) => (acc += item.price * item.amount), 0)
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">Your Cart</h2>
        <div className="grid grid-cols-1 gap-4">
          {Luser.cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded shadow-md overflow-hidden"
            >
              <div className="p-4 flex items-center justify-between">
                <NavLink to={`/${item.id}`}><div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <p className="text-lg font-semibold">Price: ₹{item.price}</p>
                  </div>
                </div></NavLink>
                <div className="flex items-center">
                  <button onClick={() => handleDecrement(item)} className="text-gray-600 focus:outline-none">
                  <CiCircleMinus />
                  </button>
                  <span className="mx-2"> {item.amount} </span>
                  <button onClick={() => handleIncrement(item)} className="text-gray-600 focus:outline-none">
                  <CiCirclePlus />

                  </button>
                  <span><VscBlank /></span>
                                   
                  <button onClick={() => handleRemove(item.id)} className="text-red-500 focus:outline-none">
                  <RiDeleteBin6Line />
                   </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-100 py-4 px-8 mt-auto">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold">Total Amount: ₹{tt}</div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
