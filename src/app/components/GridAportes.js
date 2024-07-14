import React from 'react'

const aportesMensuales = [
    {
        title: "MENSUAL",
        monto: "$ 2500"
    },
    {
        title: "MENSUAL",
        monto: "$ 4500"
    },
    {
        title: "MENSUAL",
        monto: "$ 6000"
    },
    {
        title: "MENSUAL",
        monto: "$ 8000"
    }
]

const aportesUnicos = [
    {
        title: "ÚNICO",
        monto: 4500
    },
    {
        title: "ÚNICO",
        monto: 6000
    },
    {
        title: "ÚNICO",
        monto: 8000
    },
    {
        title: "ÚNICO",
        monto: 10000
    }
]

export default function GridAportes() {
  return (
    <div className="flex flex-col my-4 md:my-8 mx-auto gap-4 text-3xl md:text-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aportesMensuales.map((aporte) => (
                <div key={"mensual-"+aporte.monto} className="flex flex-col gap-4 justify-center items-center border-4 border-black bg-white p-6 hover:cursor-pointer hover:bg-black hover:text-white">
                    <p>{aporte.title}</p>
                    <p>{aporte.monto}</p>
                </div>
            ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {aportesUnicos.map((aporte) => (
                <div key={"mensual-"+aporte.monto} className="flex flex-col gap-4 justify-center items-center border-4 border-black bg-black text-white p-6 hover:cursor-pointer hover:bg-white hover:text-black">
                    <p>{aporte.title}</p>
                    <p>{aporte.monto}</p>
                </div>
            ))}
        </div>
        <div className="flex flex-col gap-4 text-3xl md:text-5xl">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex px-10 justify-center items-center border-4 border-black bg-white p-6 hover:cursor-pointer hover:bg-black hover:text-white">
                    PAYPAL
                </div>
                <div className="flex flex-grow justify-center items-center border-4 border-black bg-white p-6 hover:cursor-pointer hover:bg-black hover:text-white">
                    {'ALIAS: "CODELO.APORTES"'}
                </div>
            </div>
        </div>
    </div>
  )
}
