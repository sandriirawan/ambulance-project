import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { motion } from "framer-motion"


export default function CardService() {
    return (

        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-wrap gap-5 items-center justify-center">
            <Card className="xl:w-[30%] lg:[40%] md:w[50%] w-[95%] ] xl:h-[35%]">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="/Ambulance3.png"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md font-bold">Ambulance Pasien</p>
                        <p className="text-small text-default-500">AMBULANCE BANDUNG SERVICE</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>Jika anda membutuhkan layanan Ambulance untuk pasien Silahkan</p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        target="_blank"
                        href="https://api.whatsapp.com/send/?phone=628818353439&text&type=phone_number&app_absent=0"
                    // className="text-black font-bold"
                    >
                        Hubungi Kami
                    </Link>
                </CardFooter>
            </Card>
            <Card className="xl:w-[30%] lg:[40%] md:w[50%] w-[95%] xl:h-[35%]">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="/Ambulance3.png"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md font-bold">Ambulance Jenazah
                        </p>
                        <p className="text-small text-default-500">AMBULANCE BANDUNG SERVICE</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>Jika anda membutuhkan layanan Ambulance untuk Jenazah Silahkan</p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        target="_blank"
                        href="https://api.whatsapp.com/send/?phone=628818353439&text&type=phone_number&app_absent=0"
                    >
                        Hubungi Kami
                    </Link>
                </CardFooter>
            </Card>
            <Card className="xl:w-[30%] lg:[40%] md:w[50%] w-[95%] xl:h-[35%]">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="/Ambulance3.png"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md font-bold">Cargo Jenazah
                        </p>
                        <p className="text-small text-default-500">AMBULANCE BANDUNG SERVICE</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>Jika anda membutuhkan layanan Cargo Jenazah Silahkan</p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        target="_blank"
                        href="https://api.whatsapp.com/send/?phone=628818353439&text&type=phone_number&app_absent=0"
                    >
                        Hubungi Kami
                    </Link>
                </CardFooter>
            </Card>
            <Card className="xl:w-[30%] lg:[40%] md:w[50%] w-[95%] xl:h-[35%]">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="/Ambulance3.png"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md font-bold">Standby Medis
                        </p>
                        <p className="text-small text-default-500">AMBULANCE BANDUNG SERVICE</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>ika anda membutuhkan layanan Ambulance untuk Standby Medis di Acara Event Dll Silahkan</p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        target="_blank"
                        href="https://api.whatsapp.com/send/?phone=628818353439&text&type=phone_number&app_absent=0"
                    >
                        Hubungi Kami
                    </Link>
                </CardFooter>
            </Card>
            <Card className="xl:w-[30%] lg:[40%] md:w[50%] w-[95%] xl:h-[35%]">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="/Ambulance3.png"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md font-bold">Peti Jenazah
                        </p>
                        <p className="text-small text-default-500">AMBULANCE BANDUNG SERVICE</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>Kami juga menyediakan berbagai macam Peti Jenazah berbagai macam Ukuran dan Tampilan Silahkan</p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        target="_blank"
                        href="https://api.whatsapp.com/send/?phone=628818353439&text&type=phone_number&app_absent=0"
                    >
                        Hubungi Kami
                    </Link>
                </CardFooter>
            </Card>
            <Card className="xl:w-[30%] lg:[40%] md:w[50%] w-[95%] xl:h-[35%]">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="/Ambulance3.png"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md font-bold">Ambulance Mini ICU</p>
                        <p className="text-small text-default-500">AMBULANCE BANDUNG SERVICE</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>Kami juga menyediakan unit VIP Mini ICU untuk kebutuhan anda Silahkan</p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        target="_blank"
                        href="https://api.whatsapp.com/send/?phone=628818353439&text&type=phone_number&app_absent=0"
                    >
                        Hubungi Kami
                    </Link>
                </CardFooter>
            </Card>
            <Card className="xl:w-[30%] lg:[40%] md:w[50%] w-[95%] xl:h-[35%]">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="/Ambulance3.png"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md font-bold">Ambulance VIP
                        </p>
                        <p className="text-small text-default-500">AMBULANCE BANDUNG SERVICE</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>Kami Tersedia Unit VIP Silahkan</p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        target="_blank"
                        href="https://api.whatsapp.com/send/?phone=628818353439&text&type=phone_number&app_absent=0"
                    >
                        Hubungi Kami
                    </Link>
                </CardFooter>
            </Card>
            <Card className="xl:w-[30%] lg:[40%] md:w[50%] w-[95%] xl:h-[35%]">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="/Ambulance3.png"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md font-bold">Home Care
                        </p>
                        <p className="text-small text-default-500">AMBULANCE BANDUNG SERVICE</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>Kami tersedia juga untuk Layanan Home Care Silahkan</p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        target="_blank"
                        href="https://api.whatsapp.com/send/?phone=628818353439&text&type=phone_number&app_absent=0"
                    >
                        Hubungi Kami
                    </Link>
                </CardFooter>
            </Card>
            <Card className="xl:w-[30%] lg:[40%] md:w[50%] w-[95%] xl:h-[35%]">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        height={40}
                        radius="sm"
                        src="/Ambulance3.png"
                        width={40}
                    />
                    <div className="flex flex-col">
                        <p className="text-md font-bold">Kebutuhan Lain
                        </p>
                        <p className="text-small text-default-500">AMBULANCE BANDUNG SERVICE</p>
                    </div>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>Kebutuhan Lainnya untuk Memenuhi permintaan anda Silahkan</p>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        target="_blank"
                        href="https://api.whatsapp.com/send/?phone=628818353439&text&type=phone_number&app_absent=0"
                    >
                        Hubungi Kami
                    </Link>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
