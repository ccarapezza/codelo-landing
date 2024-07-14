import React from 'react'
import { montserrat, bebas_Neue } from '../fonts'
import RRSS from './RRSS'

export default function SpeechAndContacto() {
  return (
    <div className={`flex flex-col bg-black ${montserrat.className}`}>
        <div className="flex flex-col md:flex-row my-8">
            <div className="md:w-3/5 text-white md:border-r-4 border-codelo-a py-14 text-center">
                <h2 className={`text-6xl ${bebas_Neue.className}`}>{`"Loreo" TITULO ATRACTIVO:`}</h2>
                <p className="font-light text-2xl md:text-3xl line my-8 mx-8 leading-8 md:mx-14">Texto grande: Loeem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div className="border-t-4 border-codelo-a mx-8 md:hidden"/>
            </div>
            <div className="md:w-2/5 text-white my-8 px-4 md:px-12">
                <h2 className={`text-6xl ${bebas_Neue.className}`}>{`Contactate con nosotros`}</h2>
                <input type="text" placeholder="Nombre" className="w-full bg-black text-white p-2 my-4 border-gray-800 border rounded-sm"/>
                <input type="text" placeholder="Email" className="w-full bg-black text-white p-2 my-4 border-gray-800 border rounded-sm"/>
                <textarea placeholder="Mensaje" rows="8" className="w-full bg-black text-white p-2 my-4 border-gray-800 border rounded-sm"/>
                <div className="flex justify-center">
                    <button className={`text-white p-2 w-fit my-4 rounded-sm border-white border-4 px-4 hover:bg-white hover:cursor-pointer hover:text-black uppercase text-4xl ${bebas_Neue.className}`}>Enviar</button>
                </div>
            </div>
        </div>
        <div className="bg-codelo-b flex justify-center pt-4">
            <RRSS/>
        </div>
    </div>
  )
}
