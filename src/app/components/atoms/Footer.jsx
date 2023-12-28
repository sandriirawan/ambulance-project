import React from 'react'
import FeatherIcon from 'feather-icons-react';
import { Button, Link } from '@nextui-org/react';


export default function Footer() {
    return (
        <div className='w-screen h-96 lg:h-60 xl:h-96 bg-background xl:px-[10%] lg:px-[10%] px-3'>
            <div className='flex flex-col lg:flex-row xl:flex-row justify-between py-3 md:py-5 lg:py-5 xl:py-20'>
                <div className=''>
                    <h1 className='font-bold text-white mb-2'>Kontak Info</h1>
                    <div className='flex flex-row space-x-3 '>
                        <FeatherIcon icon="map-pin" className="text-white" />
                        <p className='text-white'>Indonesia</p>
                    </div>
                    <div className='flex flex-row space-x-3 my-2'>
                        <FeatherIcon icon="phone" className="text-white" />
                        <p className='text-white'>08818353439</p>
                    </div>
                    <div className='flex flex-row space-x-3'>
                        <FeatherIcon icon="mail" className="text-white" />
                        <p className='text-white'>example@gmail.com</p>
                    </div>
                </div>
                <div className='xl:w-[50%] lg:w-[50%]'>
                    <h1 className='font-bold text-white my-2'>Hubungi Kami</h1>
                    <p className='text-white mb-3 '>Tanyakan kepada kami, Kami Siap Melayani, Setiap Waktu, Setiap Tempat.
                    </p>
                    <Link href="https://api.whatsapp.com/send?phone=628818353439&text=Halo%20ini%20pesan%20saya" target="_blank"
                    >
                        <Button color="default" className='bg-red-600 text-white py-5 px-5'>
                            <FeatherIcon icon="phone" className="text-white" />
                            08818353439
                        </Button>
                    </Link>
                </div>
            </div>
            <div className=''>
                <div className='border w-full bg-fuchsia-50 mb-4'></div>
                <p className='text-white text-center text-small'>© 2023 All Rights Reserved By Ambulance Bandung Service</p>
            </div>
        </div>
    )
}
