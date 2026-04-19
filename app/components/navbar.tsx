"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Recettes", href: "/#recettes" },
    { name: "Contactez nous", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#120500]/90 backdrop-blur-md border-b border-fire-orange/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-3xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-fire-red to-fire-yellow drop-shadow-md pb-1">
              PIQUAIIA
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-fire-yellow transition-colors px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fire-orange transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-fire-orange hover:text-fire-yellow hover:bg-wood-brown focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fire-orange transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out border-b border-fire-orange/20 ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-[#120500] shadow-inner">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="text-foreground hover:text-fire-yellow hover:bg-wood-brown/50 block px-4 py-3 rounded-xl text-base font-bold uppercase tracking-wider border border-transparent hover:border-fire-orange/30 transition-all"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}