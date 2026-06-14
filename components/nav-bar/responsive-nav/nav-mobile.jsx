import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { X } from "@phosphor-icons/react/dist/ssr";

const NavMobile = ({ showNav, navLinks, setShowNav, locale }) => {
    const t = useTranslations('nav');
    
    return (
        <>
            {/* Overlay */}
            <div
                onClick={() => setShowNav(false)}
                aria-hidden="true"
                className={`fixed inset-0 z-[9999] bg-zinc-950/70 backdrop-blur-sm transition-opacity duration-300 ${
                    showNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            />

            {/* Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-[72vw] max-w-[300px] z-[10000] bg-zinc-950 border-r border-white/[0.06] flex flex-col transition-transform duration-300 ease-out ${
                    showNav ? "translate-x-0" : "-translate-x-full"
                }`}
                role="dialog"
                aria-modal="true"
                aria-label="ナビゲーション"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-5 h-16 border-b border-white/[0.06]">
                    <span className="text-sm font-semibold text-white">Menu</span>
                    <button
                        onClick={() => setShowNav(false)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
                        aria-label="關閉選單"
                    >
                        <X size={16} weight="bold" className="text-zinc-400" />
                    </button>
                </div>

                {/* Links */}
                <nav className="flex-1 flex flex-col gap-1 px-3 pt-4">
                    {navLinks.map((link) => (
                        <Link
                            href={link.url}
                            key={link.id}
                            onClick={() => setShowNav(false)}
                            className="flex items-center h-11 px-3 rounded-xl text-zinc-300 text-sm font-medium hover:bg-white/[0.06] hover:text-white transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA */}
                <div className="px-4 pb-8">
                    <Link
                        href={`/${locale}/projects`}
                        onClick={() => setShowNav(false)}
                        className="flex items-center justify-center h-11 rounded-full bg-emerald-400 text-zinc-950 text-sm font-semibold hover:bg-emerald-300 transition-colors"
                    >
                        {t('startNow')}
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NavMobile;
