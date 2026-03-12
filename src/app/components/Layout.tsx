import React, { useState } from 'react';
import { Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';
import { Outlet, Link, useLocation } from 'react-router';
import { Toaster } from 'sonner';
import imgMullaAcbLogoWelcome11 from "figma:asset/486392a4c6b9ac8a312c538f03886e1e4b650a2a.png";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const isProducts = location.pathname === "/products";
  const isContact = location.pathname === "/contact";

  return (
    <div className="min-h-screen bg-white font-['Poppins',sans-serif] text-[#211f64] overflow-x-hidden flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <Link to="/" className="flex-shrink-0 flex items-center h-12 w-14 md:w-16 lg:w-20 relative z-20 overflow-hidden">
              <img src={imgMullaAcbLogoWelcome11} alt="ACB Logo" className="h-full w-auto object-contain object-left" />
            </Link>

            <nav className="hidden md:flex flex-grow justify-center space-x-4 lg:space-x-10 items-center relative z-10">
              <Link
                to="/"
                className={`font-semibold text-[16px] lg:text-[20px] transition-colors whitespace-nowrap ${isHome ? 'text-[#353879] border-b-2 border-[#353879]' : 'text-[#211f64]/75 hover:text-[#353879]'}`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-semibold text-[16px] lg:text-[20px] transition-colors whitespace-nowrap ${isAbout ? 'text-[#353879] border-b-2 border-[#353879]' : 'text-[#211f64]/75 hover:text-[#353879]'}`}
              >
                About Us
              </Link>
              <Link
                to="/products"
                className={`font-semibold text-[16px] lg:text-[20px] transition-colors whitespace-nowrap ${isProducts ? 'text-[#353879] border-b-2 border-[#353879]' : 'text-[#211f64]/75 hover:text-[#353879]'}`}
              >
                Our Products
              </Link>
              <Link
                to="/contact"
                className={`font-semibold text-[16px] lg:text-[20px] transition-colors whitespace-nowrap ${isContact ? 'text-[#353879] border-b-2 border-[#353879]' : 'text-[#211f64]/75 hover:text-[#353879]'}`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Spacer for desktop to keep nav centered */}
            <div className="hidden md:block w-28 md:w-32 lg:w-40 flex-shrink-0" />

            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[#211f64] hover:text-[#353879]">
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-24 left-0 w-full py-8 border-t border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="px-4 space-y-6 flex flex-col items-center text-center">
              <Link
                to="/"
                className={`font-semibold text-xl transition-all ${isHome ? 'text-[#353879] scale-110' : 'text-[#211f64]/75'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`font-semibold text-xl transition-all ${isAbout ? 'text-[#353879] scale-110' : 'text-[#211f64]/75'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/products"
                className={`font-semibold text-xl transition-all ${isProducts ? 'text-[#353879] scale-110' : 'text-[#211f64]/75'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Products
              </Link>
              <Link
                to="/contact"
                className={`font-semibold text-xl transition-all ${isContact ? 'text-[#353879] scale-110' : 'text-[#211f64]/75'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      {/* Shared Footer */}
      <footer className="bg-[#211f64] text-white pt-16 pb-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

            {/* Column 1: Logo & About */}
            <div className="col-span-1">
              <Link to="/" className="flex items-center h-16 w-16 md:w-20 relative mb-6 overflow-hidden">
                <img src={imgMullaAcbLogoWelcome11} alt="ACB Logo" className="h-full w-auto object-contain object-left" />
              </Link>
              <p className="text-sm lg:text-[15px] leading-relaxed text-white/90">
                ACB Group is dedicated to providing affordable, high-quality cleaning solutions for households. With our trusted brand MULA, we strive to make hygiene accessible for all while upholding strong quality and performance standards.
              </p>

              <div className="flex space-x-4 mt-8">
                <a href="#" className="w-10 h-10 rounded-full bg-white text-[#211f64] flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white text-[#211f64] flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white text-[#211f64] flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-xl font-medium mb-6">Quick Links</h3>
              <ul className="space-y-4 text-[15px]">
                <li><Link to="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-gray-300 transition-colors">About Us</Link></li>
                <li><Link to="/products" className="hover:text-gray-300 transition-colors">Products</Link></li>
                <li><Link to="/contact" className="hover:text-gray-300 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Column 3: Product Categories */}
            <div>
              <h3 className="text-xl font-medium mb-6">Product Categories</h3>
              <ul className="space-y-4 text-[15px]">
                <li><a href="#" className="hover:text-gray-300 transition-colors">Detergent Powders</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Cleaning Liquids</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Laundry Soaps</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Hand Wash</a></li>
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h3 className="text-xl font-medium mb-6">Contact Information</h3>
              <ul className="space-y-4 text-[15px] leading-relaxed">
                <li><span className="font-medium">ACB Group</span></li>
                <li className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>Kerala, India</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📞</span>
                  <a href="tel:+917025984447" className="hover:text-gray-300 transition-colors">+91 7025984447</a>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✉</span>
                  <a href="mailto:acbenterprises16@gmail.com" className="hover:text-gray-300 transition-colors">acbenterprises16@gmail.com</a>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🌐</span>
                  <a href="http://www.teamacb.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors underline underline-offset-4">www.teamacb.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <Toaster position="top-center" richColors />
    </div>
  );
}