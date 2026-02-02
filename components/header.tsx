"use client"
import React from 'react'
import {useState , useEffect} from "react"
import { Menu } from 'lucide-react';

export default function Header() {
    const [collapsed , setCollapsed] = useState(false);
  return (
    <header>
        <button onClick={()=>setCollapsed(!collapsed)}>
            <Menu />
        </button>

    </header>
  )
}
