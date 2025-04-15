import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    if (!email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    // In a production environment, you would:
    // 1. Store the message in a database
    // 2. Send an email notification
    // 3. Maybe trigger a webhook

    // For now, we'll just log it
    console.log("Contact form submission:", { name, email, message })

    // Simulate a delay to make it feel like something happened
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
