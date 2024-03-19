import React, { useContext } from 'react'
import { context } from '../Context/Context'
import AdminNav from './AdminNav';

function User() {
    const {signUpUser}=useContext(context)
    console.log(signUpUser);
  return (
    <div><AdminNav/>
      <br />
      <br />
      

<div className="flex flex-col min-h-screen">
      
      <div className="container mx-auto py-8">
        {/* <h2 className="text-3xl font-semibold mb-4 text-center">Edit product</h2> */}
        <div className="grid grid-cols-1 gap-4">
          {signUpUser.map((item) => (
            <div
            //   key={item.id}
              className="bg-white rounded shadow-md overflow-hidden"
            >
              <div className="p-4 flex items-center justify-between">
                
                    <div className="flex items-center">
                  {/* <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" /> */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-2">{item.email}</p>
                    
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
      
      
    </div>


    </div>
  )
}

export default User
