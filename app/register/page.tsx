"use client"
import { useState } from "react"

export default function Register(){

 const [name,setName] = useState("")
 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")

 const handleSubmit = async (e:any)=>{
  e.preventDefault()

  await fetch("/api/auth/register",{
   method:"POST",
   headers:{
    "Content-Type":"application/json"
   },
   body:JSON.stringify({name,email,password})
  })

  alert("User Registered")
 }

 return(

  <form onSubmit={handleSubmit}>

   <input placeholder="Name"
   onChange={(e)=>setName(e.target.value)}
   />

   <input placeholder="Email"
   onChange={(e)=>setEmail(e.target.value)}
   />

   <input type="password"
   placeholder="Password"
   onChange={(e)=>setPassword(e.target.value)}
   />

   <button type="submit">
    Register
   </button>

  </form>

 )
}