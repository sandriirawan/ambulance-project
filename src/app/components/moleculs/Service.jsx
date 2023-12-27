import React from 'react'
import CardService from "../atoms/Card"
import { Zoom } from 'react-reveal';



export default function Service() {
    return (
        <div className='w-screen h-auto md:px-[5%] lg:px-[10%] xl:px-[10%] py-5 flex'>
            <div className='flex flex-col items-center justify-center pb-20'>
                <Zoom duration={2000}>
                    <h1 className='text-black font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-5'>Layanan</h1>
                    <CardService />
                </Zoom>
            </div>
        </div>
    )
}
