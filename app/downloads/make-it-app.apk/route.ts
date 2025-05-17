import { NextResponse } from "next/server"

export async function GET() {
  // In a real app, you would serve the actual APK file
  // For this example, we'll redirect to a placeholder download
  return NextResponse.redirect("https://example.com/downloads/make-it-app.apk")
}
