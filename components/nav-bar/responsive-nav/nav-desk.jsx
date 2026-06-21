"use client"

import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { List } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";

import LanguageSwitcher from '@/components/language-switcher';

const NavDesk = ({ navLinks, setShowNav, locale }) => {
    const pathname = usePathname();
    const [closed, setClosed] = useState(false);
    const t = useTranslations('nav');

    useEffect(() => {
        setShowNav(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <>
            {!closed && (
                <div className="flex justify-between items-center bg-white h-10 text-slate-800 text-lg px-4">
                    <X className="opacity-0" />
                    {t('demoWarning')}
                    <X className="cursor-pointer" onClick={() => setClosed(true)} />
                </div>
            )}
            <nav className="bg-zinc-950/90 backdrop-blur-md border-b border-white/[0.06] w-full h-[64px]">
                <div className="grid grid-cols-2 md:grid-cols-3 h-full max-w-7xl mx-auto px-6">
                    {/* Logo */}
                    <Link href={`/${locale}`} className="flex items-center gap-2.5 group" aria-label="Poster Generator">
                        <Image src="/logo-main.png" alt="一番賞海報生成器" width={120} height={36} className="h-9 w-auto object-contain" priority />
                    </Link>

                    {/* Nav links */}
                    <div className="hidden md:flex justify-center items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.url;
                            return (
                                <Link
                                    href={link.url}
                                    key={link.id}
                                    className={`relative text-sm font-medium transition-colors duration-200 pb-0.5 ${isActive ? "text-white" : "text-zinc-400 hover:text-white"}`}
                                >
                                    {link.label}
                                    {isActive && (
                                        <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-red-500 rounded-full" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA + burger */}
                    <div className="flex items-center justify-end gap-3">
                        <Link
                            href={`/${locale}/projects`}
                            className="hidden md:inline-flex items-center h-9 px-5 rounded-full bg-red-600 text-white text-sm font-semibold hover:bg-red-500 active:scale-[0.98] transition-all duration-200"
                        >
                            {t('startNow')}
                        </Link>
                        <LanguageSwitcher />
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
