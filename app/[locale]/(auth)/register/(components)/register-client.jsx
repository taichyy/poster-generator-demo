"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react";

import { AuthBrandPanel, AuthMobileLogo, inputCls } from "@/components/auth-panel";

const RegisterClient = ({ labels: l }) => {
    const [submitted, setSubmitted] = useState(false);

    if (submitted) {
        return (
            <div className="min-h-[100dvh] grid grid-cols-1 lg:grid-cols-2">
                <AuthBrandPanel locale={l.locale} logoLabel={l.logoLabel} tagline={l.brandTagline} />
                <div className="flex flex-col items-center justify-center px-6 py-16 bg-white">
                    <div className="w-full max-w-sm text-center">
                        <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-5">
                            <CheckCircle size={24} weight="fill" className="text-emerald-500" />
                        </div>
                        <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 mb-2">
                            Account created
                        </h1>
                        <p className="text-sm text-zinc-500 mb-8">
                            Redirecting you to the dashboard…
                        </p>
                        <Link
                            href={`/${l.locale}/projects`}
                            className="inline-flex items-center gap-2 h-10 px-6 rounded-lg bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200"
                        >
                            Go to dashboard
                            <ArrowRight size={14} weight="bold" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[100dvh] grid grid-cols-1 lg:grid-cols-2">
            <AuthBrandPanel locale={l.locale} logoLabel={l.logoLabel} tagline={l.brandTagline} />

            <div className="flex flex-col items-center justify-center px-6 py-16 bg-white">
                <AuthMobileLogo locale={l.locale} logoLabel={l.logoLabel} />

                <div className="w-full max-w-sm">
                    <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 mb-1">{l.title}</h1>
                    <p className="text-sm text-zinc-500 mb-8">{l.subtitle}</p>

                    <form
                        className="flex flex-col gap-5"
                        noValidate
                        onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                    >
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-medium text-zinc-800">{l.labelName}</label>
                            <input
                                id="name"
                                type="text"
                                autoComplete="name"
                                placeholder={l.placeholderName}
                                required
                                className={inputCls}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-zinc-800">{l.labelEmail}</label>
                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                placeholder="name@company.com"
                                required
                                className={inputCls}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="text-sm font-medium text-zinc-800">{l.labelPassword}</label>
                            <input
                                id="password"
                                type="password"
                                autoComplete="new-password"
                                placeholder={l.placeholderPassword}
                                required
                                className={inputCls}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="confirm" className="text-sm font-medium text-zinc-800">{l.labelConfirm}</label>
                            <input
                                id="confirm"
                                type="password"
                                autoComplete="new-password"
                                placeholder={l.placeholderConfirm}
                                required
                                className={inputCls}
                            />
                        </div>

                        {/* Terms */}
                        <p className="text-xs text-zinc-400 leading-relaxed -mt-1">
                            {l.terms}{" "}
                            <Link href="#" className="text-zinc-700 underline underline-offset-2 hover:text-zinc-950 transition-colors">{l.termsLink}</Link>
                            {" "}{l.and}{" "}
                            <Link href="#" className="text-zinc-700 underline underline-offset-2 hover:text-zinc-950 transition-colors">{l.privacyLink}</Link>.
                        </p>

                        <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center gap-2 h-10 px-5 rounded-lg bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200"
                        >
                            {l.submitButton}
                            <ArrowRight size={14} weight="bold" />
                        </button>
                    </form>

                    <div className="flex items-center gap-3 my-7">
                        <div className="flex-1 h-px bg-zinc-100" />
                        <span className="text-xs text-zinc-400">{l.divider}</span>
                        <div className="flex-1 h-px bg-zinc-100" />
                    </div>

                    <p className="text-center text-sm text-zinc-500">
                        {l.hasAccount}{" "}
                        <Link
                            href={`/${l.locale}/login`}
                            className="text-zinc-950 font-semibold hover:underline underline-offset-4 transition-colors"
                        >
                            {l.loginLink}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegisterClient;