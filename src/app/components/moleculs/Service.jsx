import React from 'react'
import CardService from "../atoms/Card"
import { motion } from "framer-motion"



export default function Service() {
    return (
        <div className='w-screen h-auto md:px-[5%] lg:px-[10%] xl:px-[10%] py-5 flex'>
            <div className='flex flex-col items-center justify-center pb-20'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className='text-black font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-5'>Layanan</h1>
                </motion.div>
                    <CardService />
            </div>
        </div>
    )
}
