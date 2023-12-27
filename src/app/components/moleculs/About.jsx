import { Button, Link } from '@nextui-org/react'
import { Fade } from 'react-reveal';
import React from 'react'

export default function About() {
    return (
        <>
            <div className='flex w-screen h-screen items-center justify-center xl:px-[10%] lg:px-[10%]  flex-col md:flex-row lg:flex-row xl:flex-row '>
                <div className="xl:w-[70%] lg:w-[70%] md:w-[40%] w-[50%]">
                    <Fade left duration={2000}>
                        <img className="image-section " src="/Logo2.png" alt="" />
                    </Fade>
                </div>
                <Fade right duration={2000}>
                    <div className='text-center lg:text-left xl:text-left md:text-left px-3 xl:w-[50%] lg:w-[50%] md:w-[50%]'>
                        <h1 className='text-black font-bold mb-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>Tentang Kami</h1>
                        <p className='text-black mb-3'>Ambulance Bandung Center merupakan Penyedia layanan Ambulance Dikota Bandung atau unit transportasi medis yang dilengkapi dengan peralatan medis untuk mengangkut, menangani pasien gawat darurat, memberikan pertolongan pertama dan melakukan perawatan intensif selama dalam perjalanan menuju rumah sakit rujukan. Selain itu, kami juga menyediakan layanan untuk Kedukaan, cargo Jenazah, Standby medis dan Peti jenazah
                        </p>
                        <Link href="https://api.whatsapp.com/send/?phone=628818353439&text&type=phone_number&app_absent=0" target="_blank"
                        >
                            <Button color="default" className='bg-red-600 text-white p-6'>
                                Pesan Sekarang
                            </Button>
                        </Link>
                    </div>
                </Fade>
            </div>
        </>
    )
}
