import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { getTranslations, getLocale } from "next-intl/server";

import { AuthBrandPanel, AuthMobileLogo, inputCls } from "@/components/auth-panel";

const LoginPage = async () => {
    const t = await getTranslations("auth");
    const locale = await getLocale();
    const l = {
        logoLabel:    t("logoLabel"),
        brandTagline: t("brandTagline"),
        ...Object.fromEntries(
            ["title","subtitle","labelEmail","labelPassword","forgotPassword",
             "submitButton","divider","noAccount","registerLink"]
                .map(k => [k, t(`login.${k}`)])
        ),
    };

    return (
        <div className="min-h-[100dvh] grid grid-cols-1 lg:grid-cols-2">
            <AuthBrandPanel locale={locale} logoLabel={l.logoLabel} tagline={l.brandTagline} />

            <div className="flex flex-col items-center justify-center px-6 py-16 bg-white">
                <AuthMobileLogo locale={locale} logoLabel={l.logoLabel} />

                <div className="w-full max-w-sm">
                    <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 mb-1">{l.title}</h1>
                    <p className="text-sm text-zinc-500 mb-8">{l.subtitle}</p>

                    <form className="flex flex-col gap-5" noValidate>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-zinc-800">
                                {l.labelEmail}
                            </label>
                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                placeholder="name@company.com"
                                className={inputCls}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="text-sm font-medium text-zinc-800">
                                    {l.labelPassword}
                                </label>
                                <Link
                                    href={`/${locale}/forgot-password`}
                                    className="text-xs text-red-600 hover:text-red-800 transition-colors"
                                >
                                    {l.forgotPassword}
                                </Link>
                            </div>
                            <input
                                id="password"
                                type="password"
                                autoComplete="current-password"
                                placeholder="••••••••"
                                className={inputCls}
                            />
                        </div>

                        <Link href={`/${locale}/projects`} className="mt-1 w-full">
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center gap-2 h-10 px-5 rounded-lg bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200"
                            >
                                {l.submitButton}
                                <ArrowRight size={14} weight="bold" />
                            </button>
                        </Link>
                    </form>

                    <div className="flex items-center gap-3 my-7">
                        <div className="flex-1 h-px bg-zinc-100" />
                        <span className="text-xs text-zinc-400">{l.divider}</span>
                        <div className="flex-1 h-px bg-zinc-100" />
                    </div>

                    <p className="text-center text-sm text-zinc-500">
                        {l.noAccount}{" "}
                        <Link
                            href={`/${locale}/register`}
                            className="text-zinc-950 font-semibold hover:underline underline-offset-4 transition-colors"
                        >
                            {l.registerLink}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
