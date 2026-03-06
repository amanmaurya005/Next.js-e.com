// import React from 'react'

// export default function page() {
//   return (
//     <>
//     <header className='flex items-center justify-between px-8 bg-amber-600 text-white'>
//       <div className='w-1/3'>logo</div>
//       <nav className='w-4/6'>
//         <ul className='flex items-center  justify-evenly h-18'>
//           <li>home</li>
//           <li>about</li>
//           <li className='text-amber-900'>blog</li>
//           <li className='text-amber-300'>contact</li>
//         </ul>
//       </nav>
//     </header>
//     </>
//   )
// }

"use client"

import { useEffect, useState } from "react"

export default function Products() {

  const [products,setProducts] = useState([])

  useEffect(()=>{
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  },[])

  return (
    <div>

      <h1>Products</h1>

      {products.map((p:any)=>(
        <div key={p._id}>
          <h3>{p.title}</h3>
          <p>{p.price}</p>
          <img src={p.image} alt={p.title} />
        </div>
      ))}

    </div>
  )
}