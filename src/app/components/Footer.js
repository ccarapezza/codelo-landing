import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className="flex justify-center w-full bg-black">
            <p className="text-white py-4 md:text-2xl">
                Powered by <Link href="https://westcode.com.ar">WestCode</Link>
            </p>
        </div>
    )
}
