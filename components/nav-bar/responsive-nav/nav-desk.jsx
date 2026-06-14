"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { List } from "@phosphor-icons/react";
import { X } from "lucide-react";

const LogoMark = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="9" height="14" rx="2" fill="#34D399" />
        <rect x="13" y="2" width="9" height="9" rx="2" fill="#34D399" opacity="0.6" />
        <rect x="13" y="13" width="9" height="9" rx="2" fill="#34D399" opacity="0.35" />
    </svg>
);

const NavDesk = ({ navLinks, setShowNav }) => {
    const pathname = usePathname();
    const [closed, setClosed] = useState(false) 

    const navData = {
        nav_logo_src: "/logo.jpg",
        nav_logo_alt: "Shop logo.",
        nav_logo_bg: "海報",
        nav_logo_small: "生成",
    }

    useEffect(() => {
        setShowNav(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <>
            {!closed && (
                <div className="flex justify-between items-center bg-white h-10 text-slate-800 text-lg px-4">
                    <X className="opacity-0" />
                    This is a demo website, no backend integrated.
                    <X className="cursor-pointer" onClick={()=>setClosed(true)} />
                </div>
            )}
            <nav className="bg-zinc-950/90 backdrop-blur-md border-b border-white/[0.06] w-full h-[64px]">
                <div className="flex items-center h-full justify-between max-w-7xl mx-auto px-6">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group" aria-label="海報生成 首頁">
                        <LogoMark />
                        <span className="text-sm font-semibold text-white tracking-tight">
                            海報生成
                        </span>
                    </Link>

                    {/* Nav links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.url;
                            return (
                                <Link
                                    href={link.url}
                                    key={link.id}
                                    className={`relative text-sm font-medium transition-colors duration-200 pb-0.5 ${isActive ? "text-white" : "text-zinc-400 hover:text-white"
                                        }`}
                                >
                                    {link.label}
                                    {isActive && (
                                        <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-emerald-400 rounded-full" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA + burger */}
                    <div className="flex items-center gap-3">
                        <Link
                            href="/projects"
                            className="hidden md:inline-flex items-center h-9 px-5 rounded-full bg-emerald-400 text-zinc-950 text-sm font-semibold hover:bg-emerald-300 active:scale-[0.98] transition-all duration-200"
                        >
                            立即開始
                        </Link>
                        <button
                            onClick={() => setShowNav(true)}
                            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
                            aria-label="開啟選單"
                        >
                            <List size={20} weight="bold" className="text-zinc-300" />
                        </button>
                    </div>
                </div>
            </nav>
        </>

    );
};

export default NavDesk;