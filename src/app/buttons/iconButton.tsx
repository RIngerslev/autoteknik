"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

export function IconButton(
  props: {
    className?: string
    text?: string
    iconName: string
    href: string
  }
) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    // Reset animation after it completes
    setTimeout(() => setIsClicked(false), 100);
  };

  return (
    <Link className="text-white text-m font-bold" href={props.href}>
      <button className={`inline-flex bg-[#264230] px-4 py-2 rounded-3xl cursor-pointer active:shadow-none active:py-[7.5px] active:px-[15.5px] active:mr-[0.5px] shadow-lg shadow-white/10 ${props.className}`} onClick={() => { handleClick }}>
        {props.text}
          <Image
            src={`/icons/${props.iconName}.svg`}
            alt={`${props.iconName} icon`}
            width={20}
            height={20}
            className={`justify-center mb-0.5 stroke-white ${props.text ? 'ml-2' : ''}`}
          />
      </button>
    </Link >
  )
}