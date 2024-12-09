import React from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react'; // Example icon

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-600">
          Exclusive
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/contact" className="text-gray-600 hover:text-black">Contact</Link>
          <Link href="/about" className="text-gray-600 hover:text-black">About</Link>
          <Link href="/signup" className="text-gray-600 hover:text-black">Sign Up</Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-2 border rounded-lg px-3 py-1">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="What are you looking for?"
            className="border-none outline-none flex-grow"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-black">Account</button>
          <button className="text-gray-600 hover:text-black">Cart</button>
        </div>
      </div>
    </header>
  );
}
