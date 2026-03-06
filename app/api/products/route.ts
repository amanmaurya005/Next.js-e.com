import { connectDB } from "@/lib/mongodb"
import Product from "@/models/Product"
import fs from "fs"
import path from "path"

export async function POST(req: Request) {

  await connectDB()

  const data = await req.formData()

  const title = data.get("title") as string
  const price = data.get("price") as string
  const description = data.get("description") as string
  const category = data.get("category") as string
  const stock = data.get("stock") as string
  const imageFile = data.get("image") as File

  const bytes = await imageFile.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const fileName = Date.now() + "-" + imageFile.name
const uploadDir = path.join(process.cwd(), "public/uploads")

// create folder if not exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

const uploadPath = path.join(uploadDir, fileName)

  fs.writeFileSync(uploadPath,buffer)

  const product = await Product.create({
    title,
    price,
    description,
    category,
    stock,
    image:`/uploads/${fileName}`
  })

  return Response.json(product)
}
export async function GET() {

  await connectDB()

  const products = await Product.find()

  return Response.json(products)
}