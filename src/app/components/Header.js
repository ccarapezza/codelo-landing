import Image from 'next/image'
import React from 'react'
import { bebas_Neue, montserrat } from '../fonts'

export default function Header() {
  return (
    <div className="flex justify-between items-center w-full pt-4 px-4">
        <div className="w-3/4">
            <p className="uppercase text-2xl md:text-6xl text">Cogollos del oeste</p>
            <p className="uppercase flex items-center text-4xl md:text-8xl text-nowrap border-codelo-a border-b-4 w-fit pr-6 md:pr-14">Sumá tu ap<span className={`text-xl font-bold px-0.5 ${montserrat.className}`}>x</span>rte</p>
        </div>
        <div className="w-1/4 flex justify-end items-center">
            <Image src="/logo.png" alt="Logo" width={150} height={100} />
        </div>
    </div>
  )
}
