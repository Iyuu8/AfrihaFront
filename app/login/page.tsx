"use client"
import React from 'react'
import {useState , useEffect } from 'react'
import { FaEnvelope, FaEye, FaLock, FaRegEnvelope} from 'react-icons/fa6'
import Link from 'next/link'
import LoginFeatureContainer from '@/components/loginFeatureContainer'
import { FiShoppingCart } from "react-icons/fi";
import { FaExclamationCircle } from 'react-icons/fa'
import { BarChart3 } from 'lucide-react'


export default function Login() {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");  
  const [showPass, setShowPass] = useState(false);
  const handleSubmit = (e : React.FormEvent)=>{
    e.preventDefault();
  }
    
  return (
    <div className='flex min-h-screen bg-[#E8F6FF]'>
        {/*left side*/}
        <div className='flex flex-col w-full lg:w-1/2 gap-[10%] pt-[9vh] pb-[1vh] h-full'>
            <div className='flex flex-col items-center gap-1.1'>
                <h1 className='font-bold text-black text-[28px] xs:text-[30px] md:text-[34px] lg:text-[36px]'>WELCOLME BACK !</h1>
                <p className='text-[#636364] font-normal text-[16px] xs:text-[18px] md:text-[20px] lg:text-[23px]'>Welcome back! Please enter your details.</p>
            </div>
            <form 
                action="submit" 
                className='flex items-center gap-[5vh] flex-col mt-[clamp(20px,4vh,60px)]'
                onSubmit={handleSubmit}
            >
                {/*email*/}
                <label className='flex flex-col items-start w-[80%] xs:w-[70%] gap-1'>
                    <h2 className='text-[#444] font-medium font-family-poppins w-full'>Email Address</h2>
                    <div className='flex border-2 rounded-[10px] border-[#D9D9D9] px-5 items-center py-[2px] w-full'>
                        <span className='font-light text-[30px] text-[#929292]'><FaRegEnvelope/></span>
                        <input 
                            type="text" 
                            className='outline-none text-[2.2ch] text-[#444444] px-[12px] py-[3px]'
                            placeholder='you@example.com'
                            required
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                </label>
                {/*password*/}
                <label className='flex flex-col items-start w-[80%] xs:w-[70%] gap-1'>
                    <h2 className='text-[#444] font-medium font-family-poppins w-full'>Password</h2>
                    <div className='flex border-2 rounded-[10px] border-[#D9D9D9] px-5 items-center py-[2px] w-full'>
                        <span className='font-light text-[25px] text-[#929292]'><FaLock/></span>
                        <input 
                            type={showPass? "text":"password"} 
                            className='outline-none text-[2.2ch] text-[#444444] px-[12px] py-[3px]'
                            placeholder='you@example.com'
                            required
                            onChange={(e)=>setPassword(e.target.value)}
                            value={password}
                        />
                        <button 
                            className='ml-auto text-[#32A4AF] text-2xl cursor-pointer'
                            onClick={()=>setShowPass(!showPass)}
                        ><FaEye/></button>
                    </div>
                </label>

                <div className='flex justify-between w-[85%] xs:w-[70%]'>
                    <label className='font-medium flex items-center'>
                        <input type="checkbox" className='w-[30px]'/>
                        Remeber me

                    </label>
                    <Link href="/" className='font-bold underline'>forgot password</Link>
                </div>

                <div className='w-[85%] xs:w-[70%] flex justify-center my-[5vh]'>
                    <button className='bg-[#28C2DE] w-[90%] xs:w-[80%] py-[8px] rounded-[6px] font-bold text-white font-family-poppins cursor-pointer transition-all duration-300 hover:bg-[#2cc9e4] md:text-[22px] text-[20px] shadow-sm shadow-[#28C2DE]'>Sign in</button>
                </div>

            </form>

            {/* Demo mode notice */}
            <div className='flex justify-center mt-4'>
                <div className=" bg-blue-50 rounded-xl border border-blue-100 px-[20px] py-[15px] text-[#31b4cb]">
                    <div className="flex items-center gap-2">
                        <FaExclamationCircle className="w-10 h- text-2xl" />
                        <span className="font-medium">Demo Mode</span>
                    </div>
                    <p className="mt-1 text-sm text-[#66bedb]">
                        Use any email/password to test the login flow
                    </p>
                </div>

            </div>

        </div>
        {/*right side*/}
        <div className='min-h-screen hidden lg:flex lg:w-1/2 bg-linear-[-50deg] from-[#3EC7E4] to-[#A6DDFF] flex-col gap-[clamp(5px,1vh,10px)]'>
            <div className='px-[20px] pt-[10px]'>
                <img 
                    src="/afriha_logo_v2.png" 
                    alt="afriha logo" 
                    className='w-[200px]'
                />
            </div>
            <div className='w-full flex justify-center'>
                <img 
                    src="/bags_afriha.png" 
                    alt="bags picture" 
                    className='w-[350px]'
                />
            </div>
            <div className='flex flex-col gap-[clamp(10px,1vh,15px)] mt-[clamp(20px,5vh,70px)] px-[clamp(20px,2.5vw,60px)]'>
                <h1 className='text-white font-bold text-[40px] leading-12'>Manage your inventory with confidence</h1>
                <p className='text-white font-semibold text-[16px]'>Track products, manage orders and gain insights with our powerful inventory management system.</p>
            </div>
            <div className='flex w-full justify-between px-[clamp(15px,1.5vw,60px)] py-[clamp(10px,2vh,30px)] gap-2'>
                <LoginFeatureContainer
                    title = 'Smart Orders'
                    description='Automate purchase & sales'
                    Icon = {FiShoppingCart}
                />
                <LoginFeatureContainer
                    title = 'Real-time Tracking'
                    description='Monitor stock levels instantly'
                    Icon = {BarChart3}
                />
            </div>
        </div>
    </div>
  )
}
