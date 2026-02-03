import React from 'react'
import type { OrderType, ItemStandard } from '@/types'
import Link from 'next/link'
import ProgressBar from './progressBar'
import { Eye } from 'lucide-react'

export default function DashBoardLive<T extends ItemStandard>({ordersData , progressBar , title , path} : {ordersData : T[] , progressBar:boolean , title:string , path:string}) {
  return (
    <div className='bg-white w-full rounded-[7px] py-3 px-3 flex flex-col gap-6'>
      <Link href={path} className='font-bold '>{title}</Link>  
      <ul className='flex flex-col gap-2'>
        {ordersData.map((item,ind)=>(
          <li className='bg-[#B4D6EC] px-4 py-2 rounded-[5px] flex gap-2' key={`${title}-${ind}`}>
            {item.Img && <item.Img size={70} className='bg-white p-[6px] rounded-[50%]'/>}
            <div className='flex flex-col justify-center'>
              {item.name && <h2>{item.name}</h2>}
              {item.title && <h2>{item.title}</h2>}
              {item.id && <Link href={path}>{item.id}</Link>}


              {item.brand && <p className='text-[#5B5F64] text-[1.6ch]'>{item.brand}</p>}
              {item.createdAt && <p className='text-[#5B5F64] text-[1.6ch]'>{item.createdAt}</p>}
              {item.phoneNumber && <p className='text-[#5B5F64] text-[1.6ch]'>{item.phoneNumber}</p>}
              
            </div>

            {item.progress
             ? <ProgressBar progress={item.progress} />
             :(
                <Link href={path} className='flex flex-1 items-center'><Eye className='ml-auto text-white bg-[#3F861E] p-[5px] rounded-[50%]' size={30} /></Link>
              )   
            }
          </li>
        ))}
      </ul>
    </div>
  )
}
