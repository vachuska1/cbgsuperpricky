"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Popis systému", href: "#popis-systemu" },
  { name: "Montáž", href: "#montaz" },
  { name: "Udržitelnost", href: "#udrzitelnost" },
  { name: "Certifikace", href: "#certifikace" },
  { name: "Balení a přeprava", href: "#baleni-a-preprava" },
  { name: "Kontakty", href: "#kontakty" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-white max-w-md mb-4 md:mb-0">
          <h1 className="text-xl md:text-2xl font-bold">
            Nejefektivnější řešení pro rychlé vybudování protipožárních příček v nejvyšší dostupné kvalitě
          </h1>
          <div className="mt-2">
            <h2 className="text-2xl md:text-3xl font-bold">
              CBG EasyPan<sup>®</sup>
            </h2>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 focus:outline-none"
            aria-label={isMenuOpen ? "Zavřít menu" : "Otevřít menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-white hover:text-gray-200 font-medium">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-20 right-0 left-0 bg-seablue z-50 p-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gray-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
