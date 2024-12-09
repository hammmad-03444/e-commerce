'use client'
import React from 'react'

import { useState } from 'react';
import { Button } from './ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

const TopHeader = () => {
     // State for the selected language
  const [language, setLanguage] = useState('English');

  // Function to handle language change
  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    console.log(`Language changed to: ${newLanguage}`); // Optional: Debug message
  };
  return (
    <div>
        
        <div className="bg-black p-3 text-white hidden md:flex justify-between items-center px-4 py-2 w-full text-sm">
      {/* Promotional Message */}
      <div className='mx-auto max-w-7xl'>
        <span className="mr-2">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%</span>
        <a
          href="/shop"
          className="text-purple-500 underline hover:text-purple-300 transition"
        >
          Shop Now
        </a>
      </div>

      {/* Language Dropdown */}
      <div className="relative gap-2 mr-6">
      <DropdownMenu>
  <DropdownMenuTrigger className='flex items-center space-x-1 hover:text-purple-500 transition '>{language}
    
<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth="1.5"
stroke="currentColor"
className="w-4 h-4"
>
<path
  strokeLinecap="round"
  strokeLinejoin="round"
  d="M8.25 9.75L12 13.5l3.75-3.75"
/>
</svg>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Languages</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            onClick={() => handleLanguageChange('Urdu')}>Urdu</DropdownMenuItem>
    <DropdownMenuItem className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            onClick={() => handleLanguageChange('English')}>English</DropdownMenuItem>
    <DropdownMenuItem className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            onClick={() => handleLanguageChange('French')}>French</DropdownMenuItem>
    <DropdownMenuItem className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            onClick={() => handleLanguageChange('Spanish')}>Spanish</DropdownMenuItem>
    <DropdownMenuItem className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            onClick={() => handleLanguageChange('Chineese')}>Chineese</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

        {/* <Button
          className="flex items-center space-x-1 hover:text-purple-500 transition"
        >
          <span>{language}</span>
         
        </Button>
        <ul className="absolute right-0 mt-2 bg-white text-black rounded shadow-lg w-24 hidden group-hover:block">
          <li
            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            onClick={() => handleLanguageChange('English')}
          >
            English
          </li>
          <li
            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            onClick={() => handleLanguageChange('Spanish')}
          >
            Spanish
          </li>
          <li
            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
            onClick={() => handleLanguageChange('French')}
          >
            French
          </li>
        </ul> */}
      </div>
    </div>
        </div>
    
  )
}

export default TopHeader


















