import React from 'react';
import { useContext } from 'react';
import { context } from '../Context/Context';
import { useNavigate } from 'react-router-dom';

function Allproducts() {
    const { products } = useContext(context);
    const navigate = useNavigate();

    // Define the desired dimensions for the images
    const imageWidth = 300;
    const imageHeight = 300;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {products.map((item) => (
                <div key={item.id} className="max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                    {/* Adjust the image dimensions */}
                    <img src={item.image} alt={item.name} width={imageWidth} height={imageHeight} className="w-full object-cover object-center" style={{ height: '300px' }} />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">{item.name}</h2>
                        <p className="text-gray-600 mb-4">{item.gender} {item.category} shoes</p>
                        <h1 className="text-xl font-bold text-gray-800">₹{item.price}</h1>
                        <div className="flex justify-center">
                            <button onClick={() => navigate(`/${item.id}`)} className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none transition duration-300 ease-in-out">Buy Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Allproducts;
