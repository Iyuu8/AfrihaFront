import React from 'react'

export default function LoginFeatureContainer({title, description , Icon} : {title:string , description:string , Icon : React.ComponentType}) {
  return (
    <div className='flex gap-2.5 px-[clamp(5px,0.5vw,12px)] py-[8px] bg-[rgba(188,237,255,0.6)] rounded-[8px] text-white'>
        <div className='text-3xl flex items-center bg-[rgba(25,162,196,0.19)] pl-[clamp(6px,1vw,20px)] pr-[clamp(8px,1.1vw,22px)] rounded-[5px]'>
            <Icon />
        </div>
        <div className='flex flex-col'>
            <h2 className='font-bold text-[clamp(15px,1.8vw,23px)]'>{title}</h2>
            <p className='text-[rgba(255,255,255,0.8)] text-[clamp(13px,1.3vw,20px)]'>{description}</p>
        </div>
    </div>
  )
}
