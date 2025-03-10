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

    useEffect(() => {
        setShowNav(false)
    }, [pathname])

    return (
        <div className="bg-white shadow-md w-full duration-200 h-[12vh]">
            <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
                {/* LOGO */}
                <Link href="/" className="flex items-center ">
                    {/* <Image
                        src="/logo.jpg"
                        alt="Shop logo."
                        width={80}
                        height={80}
                    /> */}
                    <h1 className="text-xl md:text-2xl font-bold">
                        <span className="text-3xl md:text-4xl text-pink-700">海報</span>生成
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
                <div>
                    <button className="hidden md:block md:px-8 md:py-2.5 px-6 py-2 text-white font-semibold text-base bg-blue-700 hover:bg-blue-900 transition-all duration-200 rounded-full">
                        Join Now
                    </button>
                    {/* Burger menu */}
                    <HiBars3BottomRight onClick={() => setShowNav(true)} className="w-8 h-8 cursor-pointer text-black md:hidden" />
                </div>
            </div>
        </div>
    );
}

export default NavDesk;