import React from 'react'
import Allproducts from './Components/Allproducts'
import Navbar from './Navbar'

function Brand() {
  return (
    <div>
        <Navbar/>
        <h1 className='text-5xl text-center m-5 font-bold'>COLLECTIONS</h1>
      <Allproducts/>
    </div>
  )
}

export default Brand
