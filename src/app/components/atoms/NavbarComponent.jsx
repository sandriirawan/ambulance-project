import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { Link as ScrollLink } from "react-scroll";

export default function NavbarComponent() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);


    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-black">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden text-white"
                />
                <NavbarBrand>
                    <p className="font-bold text-inherit text-white ml-2">AMBULANCE BANDUNG SERVICE</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <ScrollLink
                        className="text-white cursor-pointer"
                        to="home"
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
                        to="service"
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
                        to="about"
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
                        to="footer"
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
            <div>
                <NavbarMenu>
                    <div className="flex justify-between items-center">
                        <NavbarMenuItem >
                            <ScrollLink
                                className="text-white cursor-pointer"
                                to="home"
                                spy={true}
                                smooth={true}
                                duration={500}
                                aria-label="Close menu"

                            >
                                HOME
                            </ScrollLink>
                        </NavbarMenuItem>
                        <NavbarMenuToggle
                            className="sm:hidden text-white p-0 h-10"
                        />
                    </div>
                    <NavbarMenuItem>
                        <ScrollLink
                            className="text-white cursor-pointer"
                            to="service"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            LAYANAN
                        </ScrollLink>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <ScrollLink
                            className="text-white cursor-pointer"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            TENTANG
                        </ScrollLink>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <ScrollLink
                            className="text-white cursor-pointer"
                            to="footer"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            KONTAK
                        </ScrollLink>
                    </NavbarMenuItem>
                </NavbarMenu>
            </div>
        </Navbar >
    );
}
