import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Login from './Project/LoginSignup/Login'
import HomePg from './Project/HomePg'
import Footer from './Project/Footer'
import Signup from './Project/LoginSignup/Signup'
import Men from './Project/Men'
import Women from './Project/Women'
import { MycontextProvider } from './Project/Context/ContextData'
import Brand from './Project/Brand'
import Product from './Project/Product'
import Cart from './Project/Cart'
import AdminNav from './Project/Admin/AdminNav'
import AdminHomepg from './Project/Admin/AdminHomepg'
import AdminLog from './Project/Admin/AdminLog'
import AdminProductView from './Project/Admin/AdminProductView'
import AdminAddprdct from './Project/Admin/AdminAddprdct'
import User from './Project/Admin/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <MycontextProvider>
   <Routes>
    <Route path='/' element={<HomePg/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/footer' element={<Footer/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/men' element={<Men/>}/>
    <Route path='/women' element={<Women/>}/>
    <Route path='/brand' element={<Brand/>}/>
    <Route path='/:id' element={<Product/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='adnav' element={<AdminNav/>}/>
    <Route path='/adhome' element={<AdminHomepg/>}/>
    <Route path='/adlog' element={<AdminLog/>}/>
    <Route path='adprdctvw/:id' element={<AdminProductView/>}/>
    <Route path='/adminadd' element={<AdminAddprdct/>}/> 
    <Route path='/user' element={<User/>}/>
   </Routes>
   </MycontextProvider>
    </div>
  )
  }
export default App
