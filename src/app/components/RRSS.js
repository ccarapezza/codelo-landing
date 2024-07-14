import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function RRSS() {
  return (
    <div className="flex gap-4 mx-auto mb-4">
        <div className="bg-black rounded-full flex justify-center items-center w-12 h-12 md:w-20 md:h-20 hover:bg-codelo-a hover:cursor-pointer">
            <FontAwesomeIcon icon={faInstagram} className='text-white text-2xl md:text-5xl' fixedWidth />
        </div>
        <div className="bg-black rounded-full flex justify-center items-center w-12 h-12 md:w-20 md:h-20 hover:bg-codelo-a hover:cursor-pointer">
            <FontAwesomeIcon icon={faYoutube} className='text-white text-2xl md:text-5xl' fixedWidth />
        </div>
        <div className="bg-black rounded-full flex justify-center items-center w-12 h-12 md:w-20 md:h-20 hover:bg-codelo-a hover:cursor-pointer">
            <FontAwesomeIcon icon={faTiktok} className='text-white text-2xl md:text-5xl' fixedWidth />
        </div>
        <div className="bg-black rounded-full flex justify-center items-center w-12 h-12 md:w-20 md:h-20 hover:bg-codelo-a hover:cursor-pointer">
            <FontAwesomeIcon icon={faTelegramPlane} className='text-white text-2xl md:text-5xl' fixedWidth />
        </div>
        <div className="bg-black rounded-full flex justify-center items-center w-12 h-12 md:w-20 md:h-20 hover:bg-codelo-a hover:cursor-pointer">
            <FontAwesomeIcon icon={faWhatsapp} className='text-white text-2xl md:text-5xl' fixedWidth />
        </div>
    </div>
  )
}
