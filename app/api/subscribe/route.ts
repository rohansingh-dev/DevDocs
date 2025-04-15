import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    // In a production environment, you would use a database
    // This is a simple file-based approach for demonstration
    const dataDir = path.join(process.cwd(), "data")
    const filePath = path.join(dataDir, "subscribers.csv")

    // Create directory if it doesn't exist
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // Create file if it doesn't exist
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, "email,subscribed_at\n")
    }

    // Check if email already exists
    const fileContent = fs.readFileSync(filePath, "utf-8")
    if (fileContent.includes(email)) {
      return NextResponse.json({ message: "You are already subscribed" }, { status: 200 })
    }

    // Add new subscriber
    const timestamp = new Date().toISOString()
    fs.appendFileSync(filePath, `${email},${timestamp}\n`)

    return NextResponse.json({ message: "Successfully subscribed to newsletter" }, { status: 201 })
  } catch (error) {
    console.error("Error subscribing:", error)
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 })
  }
}
