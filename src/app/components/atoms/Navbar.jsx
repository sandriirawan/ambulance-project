import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem,  Link } from "@nextui-org/react";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Link as ScrollLink } from "react-scroll";

export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "HOME",
        "LAYANAN",
        "TENTANG",
        "KONTAK"
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-black">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden text-white"
                />
                <NavbarBrand>
                    <p className="font-bold text-inherit text-white ml-2">ACAMBULANCE BANDUNG SERVICE</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <ScrollLink
                        className="text-white cursor-pointer"
                        to="1"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        HOME
                    </ScrollLink>
                </NavbarItem>
                <NavbarItem>
                    <ScrollLink
                        className="text-white cursor-pointer"
                        to="2"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        LAYANAN
                    </ScrollLink>
                </NavbarItem>
                <NavbarItem>
                    <ScrollLink
                        className="text-white cursor-pointer"
                        to="3"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        TENTANG
                    </ScrollLink>
                </NavbarItem>
                <NavbarItem>
                    <ScrollLink
                        className="text-white cursor-pointer"
                        to="4"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        KONTAK
                    </ScrollLink>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        className="text-white justify-center cursor-pointer flex items-center"
                        color="foreground"
                        target="_blank"
                        href="https://api.whatsapp.com/send/?phone=628818353439&text=Halo,%20saya%20ingin%20bertanya%20..."
                        to="#"
                    >
                        <FeatherIcon icon="smartphone" className="text-white" />
                        08818353439
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <ScrollLink
                            className="w-full text-white"
                            href="#"
                            size="lg"
                        >
                            {item}
                        </ScrollLink>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar >
    );
}
