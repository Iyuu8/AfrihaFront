'use client'

import React, { useState } from 'react'
import { Menu, Bell, Mail } from 'lucide-react';
import SearchBar from './searchBar';
import Link from 'next/link';
import Sidebar from './sidebar';
import { user } from "../variables_functions"

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar 
        user={user} 
        isOpen={isSidebarOpen}
        className="fixed lg:hidden"
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <header className='flex h-[15vh] items-center px-[6%] sm:gap-[8%] gap-3 py-[10px]'>
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className='lg:hidden text-[#32A4AF] hover:bg-gray-100 p-2 rounded-lg transition-colors'
        >
          <Menu size={28} />
        </button>

        <SearchBar />

        {/*notifications*/}
        <div className='flex gap-3 text-white ml-auto'>
          <Link href="" className='flex rounded-[50%] p-[7px] bg-[#00A7C1] hover:bg-[#06b5d0]'><Bell /></Link>
          <Link href="" className='flex rounded-[50%] p-[7px] bg-[#A5DDFF] hover:bg-[#91cdf3]'><Mail /></Link>
        </div>
      </header>
    </>
  )
}