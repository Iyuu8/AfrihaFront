import React from 'react'
import { Menu,Bell,Mail } from 'lucide-react';
import SearchBar from './searchBar';
import Link from 'next/link';
import ToggleCollapse from './toggleCollapse';

export default function Header() {
    
  return (
    <header className='flex h-[15vh] items-center px-[6%] gap-[8%]'>
        <SearchBar />

        {/*notifications*/}
        <div className='flex gap-3 text-white ml-auto'>
            <Link href="" className='flex rounded-[50%] p-[7px] bg-[#00A7C1] hover:bg-[#06b5d0]'><Bell /></Link>
            <Link href="" className='flex rounded-[50%] p-[7px] bg-[#A5DDFF] hover:bg-[#91cdf3]'><Mail /></Link>
        </div>

    </header>
  )
}
