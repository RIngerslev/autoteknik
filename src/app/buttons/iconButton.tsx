"use client"
import Link from 'next/link'
import { useState } from 'react'
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

  const { className, text, iconName, href } = props;

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`inline-flex items-center px-4 py-2 rounded-3xl cursor-pointer active:shadow-none shadow-lg shadow-white/10 font-bold ${isClicked ? 'scale-99' : ''} ${className}`}
    >
      {text}
      <Image
        src={`/icons/${iconName}.svg`}
        alt={`${iconName} icon`}
        width={20}
        height={20}
        className={`justify-center mb-0.5} ${text ? 'ml-2' : ''}`}
      />
    </Link>
  )
}