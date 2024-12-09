import React from 'react'
import Banner from './Banner'
import Sidebar from './Sidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DropdownMenuArrow } from '@radix-ui/react-dropdown-menu'

const Hero = () => {
  return (
    <div className='flex min-h-screen ' >
    <div className='w-[20%] border-r-2 border-gray-300 mx-auto py-4 relative' >
      <div className='container absolute left-10 '>
        <ul className=''>
        <li className='text-2xl p-2 '>
        <DropdownMenu>
  <DropdownMenuTrigger>Women's Fashion <span><DropdownMenuArrow></DropdownMenuArrow></span></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Women's</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Unstiched</DropdownMenuItem>
    <DropdownMenuItem>Stiched</DropdownMenuItem>
    <DropdownMenuItem>Jewellery</DropdownMenuItem>
    <DropdownMenuItem>Bags</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
</li>
          <li className='text-2xl p-2 '>Women's Fashion</li>
          <li>Men's Fashion</li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby’s & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>
    </div>
    <div className='w-[70%] '>
  
    </div>
    </div>

  )
}

export default Hero