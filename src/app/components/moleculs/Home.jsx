import { Button, Link } from '@nextui-org/react'
import { Carousel, IconButton } from "@material-tailwind/react";
import React from 'react'
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import { motion } from "framer-motion"


export default function Home() {
    return (
        <Carousel
            transition={{ duration: 2 }}
            autoplay={true}
            className="rounded-xl"
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}

            prevArrow={({ handlePrev }) => (
                <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute top-2/4 left-4 -translate-y-2/4"
                >
                    <div className='bg-red-600 bg-opacity-75'>
                        <FeatherIcon icon="chevron-left" className="size-7 xl:size-10" />
                    </div>
                </IconButton>
            )}
            nextArrow={({ handleNext }) => (
                <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute top-2/4 !right-4 -translate-y-2/4"
                >
                    <div className='bg-red-600 bg-opacity-75'>
                        <FeatherIcon icon="chevron-right" className="size-7 xl:size-10" />
                    </div>
                </IconButton>
            )}
        >
            {/* Slide 1 */}
            < div className="flex flex-col md:flex-row lg:flex-row xl:flex-row w-screen h-screen xl:px-[10%] lg:px-[10%] items-center justify-center">
                <div className="xl:w-[50%] lg:w-[50%] md:w-[50%] xl:order-1 md:order-1 lg:order-1 px-3 py-10 order-2 text-center md:text-left lg:text-left xl:text-left">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2 }}
                    >
                        <h1 className="text-white font-bold mb-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                            AMBULANCE BANDUNG SERVICE
                        </h1>
                        <p className="text-white mb-5">
                            Harga yang relatif terjangkau dari berbagai kalangan. Pelayanan dengan sepenuh hati menjadi visi kami, dan kepuasan Anda menjadi misi kami.
                        </p>
                        <Link href="https://api.whatsapp.com/send/?phone=628818353439&text&type=phone_number&app_absent=0" target="_blank">

                            <Button color="default" className="bg-red-600 text-white py-5 px-5" >
                                Pesan Sekarang
                            </Button>
                        </Link>
                    </motion.div>
                </div>
                <div className="xl:w-[50%] lg:w-[50%] md:w-[50%] w-[50%] xl:order-2 md:order-2 lg:order-2 p-3 order-1">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2 }}

                    >
                        <img className="image-section" src="/Ambulance3.png" alt="" />
                    </motion.div>
                </div>
            </div>

            {/* Slide 2 */}
            < div className="flex flex-col md:flex-row lg:flex-row xl:flex-row w-screen h-screen xl:px-[10%] lg:px-[10%] items-center justify-center">
                <div className="xl:w-[50%] lg:w-[50%] md:w-[50%] xl:order-1 md:order-1 lg:order-1 px-3 py-10 order-2 text-center md:text-left lg:text-left xl:text-left">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2 }}

                    >
                        <h1 className="text-white font-bold mb-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                            AMBULANCE BANDUNG SERVICE
                        </h1>
                        <p className="text-white mb-5">
                            Harga yang relatif terjangkau dari berbagai kalangan. Pelayanan dengan sepenuh hati menjadi visi kami, dan kepuasan Anda menjadi misi kami.
                        </p>
                        <Link href="https://api.whatsapp.com/send/?phone=628818353439&text&type=phone_number&app_absent=0" target="_blank">
                            <Button color="default" className="bg-red-600 text-white py-5 px-5" >
                                Pesan Sekarang
                            </Button>
                        </Link>
                    </motion.div>
                </div>
                <div className="xl:w-[50%] lg:w-[50%] md:w-[50%] w-[50%] xl:order-2 md:order-2 lg:order-2 p-3 order-1">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2 }}

                    >
                        <img className="image-section" src="/Ambulance3.png" alt="" />
                    </motion.div>
                </div>
            </div>
        </Carousel >
    )
}
