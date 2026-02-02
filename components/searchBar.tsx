import React from 'react'
import { Search } from 'lucide-react';

export default function SearchBar() {

  return (
    <form action="/search">
        <label className='flex gap-2 bg-white rounded-[5px]  py-[3px] px-[9px] w-[clamp(15rem,35vw,35rem)] items-center text-[2.2ch]'>
            <Search strokeWidth={2.5} className='text-[#D9D9D9]' />
            <input 
                type="text" 
                className='outline-none'
                placeholder='Search...'
                name='query'
                
            />
        </label>
    </form>
  )
}
