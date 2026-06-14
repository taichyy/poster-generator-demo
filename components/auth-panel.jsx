import Link from "next/link";

// Reusable left brand panel for all auth pages
const LogoMark = () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="9" height="14" rx="2" fill="#34D399" />
        <rect x="13" y="2" width="9" height="9" rx="2" fill="#34D399" opacity="0.6" />
        <rect x="13" y="13" width="9" height="9" rx="2" fill="#34D399" opacity="0.35" />
    </svg>
);

const AuthBrandPanel = ({ locale, logoLabel, tagline }) => {
    return (
        <div className="hidden lg:flex flex-col justify-between bg-zinc-950 px-12 py-12 relative overflow-hidden">
            {/* Ambient glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 50% at 15% 80%, rgba(52,211,153,0.08) 0%, transparent 60%)",
                }}
            />
            <Link href={`/${locale}`} className="flex items-center gap-2.5 relative z-10 w-fit">
                <LogoMark />
                <span className="text-sm font-semibold text-white">{logoLabel}</span>
            </Link>
            <div className="relative z-10">
                <p className="text-[1.55rem] font-semibold text-white leading-[1.45] tracking-tight max-w-[26ch]">
                    {tagline}
                </p>
            </div>
        </div>
    );
}

const AuthMobileLogo = ({ locale, logoLabel }) => {
    return (
        <Link href={`/${locale}`} className="flex items-center gap-2.5 mb-10 lg:hidden">
            <LogoMark />
            <span className="text-sm font-semibold text-zinc-950">{logoLabel}</span>
        </Link>
    );
}

// Shared input style
export const inputCls =
    "h-10 px-3.5 rounded-lg border border-zinc-200 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-200 w-full";

export { AuthBrandPanel, AuthMobileLogo };