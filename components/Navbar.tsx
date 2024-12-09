import Link from 'next/link'
import React from 'react'
import { Input } from "@/components/ui/input"
import { HamIcon, Heart, MenuIcon, Search, ShoppingCart } from 'lucide-react'
import { Button } from './ui/button'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  


const Navbar = () => {
  return (
    <nav className='w-full border-b-2 border-gray-300 p-4'>
        <div className='max-w-7xl justify-between flex items-center mx-auto'>
            <h1 className='font-bold text-2xl'>EXCLUSIVE</h1>

            <div className=' gap-6 hidden md:flex'>
                <Link className='text-sm font-normal' href={"#"}>Home</Link>
                <Link className='text-sm font-normal' href={"#"}>Contact</Link>
                <Link className='text-sm font-normal' href={"#"}>About</Link>
                <Link className='text-sm font-normal' href={"#"}>Sign Up</Link>
            </div>
            <div className=' gap-4 hidden md:flex' >
                <div className='relative'>
                <Input placeholder='What are you looking for?' className='bg-[#F5F5F5] rounded px-4 pr-10'/>
                <Search className='absolute right-1 top-2 space-x-4'/>
                </div>
                <Button variant={'ghost'} size={'icon'} className='rounded-full'>
                   <Heart/>
                </Button>
                <Button variant={'ghost'} size={'icon'} className='rounded-full'>
                  <ShoppingCart/>
                </Button>
                
            </div>
            <div className='md:hidden'>
            <Sheet>
  <SheetTrigger>
  <Button variant={'outline'} size={'icon'} className='rounded-full'>
                   <MenuIcon/>
                </Button>
  </SheetTrigger>
  <SheetContent className='bg-white text-black'>
    <SheetHeader>
      <SheetTitle>
      MENU
      </SheetTitle>
      <SheetDescription>
      <div className=' gap-6 flex flex-col'>
                <Link className='text-sm font-normal' href={"#"}>Home</Link>
                <Link className='text-sm font-normal' href={"#"}>Contact</Link>
                <Link className='text-sm font-normal' href={"#"}>About</Link>
                <Link className='text-sm font-normal' href={"#"}>Sign Up</Link>
            </div>
            <div className='mt-4'>
            <div className='relative'>
                
                <Input placeholder='What are you looking for?' className='bg-[#F5F5F5] rounded px-4 pr-5'/>
                
                <Search className='absolute right-[-2] top-2 ml-4'/>
                </div>
            </div>
            <div className='mt-4 space-x-2'>
            <Button variant={'ghost'} size={'icon'} className='rounded-full'>
                 <Heart/>
                </Button>
                
                <Button variant={'ghost'} size={'icon'} className='rounded-full'>
                  <ShoppingCart/>
                </Button>
            </div>
       
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

            </div>
        </div>
    </nav>
  )
}

export default Navbar