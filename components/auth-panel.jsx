import Link from "next/link";
import Image from "next/image";

// Reusable left brand panel for all auth pages

const AuthBrandPanel = ({ locale, logoLabel, tagline }) => {
    return (
        <div className="hidden lg:flex flex-col justify-between bg-zinc-950 px-12 py-12 relative overflow-hidden">
            {/* Ambient glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 50% at 15% 80%, rgba(204,17,17,0.1) 0%, transparent 60%)",
                }}
            />
            <Link href={`/${locale}`} className="relative z-10 w-fit">
                <Image src="/logo-main.png" alt="一番賞海報生成器" width={140} height={42} className="h-10 w-auto object-contain" />
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
            <Image src="/logo.png" alt="一番賞海報生成器" width={120} height={36} className="h-9 w-auto object-contain" />
        </Link>
    );
}

// Shared input style
export const inputCls =
    "h-10 px-3.5 rounded-lg border border-zinc-200 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all duration-200 w-full";

export { AuthBrandPanel, AuthMobileLogo };