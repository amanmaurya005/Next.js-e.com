"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Navbar(){

 const router = useRouter()
 const [isLoggedIn,setIsLoggedIn] = useState(false)

 useEffect(()=>{
  const token = localStorage.getItem("token")
  setIsLoggedIn(!!token)
 },[])

 const handleLogout = ()=>{
  localStorage.removeItem("token")
  router.push("/login")
 }

 return(

  <header className="bg-white shadow-md">

   <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    {/* Logo */}
    <Link href="/" className="text-2xl font-bold text-indigo-600">
     MyStore
    </Link>

    {/* Navigation */}
    <nav className="flex items-center gap-6 text-gray-700 font-medium">

     {!isLoggedIn && (
      <>
       <Link
        href="/login"
        className="px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
       >
        Login
       </Link>

       <Link
        href="/register"
        className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
       >
        Register
       </Link>
      </>
     )}

     {isLoggedIn && (
      <button
       onClick={handleLogout}
       className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
      >
       Logout
      </button>
     )}

    </nav>

   </div>

  </header>

 )
}