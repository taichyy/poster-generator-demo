import Link from 'next/link';

const footerCols = [
    {
        title: "產品",
        links: [
            { label: "功能介紹", href: "#features" },
            { label: "方案定價", href: "#" },
            { label: "更新紀錄", href: "#" },
        ],
    },
    {
        title: "支援",
        links: [
            { label: "使用教學", href: "#" },
            { label: "常見問題", href: "#" },
            { label: "聯絡我們", href: "#" },
        ],
    },
    {
        title: "法律",
        links: [
            { label: "隱私政策", href: "#" },
            { label: "服務條款", href: "#" },
        ],
    },
];

const LogoMark = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="9" height="14" rx="2" fill="#34D399" />
        <rect x="13" y="2" width="9" height="9" rx="2" fill="#34D399" opacity="0.6" />
        <rect x="13" y="13" width="9" height="9" rx="2" fill="#34D399" opacity="0.35" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="bg-white border-t border-zinc-100">
            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <LogoMark />
                            <span className="text-sm font-semibold text-zinc-950">海報生成</span>
                        </div>
                        <p className="text-sm text-zinc-500 leading-relaxed max-w-[26ch]">
                            專為一番賞業者打造的海報生成工具。快速、精準、無需設計技能。
                        </p>
                    </div>

                    {/* {footerCols.map((col) => (
                        <div key={col.title}>
                            <p className="text-xs font-semibold text-zinc-950 tracking-widest uppercase mb-5">
                                {col.title}
                            </p>
                            <ul className="flex flex-col gap-3.5">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-zinc-500 hover:text-zinc-950 transition-colors duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))} */}
                </div>

                <div className="border-t border-zinc-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-zinc-400">
                        &copy; 2024 heytai. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        {/* {["Facebook", "Instagram", "X"].map((name) => (
                            <Link
                                key={name}
                                href="#"
                                className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors"
                            >
                                {name}
                            </Link>
                        ))} */}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
