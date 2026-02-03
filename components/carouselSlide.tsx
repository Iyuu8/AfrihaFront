import React from 'react'

import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

export default function CarouselSlide({title , nb , Icon , path} : {title:string , nb:number , Icon: LucideIcon , path:string}) {
  return (
    <Link href={path} className='bg-[#444444] flex rounded-xl px-[10px] py-[7px] text-white'>
      <div className='flex w-[30%] justify-center items-center'> <Icon size={50} strokeWidth={1} /> </div>
      <div className='flex flex-col gap-2 items-center flex-1'>
        <h2 className='text-bold text-2xl'>{nb}</h2>
        <p className='text-bold text-xl'>{title}</p>
      </div>
    </Link>
  )
}
