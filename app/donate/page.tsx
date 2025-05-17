"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heart, Gift, ArrowLeft, Github, Linkedin, Instagram } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"

export default function DonatePage() {
  const [message, setMessage] = useState("")

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would process the payment
    alert("Thank you for your support!")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0f1235] to-black animated-gradient">
      <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-gradient-to-r from-black/90 via-[#0f1235]/90 to-black/90 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold text-xl">Make-it</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-4">
              <Link href="/" className="text-sm font-medium transition-colors hover:text-primary flex items-center">
                <ArrowLeft className="mr-1 h-4 w-4" />
                Back to Home
              </Link>
              <Link
                href="https://github.com/ronak-kumar-sing/Make-it-app"
                className="text-sm font-medium transition-colors hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ronak-kumar-a2b721285/"
                className="text-sm font-medium transition-colors hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/_ronak.kumar/"
                className="text-sm font-medium transition-colors hover:text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container py-16 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 text-transparent bg-clip-text">
              Support Make-it Development
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your donations help us continue to improve and maintain the Make-it app, keeping it free for everyone.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
            <div className="space-y-10">
              <Card className="bg-gradient-to-br from-[#1a1a2e] to-[#0f1235] border-gray-800">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-2xl">
                    <Heart className="mr-3 h-6 w-6 text-pink-500" />
                    Why Donate?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-base text-muted-foreground">
                    Make-it is a passion project created to help students and professionals boost their productivity.
                  </p>
                  <p className="text-base text-muted-foreground">Your donations directly support:</p>
                  <ul className="text-base text-muted-foreground space-y-3 list-disc pl-6">
                    <li>Ongoing development and new features</li>
                    <li>Server costs and infrastructure</li>
                    <li>Bug fixes and maintenance</li>
                    <li>Keeping the app free for everyone</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#1a1a2e] to-[#0f1235] border-gray-800">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-2xl">
                    <Gift className="mr-3 h-6 w-6 text-purple-500" />
                    Donor Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-base text-muted-foreground space-y-3 list-disc pl-6">
                    <li>Early access to new features</li>
                    <li>Your name in our supporters list</li>
                    <li>Special donor badge in the app</li>
                    <li>Direct input on future development</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="bg-gradient-to-br from-[#1a1a2e] to-[#0f1235] border-gray-800 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>

                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl mb-2">Support via UPI</CardTitle>
                  <CardDescription className="text-base">
                    Scan the QR code or use UPI ID to make a donation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="flex flex-col items-center justify-center space-y-8">
                      <div className="relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-25 animate-pulse"></div>
                        <div className="relative bg-white p-4 rounded-xl">
                          <Image
                            src="/upi-qr-code.png"
                            alt="UPI QR Code"
                            width={260}
                            height={260}
                            className="mx-auto"
                          />
                        </div>
                      </div>

                      <p className="text-base text-center text-muted-foreground px-4">
                        Scan this QR code with any UPI app like Google Pay, PhonePe, Paytm, or BHIM
                      </p>

                      <div className="flex flex-wrap justify-center gap-8 pt-2">
                        <Image
                          src="/placeholder.svg?key=gpay-logo"
                          alt="Google Pay"
                          width={40}
                          height={40}
                          className="h-12 w-auto"
                        />
                        <Image
                          src="/placeholder.svg?key=phonepe-logo"
                          alt="PhonePe"
                          width={40}
                          height={40}
                          className="h-12 w-auto"
                        />
                        <Image
                          src="/placeholder.svg?key=paytm-logo"
                          alt="Paytm"
                          width={40}
                          height={40}
                          className="h-12 w-auto"
                        />
                        <Image
                          src="/placeholder.svg?key=bhim-logo"
                          alt="BHIM"
                          width={40}
                          height={40}
                          className="h-12 w-auto"
                        />
                      </div>

                      <div className="w-full pt-4">
                        <Label htmlFor="upi-id" className="text-base mb-3 block">
                          Or pay directly with UPI ID
                        </Label>
                        <div className="flex items-center mt-3">
                          <Input
                            id="upi-id"
                            value="example@upi"
                            readOnly
                            className="bg-background/50 text-center text-base py-6"
                          />
                          <Button
                            type="button"
                            variant="outline"
                            className="ml-3 h-[52px] px-6"
                            onClick={() => {
                              navigator.clipboard.writeText("example@upi")
                              alert("UPI ID copied to clipboard!")
                            }}
                          >
                            Copy
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-6">
                      <Label htmlFor="message" className="text-base block mb-2">
                        Leave a Message (Optional)
                      </Label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={handleMessageChange}
                        placeholder="Share why you're supporting Make-it"
                        className="min-h-[120px] bg-background/50 text-base p-4"
                      />
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="pt-6 pb-10">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group relative overflow-hidden text-lg font-bold py-8 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 shadow-lg shadow-purple-500/30 animate-pulse"
                  >
                    <div className="absolute inset-0 w-10 bg-white/30 skew-x-[45deg] group-hover:transition-all group-hover:duration-500 group-hover:-translate-x-80 group-hover:skew-x-[45deg]" />
                    <Heart className="mr-4 h-7 w-7 text-white animate-beat" />
                    <span className="tracking-wider">SUPPORT via UPI</span>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-8 mt-16 border-t border-gray-800 bg-gradient-to-t from-black to-[#0f1235]/90">
        <div className="container flex flex-col gap-4 sm:flex-row items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Make-it App. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-6 sm:gap-8">
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="mailto:example@email.com" className="text-sm hover:underline underline-offset-4">
              Contact Support
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
