import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { NavLink, useNavigate } from 'react-router-dom';
import Allproducts from './Components/Allproducts';
import './Home.css';

function HomePg() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="relative flex flex-col justify-center items-center h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/running_ss24_supernova_global_launch_m_glp_masthead_d_a278d529da.jpg')` }}>
                <button onClick={() => navigate('/brand')} className="btn bg-white border-2 border-white text-black py-3 px-6 font-bold text-lg uppercase rounded-md transition duration-300 hover:bg-transparent hover:text-white">Shop Now</button>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="border-2 border-white w-4 h-4 transform rotate-45"></div>
                </div>
            </div>
            <div className="bg-black h-20"></div>
            <div className="relative flex justify-center items-center h-screen">
                <NavLink to="/men">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                        <source src="https://cdn.sanity.io/files/qa41whrn/prod/7684f47b08d17192ae8eb763068a76ada1671e75.mp4" type="video/mp4" />
                    </video>
                </NavLink>
            </div>
            <Allproducts />
            <Footer />
        </div>
    );
}

export default HomePg;
