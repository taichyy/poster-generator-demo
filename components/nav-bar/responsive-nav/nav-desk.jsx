"use client"
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { HiBars3BottomRight } from "react-icons/hi2";

const NavDesk = ({
    navLinks,
    setShowNav
}) => {
    const pathname = usePathname()

    const navData = {
        nav_logo_src: "/logo.jpg",
        nav_logo_alt: "Shop logo.",
        nav_logo_bg: "海報",
        nav_logo_small: "生成",
    }

    useEffect(() => {
        setShowNav(false)
    }, [pathname])

    return (
        <div className="bg-white shadow-md w-full duration-200 h-[12vh]">
            <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
                {/* LOGO */}
                <Link href="/" className="flex items-center ">
                    {/* <Image
                        src={navData.nav_logo_src}
                        alt={navData.nav_logo_alt}
                        width={80}
                        height={80}
                    /> */}
                    <h1 className="text-xl md:text-2xl font-bold">
                        <span className="text-3xl md:text-4xl text-pink-700">{navData.nav_logo_bg}</span>{navData.nav_logo_small}
                    </h1>
                </Link>
                {/* NavLinks */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link href={link.url} key={link.id} onClick={() => setShowNav(false)}>
                            <p className=" nav_link">
                                {link.label}
                            </p>
                        </Link>
                    ))}
                </div>
                {/* Buttons */}
                {/* For showing the Join Now btn, move md:hidden to Burger Menu as well. */}
                <div className=" md:hidden">
                    {/* <button className="hidden md:block md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-700 hover:bg-blue-900 transition-all duration-200 rounded-full">
                        Join Now
                    </button> */}
                    {/* Burger menu */}
                    <HiBars3BottomRight onClick={() => setShowNav(true)} className="w-8 h-8 cursor-pointer text-black" />
                </div>
            </div>
        </div>
    );
}

export default NavDesk;