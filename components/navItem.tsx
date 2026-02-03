"use client"
import React from 'react'
import { TypeNavPathContainer } from '@/types'
import {useState , useEffect} from "react"
import { ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


export default function NavItem({navProp, collapsed, onLinkClick} : {navProp : TypeNavPathContainer, collapsed: boolean, onLinkClick?: () => void}) {
    const [open, setOpen]= useState(false);
    const path = usePathname();
    
    // Load open state from localStorage on mount
    useEffect(() => {
        const savedState = localStorage.getItem(`nav-${navProp.name}`);
        if (savedState === 'true') {
            setOpen(true);
        }
    }, [navProp.name]);
    
    // Close dropdown when sidebar collapses
    useEffect(() => {
        if (collapsed) {
            setOpen(false);
        }
    }, [collapsed]);

    // Save open state to localStorage
    const handleToggle = () => {
        const newState = !open;
        setOpen(newState);
        localStorage.setItem(`nav-${navProp.name}`, String(newState));
    };

    const isAnyChildActive = navProp.children.some(child => child.path === path);
    const isParentActive = navProp.path === path;
    
    if (collapsed) {
        return (
            <li className='w-12'>
                <Link 
                    href={navProp.path} 
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isAnyChildActive || isParentActive
                            ? 'text-black bg-[#61FFF2]' 
                            : 'text-white hover:bg-[#3FBCC8]'
                    }`}
                    title={navProp.name}
                >
                    <navProp.icon size={24} />
                </Link>
            </li>
        );
    }

    return (
        <li 
            className='text-white text-lg sm:text-xl flex flex-col gap-0 w-full' 
        >
            <div
                className={`px-[10%] flex gap-2 w-full py-[3px] transition-all duration-300 items-center ${
                    isAnyChildActive || isParentActive
                        ? 'bg-[#3FBCC8]' 
                        : 'hover:bg-[#3FBCC8]'
                }`} 
            >
                <Link 
                    href={navProp.path} 
                    className='flex items-center gap-2 flex-1'
                    onClick={onLinkClick}
                >
                    <navProp.icon size={20} />
                    <p>{navProp.name}</p>
                </Link>
                <button
                    onClick={handleToggle}
                    className='cursor-pointer p-1'
                >
                    <ChevronDown 
                        size={20} 
                        className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                    />
                </button>
            </div>

            <ul 
                className={`overflow-hidden transition-all duration-500 ease-in-out w-full flex flex-col ${
                    open 
                    ? 'max-h-96 opacity-100 gap-1 pt-2 pb-1' 
                    : 'max-h-0 opacity-0 gap-0'
                }`}
            >
                {navProp.children.map((item,ind)=>{
                    const isActive = item.path === path;
                    return (
                        <li 
                            key={`${item.name}-${ind}`}
                            className={`w-[60%] px-[5px] py-[2px] rounded ml-[45px] transition-all duration-300 text-sm sm:text-[1.6ch] ${
                                isActive
                                    ? 'text-black bg-[#61FFF2]' 
                                    : 'text-white hover:bg-[#3FBCC8]'
                            }`}
                        >
                            <Link 
                                href={item.path} 
                                className='flex gap-1 items-center py-[3px]'
                                onClick={onLinkClick}
                            >
                                <item.icon size={16} />
                                {item.name}
                            </Link>
                        </li>
                    ) 
                })}
            </ul>
        </li>
    )
}