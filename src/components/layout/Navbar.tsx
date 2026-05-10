"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, User, Menu } from "lucide-react";
import { NAVIGATION_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";
import CartDrawer from "./CartDrawer";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const cartCount = 2;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-0.5 flex-shrink-0">
              <span className="text-xl font-black text-[#0F0F0F] tracking-tight">TRENDY</span>
              <span className="text-xl font-black text-[#7C3AED] tracking-tight">STUDIO</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#6B7280] hover:text-[#0F0F0F] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center gap-1">
              <button
                aria-label="Search"
                className="p-2.5 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                <Search size={18} strokeWidth={1.8} />
              </button>
              <Link
                href="/account"
                aria-label="Account"
                className="p-2.5 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                <User size={18} strokeWidth={1.8} />
              </Link>
              <button
                onClick={() => setCartOpen(true)}
                aria-label="Cart"
                className="relative p-2.5 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              >
                <ShoppingBag size={18} strokeWidth={1.8} />
                {cartCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 bg-[#7C3AED] text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Menu"
                className="md:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors duration-200 ml-1"
              >
                <Menu size={18} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
