"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

const Navbar = () => {

    const router = useRouter()
    const [open, setOpen] = useState(false);

    const logOut = () => {
        router.push('/sign-in')
    }

    const navItems = [
        {
            name: "專案管理",
            route: "/projects"
        }
    ]

    return (
        <nav className="bg-[#cccccc] min-h-16 px-5 py-2 flex justify-between items-center">
            <Image
                src="/logo.png"
                width={100}
                height={70}
                alt="Logo"
                className="w-auto h-auto"
            />
            <div className="hidden md:block">
                <ul className="flex flex-row-reverse">
                    <li onClick={() => logOut()} className="cursor-pointer">
                        登出
                    </li>
                    {navItems.map((item, index) => (
                        <Link key={index} href={item.route} className="mr-5">
                            <li>
                                {item.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            {/* Mobile button */}
            <div onClick={() => setOpen(!open)} className="z-20 block md:hidden cursor-pointer" >
                {open ? (
                    <X
                        style={open ? { color: "#bbb" } : { color: "#FFF" }}
                        size={42}
                    />
                ) : (
                    <Menu
                        style={open ? { color: "#bbb" } : { color: "#FFF" }}
                        size={42}
                    />
                )}
            </div>
            {/* Mobile pop-up nav */}
            <div
                className="fixed min-h-screen w-screen bg-white top-0 z-10 duration-300 border-l-2"
                style={open ? { right: '0' } : { right: '-100%' }}
                onClick={() => setOpen(!open)}
            >
                <ul className="text-slate-800 mt-24 ml-8 w-full text-lg tracking-wider">
                    <li onClick={() => logOut()} className="cursor-pointer mb-6">
                        登出
                    </li>
                    {navItems.map((item, index) => (
                        <Link key={index} href={item.route} className="mb-6">
                            <li>
                                {item.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
