"use client"

import Link from "next/link"
import { Github, Instagram, Linkedin, Menu, X, Youtube } from "lucide-react"
import { useState } from "react"
import ThemeToggle from "./ThemeToggle"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "./ui/sheet"

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const navLinks = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
    { name: "Posts", link: "/posts" },
    { name: "Projects", link: "/projects" },
  ]
  
  return (
    <header className="mb-20 mt-16 flex content-center items-center justify-between font-sans text-base">
      <div className="flex gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="transparent">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col justify-between items-start">
            <div className="icon flex flex-col justify-center gap-4">
              {navLinks.map((item) => (
                <Link key={item.link} href={item.link} className="capitalize font-semibold">
                  {item.name}
                </Link>
              ))}
            </div>
            <SheetFooter>
              <div className="flex gap-4">
                <Instagram className="h-5 w-5" />
                <Linkedin className="h-5 w-5" />
                <Youtube className="h-5 w-5" />
                <X className="h-5 w-5" />
                <Github className="h-5 w-5" />
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex justify-between gap-4">
        <ThemeToggle />
      </div>
    </header>
  )
}
