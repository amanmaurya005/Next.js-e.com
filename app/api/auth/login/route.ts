import { connectDB } from "@/lib/mongodb"
import User from "@/models/User"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export async function POST(req: Request) {

  await connectDB()

  const { email, password } = await req.json()

  const user = await User.findOne({ email })

  if (!user) {
    return Response.json({ message: "User not found" })
  }

  const isMatch = await bcrypt.compare(password,user.password)

  if (!isMatch) {
    return Response.json({ message: "Invalid password" })
  }

  const token = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET as string,
    { expiresIn: "7d" }
  )

  return Response.json({
    message: "Login successful",
    token
  })
}