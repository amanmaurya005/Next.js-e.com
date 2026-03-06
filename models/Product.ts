import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  image: String,
  category: String,
  stock: Number
})

export default mongoose.models.Product ||
mongoose.model("Product", productSchema)