"use client"

import { LayoutDashboard , Package, TextAlignStart, Boxes , Package2 , ShoppingCart ,HandCoins , ShoppingBasket , DollarSign, NotepadText, CreditCard, BookText, Mail, X, ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
import Link from "next/link"
import type { userType } from '@/types'
import { usePathname } from 'next/navigation'
import NavItem from "./navItem"
import { Power } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

import { navItems } from '@/variables_functions'




export default function Sidebar({user, isOpen, onToggle, className} : {user : userType, isOpen?: boolean, onToggle?: () => void , className?:string}) {
  const {name , role} = user;
  const path = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  const contentVariants = {
    expanded: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1,
        duration: 0.2
      }
    },
    collapsed: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.15
      }
    }
  };

  // For mobile: use isOpen prop, for desktop: always show (controlled by className)
  const isMobileOpen = isOpen ?? true;

  return (
    <>
      {/* Mobile overlay - only show if onToggle exists (meaning it's mobile) */}
      {onToggle && isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      <aside 
        className={`${className || ''} left-0 top-0 h-screen bg-[#32A4AF] pt-[10px] overflow-y-auto flex flex-col z-50 transition-all duration-300 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
          ${onToggle ? (isMobileOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}
          ${collapsed ? 'w-[80px]' : 'w-[300px]'}
        `}
      >
        {/* Mobile close button - only show if onToggle exists */}
        {onToggle && (
          <button
            onClick={onToggle}
            className="lg:hidden absolute top-4 right-4 text-white hover:bg-[#3FBCC8] p-2 rounded-lg transition-colors z-10"
          >
            <X size={24} />
          </button>
        )}
        
        <AnimatePresence mode="wait">
          {!collapsed && (    
            <motion.div 
              key="expanded"
              variants={contentVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              className='flex flex-col gap-[clamp(15px,5vh,60px)]'
            >
              {/* logo on expand*/}
              <Link href="/" className='px-[10px]'>
                <img 
                  src="/afriha_logo_v2.png" 
                  alt="afriha logo" 
                  className='w-[120px]'
                />
              </Link>

              {/*user profile on expand*/}
              <Link href="/profile" className='transition-all duration-300 flex items-center px-[20px] gap-4 text-white hover:bg-[#3FBCC8] py-[15px]'>
                <img 
                  src="/profile.jpg" 
                  alt="profile picture" 
                  className='w-16 sm:w-20 rounded-[50%]'
                />
                <div className='h-full flex flex-col justify-center pr-[25px]'>   
                  <h2 className='font-bold text-xl sm:text-2xl'>{name.toUpperCase()}</h2>
                  <p className='font-normal text-sm sm:text-[1.5ch]'>{role.toUpperCase()}</p>
                </div>
              </Link>
            </motion.div>
          )}

          {collapsed && (
            <motion.div 
              key="collapsed"
              variants={contentVariants}
              initial="collapsed"
              animate="expanded"
              exit="collapsed"
              className='flex flex-col items-center gap-4 mb-6'
            >
              {/* Logo icon on collapse */}
              <Link href="/" className='w-12 h-12 bg-white rounded-lg flex items-center justify-center'>
                 <Package className='text-[#32A4AF]' size={28} />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/*Dashboard*/}
        <nav className='w-full flex-1'>
          <ul className={`flex flex-col w-full ${collapsed ? 'gap-2 items-center' : 'gap-[clamp(8px,2.6vh,35px)]'}`}>
            {navItems.map((item,ind)=>{
              const isActive = item.path === path;
              return item.children.length === 0?(
                <li 
                  key={`${item.name}-${ind}`} 
                  className={`${collapsed ? 'w-12' : 'w-full flex justify-center'}`}
                >
                  <Link 
                    href={item.path} 
                    className={`rounded-xl py-[5px] flex items-center font-normal transition-all duration-300 text-lg sm:text-xl ${
                      collapsed 
                        ? 'w-12 h-12 justify-center' 
                        : 'w-full px-[3%] mx-[8%] justify-start gap-2'
                    } ${
                      isActive
                        ? 'text-black bg-[#61FFF2]' 
                        : 'text-white hover:bg-[#3FBCC8]'
                    }`}
                    title={collapsed ? item.name : ''}
                    onClick={onToggle}
                  >
                    <item.icon size={collapsed ? 24 : 20} />
                    {!collapsed && item.name}
                  </Link>
                </li>
              ):(
                <NavItem 
                  key={`${item.name}-${ind}`} 
                  navProp={item} 
                  collapsed={collapsed}
                  onLinkClick={onToggle}
                  isActive={isActive}
                />
              )
            })}
          </ul>
        </nav>
            
        {/*Logout and Toggle*/}    
        <div className='w-full flex flex-col items-center justify-center gap-3 mt-auto mb-[20px] px-[7.5%]'>
          {/* Logout Button */}
          {collapsed ? (
            <button 
              className='w-12 h-12 cursor-pointer bg-[#FF0000] flex items-center justify-center text-white font-bold rounded-xl hover:bg-[#CC0000] transition-all duration-300'
              title='Log Out'
            >
              <Power strokeWidth={3} size={24}/> 
            </button>
          ) : (
            <button 
              className='w-full bg-[#FF0000] flex items-center justify-center px-[15px] py-[10px] text-white font-bold rounded-xl gap-2 text-lg sm:text-xl hover:bg-[#CC0000] transition-all duration-300 cursor-pointer'
            >
              <Power strokeWidth={3} className='flex items-center'/> 
              <h2 className='flex items-end'>Log Out</h2>
            </button>
          )}

          {/* Toggle Button - Hidden on mobile */}
          {!onToggle && (
            <button
              onClick={handleToggle}
              className={`flex cursor-pointer items-center justify-center bg-[#1E88A8] text-white font-bold rounded-xl hover:bg-[#176B85] transition-all duration-300 ${
                collapsed ? 'w-12 h-12' : 'w-full px-[15px] py-[10px] gap-2'
              }`}
              title={collapsed ? 'Expand' : 'Collapse'}
            >
              {collapsed ? (
                <ChevronRight strokeWidth={3} size={24} />
              ) : (
                <>
                  <ChevronLeft strokeWidth={3} size={20} />
                  <span className='text-lg sm:text-xl'>Collapse</span>
                </>
              )}
            </button>
          )}
        </div>
      </aside>
    </>
  )
}