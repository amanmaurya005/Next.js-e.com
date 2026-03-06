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

    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Our Products
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.map((p:any)=>(

          <div
            key={p._id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >

            {/* Product Image */}
            <div className="h-56 bg-gray-100 flex items-center justify-center">
              <img
                src={p.image}
                alt={p.title}
                className="h-full object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="p-4">

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {p.title}
              </h3>

              <p className="text-indigo-600 font-bold text-lg mb-3">
                ₹{p.price}
              </p>

              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                Add to Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  )
}