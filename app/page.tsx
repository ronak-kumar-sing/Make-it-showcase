"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  Clock,
  BarChart,
  Trophy,
  BookOpen,
  FolderOpen,
  Download,
  Twitter,
  Github,
  ChevronDown,
  Heart,
  Linkedin,
  Instagram,
} from "lucide-react"

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    keyFeatures: false,
    screenshots: false,
    cta: false,
  })

  useEffect(() => {
    setIsVisible({
      hero: true,
      features: false,
      keyFeatures: false,
      screenshots: false,
      cta: false,
    })

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight

      // Check each section's position and update visibility
      const featuresSection = document.getElementById("features")
      const keyFeaturesSection = document.getElementById("key-features")
      const screenshotsSection = document.getElementById("screenshots")
      const ctaSection = document.getElementById("cta")

      if (featuresSection && scrollPosition > featuresSection.offsetTop + 100) {
        setIsVisible((prev) => ({ ...prev, features: true }))
      }

      if (keyFeaturesSection && scrollPosition > keyFeaturesSection.offsetTop + 100) {
        setIsVisible((prev) => ({ ...prev, keyFeatures: true }))
      }

      if (screenshotsSection && scrollPosition > screenshotsSection.offsetTop + 100) {
        setIsVisible((prev) => ({ ...prev, screenshots: true }))
      }

      if (ctaSection && scrollPosition > ctaSection.offsetTop + 100) {
        setIsVisible((prev) => ({ ...prev, cta: true }))
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial positions

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-900 via-[#0f1235] to-black animated-gradient">
      <header className="sticky top-0 z-40 w-full border-b border-gray-800 bg-gradient-to-r from-black/90 via-[#0f1235]/90 to-black/90 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold text-xl">Make-it</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1 gap-5">
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("screenshots")}
                className="text-sm font-medium transition-colors hover:text-primary ml-4"
              >
                Screenshots
              </button>
              <button
                onClick={() => scrollToSection("download")}
                className="text-sm font-medium transition-colors hover:text-primary ml-4"
              >
                Download
              </button>
              <Link
                href="/donate"
                className="text-sm font-medium transition-colors hover:text-primary ml-4 flex items-center"
              >
                <Heart className="mr-1 h-4 w-4" />
                Donate
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-[#0f1235]/80 to-[#1a1a2e]/90 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div
                className={`flex flex-col justify-center space-y-4 transition-all duration-1000 ${isVisible.hero ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
              >
                <div className="space-y-2">
                  <Badge className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                    New Release
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Make-it: Productivity & Study Companion
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Maximize Your Productivity. Master Your Studies.
                  </p>
                </div>
                <p className="max-w-[600px] text-muted-foreground">
                  Your all-in-one productivity and study companion, crafted for students and professionals who want to
                  organize tasks, track progress, and achieve their goals.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row" id="download">
                  <Button asChild className="group relative overflow-hidden bg-primary hover:bg-primary/90">
                    <Link href="/downloads/make-it-app.apk">
                      <div className="absolute inset-0 w-3 bg-white/30 skew-x-[45deg] group-hover:transition-all group-hover:duration-500 group-hover:-translate-x-40 group-hover:skew-x-[45deg]" />
                      <Download className="mr-2 h-4 w-4" />
                      Download APK
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="ml-0 mt-2 min-[400px]:mt-0 min-[400px]:ml-2 transition-all hover:scale-105"
                  >
                    <Link href="https://make-it-app.vercel.app">
                      <span className="relative z-10">Try Web App</span>
                    </Link>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground animate-pulse">(Coming soon to iOS & Android App Stores)</p>
                <div className="pt-4">
                  <button
                    onClick={() => scrollToSection("features")}
                    className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Learn more
                    <ChevronDown className="ml-1 h-4 w-4 animate-bounce" />
                  </button>
                </div>
              </div>
              <div
                className={`flex items-center justify-center transition-all duration-1000 ${isVisible.hero ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
              >
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl blur-xl opacity-75 animate-pulse animated-gradient"></div>
                  <Image
                    src="/productivity-app-interface.png"
                    alt="Make-it App Preview"
                    width={400}
                    height={500}
                    className="rounded-xl shadow-lg relative z-10 hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#0f1235]/90 to-[#1a1a2e]/90 backdrop-blur-sm"
          id="features"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Make-it?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Designed to boost your focus, build habits, and unlock your academic potential.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div
                className={`flex flex-col justify-center space-y-4 transition-all duration-1000 delay-300 ${isVisible.features ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
              >
                <ul className="grid gap-6">
                  <li className="transform transition-all duration-300 hover:translate-x-1">
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold">All-in-one productivity suite</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Task management, Pomodoro timer, analytics, exam prep, and more.
                      </p>
                    </div>
                  </li>
                  <li className="transform transition-all duration-300 hover:translate-x-1">
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <BarChart className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold">Visual progress tracking</h3>
                      </div>
                      <p className="text-muted-foreground">Stay motivated with streaks, badges, and achievements.</p>
                    </div>
                  </li>
                  <li className="transform transition-all duration-300 hover:translate-x-1">
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold">Customizable and intuitive</h3>
                      </div>
                      <p className="text-muted-foreground">Simple, beautiful interface with powerful features.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className={`space-y-4 lg:order-first transition-all duration-1000 delay-300 ${isVisible.features ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 animated-gradient"></div>
                  <Image
                    src="/productivity-dashboard.png"
                    alt="Make-it Features"
                    width={500}
                    height={400}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full relative z-10 group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-black/80 via-[#0f1235]/80 to-black/80 backdrop-blur-sm"
          id="key-features"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to boost your productivity and academic success.
                </p>
              </div>
            </div>
            <div
              className={`mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 transition-all duration-1000 ${isVisible.keyFeatures ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-transparent hover:border-t-primary bg-gradient-to-br from-[#1a1a2e] to-[#0f1235] backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <CheckCircle className="h-12 w-12 text-primary mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold">Task Management</h3>
                  <p className="text-sm text-muted-foreground">Organize, prioritize, and track your to-dos.</p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-transparent hover:border-t-primary bg-gradient-to-br from-[#1a1a2e] to-[#0f1235] backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <Clock className="h-12 w-12 text-primary mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold">Study Timer</h3>
                  <p className="text-sm text-muted-foreground">Pomodoro sessions, focus mode, and detailed stats.</p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-transparent hover:border-t-primary bg-gradient-to-br from-[#1a1a2e] to-[#0f1235] backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <BarChart className="h-12 w-12 text-primary mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold">Analytics Dashboard</h3>
                  <p className="text-sm text-muted-foreground">Visualize your progress and productivity.</p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-transparent hover:border-t-primary bg-gradient-to-br from-[#1a1a2e] to-[#0f1235] backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <Trophy className="h-12 w-12 text-primary mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold">Streak & Achievements</h3>
                  <p className="text-sm text-muted-foreground">Build habits and celebrate milestones.</p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-transparent hover:border-t-primary bg-gradient-to-br from-[#1a1a2e] to-[#0f1235] backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <BookOpen className="h-12 w-12 text-primary mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold">Exam Prep</h3>
                  <p className="text-sm text-muted-foreground">Plan, schedule, and ace your exams.</p>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-transparent hover:border-t-primary bg-gradient-to-br from-[#1a1a2e] to-[#0f1235] backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
                  <FolderOpen className="h-12 w-12 text-primary mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold">Resource Organizer</h3>
                  <p className="text-sm text-muted-foreground">Keep all your study materials in one place.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#1a1a2e]/90 to-[#0f1235]/90 backdrop-blur-sm"
          id="screenshots"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Screenshots</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See Make-it in action across different devices.
                </p>
              </div>
            </div>
            <div
              className={`mx-auto max-w-5xl py-12 transition-all duration-1000 ${isVisible.screenshots ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <Tabs defaultValue="mobile" className="w-full">
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                  <TabsTrigger value="mobile">Mobile</TabsTrigger>
                  <TabsTrigger value="tablet">Tablet</TabsTrigger>
                  <TabsTrigger value="desktop">Desktop</TabsTrigger>
                </TabsList>
                <TabsContent value="mobile" className="mt-6">
                  <div className="flex flex-wrap justify-center gap-6">
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300 animated-gradient"></div>
                      <Image
                        src="/mobile-task-list-interface.png"
                        alt="Mobile Screenshot 1"
                        width={250}
                        height={500}
                        className="rounded-xl shadow-md relative z-10 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300 animated-gradient"></div>
                      <Image
                        src="/mobile-app-timer.png"
                        alt="Mobile Screenshot 2"
                        width={250}
                        height={500}
                        className="rounded-xl shadow-md relative z-10 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300 animated-gradient"></div>
                      <Image
                        src="/mobile-app-analytics-dashboard.png"
                        alt="Mobile Screenshot 3"
                        width={250}
                        height={500}
                        className="rounded-xl shadow-md relative z-10 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="tablet" className="mt-6">
                  <div className="flex flex-wrap justify-center gap-6">
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300 animated-gradient"></div>
                      <Image
                        src="/tablet-split-view-app.png"
                        alt="Tablet Screenshot"
                        width={600}
                        height={400}
                        className="rounded-xl shadow-md relative z-10 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="desktop" className="mt-6">
                  <div className="flex flex-wrap justify-center gap-6">
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300 animated-gradient"></div>
                      <Image
                        src="/desktop-app-dashboard.png"
                        alt="Desktop Screenshot"
                        width={800}
                        height={400}
                        className="rounded-xl shadow-md relative z-10 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section
          className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-800 bg-gradient-to-b from-[#0f1235]/90 to-black/90 backdrop-blur-sm"
          id="cta"
        >
          <div className="container px-4 md:px-6">
            <div
              className={`grid gap-10 px-10 md:gap-16 lg:grid-cols-2 transition-all duration-1000 ${isVisible.cta ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Take control of your productivity and studies—download Make-it today!
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="group relative overflow-hidden bg-primary hover:bg-primary/90">
                    <Link href="/downloads/make-it-app.apk">
                      <div className="absolute inset-0 w-3 bg-white/30 skew-x-[45deg] group-hover:transition-all group-hover:duration-500 group-hover:-translate-x-40 group-hover:skew-x-[45deg]" />
                      <Download className="mr-2 h-4 w-4" />
                      Download APK
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="transition-all hover:scale-105">
                    <Link href="https://github.com/ronak-kumar-sing/Make-it-app">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </Link>
                  </Button>
                </div>
                <div className="pt-4">
                  <Button asChild variant="ghost" className="transition-all hover:scale-105">
                    <Link href="/donate" className="flex items-center">
                      <Heart className="mr-2 h-4 w-4 text-pink-500" />
                      Support the Project
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <h3 className="text-xl font-bold">Connect With Us</h3>
                <p className="text-muted-foreground">Stay updated with new features, tips, and community events!</p>
                <div className="flex gap-4">
                  <Link
                    href="https://twitter.com"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-5 w-5" />
                    <span>Twitter</span>
                  </Link>
                  <Link
                    href="https://github.com/ronak-kumar-sing/Make-it-app"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                    <span>GitHub</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/ronak-kumar-a2b721285/"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>LinkedIn</span>
                  </Link>
                  <Link
                    href="https://www.instagram.com/_ronak.kumar/"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-5 w-5" />
                    <span>Instagram</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 bg-gradient-to-t from-black to-[#0f1235]/90">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Make-it App. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="mailto:example@email.com" className="text-xs hover:underline underline-offset-4">
            Contact Support
          </Link>
        </nav>
      </footer>
    </div>
  )
}
