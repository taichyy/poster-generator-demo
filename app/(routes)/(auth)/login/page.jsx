import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const LogoMark = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="9" height="14" rx="2" fill="#34D399" />
        <rect x="13" y="2" width="9" height="9" rx="2" fill="#34D399" opacity="0.6" />
        <rect x="13" y="13" width="9" height="9" rx="2" fill="#34D399" opacity="0.35" />
    </svg>
);

const LoginPage = () => {
    return (
        <div className="min-h-[100dvh] grid grid-cols-1 lg:grid-cols-2">

            {/* ── Left: Brand panel (dark) ───────────────────────────────── */}
            <div className="hidden lg:flex flex-col justify-between bg-zinc-950 px-12 py-12 relative overflow-hidden">
                {/* Subtle bg glow */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse 70% 50% at 15% 80%, rgba(52,211,153,0.07) 0%, transparent 60%)'
                    }}
                />

                {/* Logo */}
                <div className="flex items-center gap-2.5 relative z-10">
                    <LogoMark />
                    <span className="text-sm font-semibold text-white">海報生成</span>
                </div>

                {/* Quote */}
                <div className="relative z-10">
                    <p className="text-[1.6rem] font-semibold text-white leading-[1.4] tracking-tight max-w-[28ch]">
                        &ldquo;30 秒出稿，讓你專注在銷售，
                        而不是設計。&rdquo;
                    </p>
                    <p className="mt-5 text-sm text-zinc-500">
                        已有 1,247 位一番賞業者每週使用
                    </p>
                </div>

                {/* Stats grid */}
                {/* <div className="grid grid-cols-3 gap-6 relative z-10">
                    {[
                        { num: "18,392", label: "已生成海報" },
                        { num: "99.7%", label: "服務可用率" },
                        { num: "< 31 秒", label: "平均出稿" },
                    ].map((stat, i) => (
                        <div key={i} className="border-t border-zinc-800 pt-4">
                            <p className="font-mono text-xl font-semibold text-white tracking-tight">
                                {stat.num}
                            </p>
                            <p className="mt-0.5 text-xs text-zinc-600">{stat.label}</p>
                        </div>
                    ))}
                </div> */}
            </div>

            {/* ── Right: Form (light) ────────────────────────────────────── */}
            <div className="flex flex-col items-center justify-center px-6 py-16 bg-white">
                {/* Mobile logo */}
                <div className="flex items-center gap-2.5 mb-10 lg:hidden">
                    <LogoMark />
                    <span className="text-sm font-semibold text-zinc-950">海報生成</span>
                </div>

                <div className="w-full max-w-sm">
                    <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 mb-1">
                        歡迎回來
                    </h1>
                    <p className="text-sm text-zinc-500 mb-8">
                        登入帳戶繼續使用
                    </p>

                    <form className="flex flex-col gap-5" noValidate>
                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-zinc-800">
                                電子郵件
                            </label>
                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                placeholder="name@company.com"
                                className="h-10 px-3.5 rounded-lg border border-zinc-300 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                            />
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="text-sm font-medium text-zinc-800">
                                    密碼
                                </label>
                                <Link href="#" className="text-xs text-emerald-600 hover:text-emerald-800 transition-colors">
                                    忘記密碼？
                                </Link>
                            </div>
                            <input
                                id="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder="••••••••"
                                className="h-10 px-3.5 rounded-lg border border-zinc-300 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="mt-1 inline-flex items-center justify-center gap-2 h-10 px-5 rounded-lg bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200"
                        >
                            登入
                            <ArrowRight size={14} weight="bold" />
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-7">
                        <div className="flex-1 h-px bg-zinc-100" />
                        <span className="text-xs text-zinc-400">或</span>
                        <div className="flex-1 h-px bg-zinc-100" />
                    </div>

                    <p className="text-center text-sm text-zinc-500">
                        還沒有帳戶？{" "}
                        <Link href="#" className="text-zinc-950 font-semibold hover:underline underline-offset-4 transition-colors">
                            免費註冊
                        </Link>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default LoginPage;
