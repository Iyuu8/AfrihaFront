'use client'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function ToggleCollapse({collapsedProp} : {collapsedProp : [collapsed:boolean , setCollapsed : (collapsed:boolean)=>void]}) {
  const [collapsed, setCollapsed] = collapsedProp;

  return (
    <button
      onClick={() => setCollapsed(!collapsed)}
      className="relative w-12 h-12 flex items-center justify-center focus:outline-none"
    >
      {/* Menu icon */}
      <Menu
        strokeWidth={3}
        size={40}
        className={`
          absolute transition-all duration-500
          ${collapsed ? 'rotate-90 opacity-0 blur-sm' : 'rotate-0 opacity-100 blur-0'}
          text-[#32A4AF]
        `}
      />

      {/* X icon */}
      <X
        strokeWidth={3}
        size={40}
        className={`
          absolute transition-all duration-500
          ${collapsed ? 'rotate-0 opacity-100 blur-0' : '-rotate-90 opacity-0 blur-sm'}
          text-[#32A4AF]
        `}
      />
    </button>
  );
}

