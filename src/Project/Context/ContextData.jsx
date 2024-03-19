import { context } from "./Context";
import { data } from "../Data";
import { useState } from "react";

export const MycontextProvider=({children})=>{
    const[products,SetProducts]=useState(data)
    const[signUpUser,setSignUpUser]=useState([])
    const[Luser,setLuser]=useState(null)
    const[tt,setTt]=useState(0)
    const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
    return(
        <context.Provider value={{tt,setTt,products,SetProducts,signUpUser,setSignUpUser,Luser,setLuser,password,setPassword,email,setEmail}}>
     {children}
        </context.Provider>

    )
}