import React, { useContext } from 'react';
import { context } from './Context/Context';
import Navbar from './Navbar';
import { NavLink, useNavigate } from 'react-router-dom';

function Men() {
    const { products, SetProducts } = useContext(context);
    const filterData = products.filter((product) => product.gender === 'men');
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 p-10">
                {filterData.map((product) => (
                    <div key={product.id} className="max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-72 object-cover object-center" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                            <p className="text-gray-600 mb-2">{product.gender} {product.category}</p>
                            <h1 className="text-xl font-bold text-gray-800">₹{product.price}</h1>
                            <div className="flex justify-center">
                                <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none" onClick={() => navigate(`/${product.id}`)}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Men;
