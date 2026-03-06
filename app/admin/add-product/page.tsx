"use client"

import { useState } from "react"

export default function AddProduct(){

  const [title,setTitle] = useState("")
  const [price,setPrice] = useState("")
  const [description,setDescription] = useState("")
  const [category,setCategory] = useState("")
  const [stock,setStock] = useState("")
  const [image,setImage] = useState<File | null>(null)

  const handleSubmit = async (e:any)=>{
    e.preventDefault()

    const formData = new FormData()

    formData.append("title",title)
    formData.append("price",price)
    formData.append("description",description)
    formData.append("category",category)
    formData.append("stock",stock)

    if(image){
      formData.append("image",image)
    }

    await fetch("/api/products",{
      method:"POST",
      body:formData
    })

    alert("Product Added")
  }

  return(

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">

      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Product Title"
            onChange={(e)=>setTitle(e.target.value)}
          />

          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Price"
            onChange={(e)=>setPrice(e.target.value)}
          />

          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Description"
            onChange={(e)=>setDescription(e.target.value)}
          />

          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Category"
            onChange={(e)=>setCategory(e.target.value)}
          />

          <input
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Stock"
            onChange={(e)=>setStock(e.target.value)}
          />

          <input
            type="file"
            className="w-full border border-dashed border-gray-400 rounded-lg p-3 cursor-pointer"
            onChange={(e)=>setImage(e.target.files?.[0] || null)}
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Add Product
          </button>

        </form>

      </div>

    </div>

  )
}