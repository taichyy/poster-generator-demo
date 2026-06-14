"use client";

import Link from "next/link";
import { useState } from "react";

import { ArrowLeft, ArrowRight, EnvelopeSimple } from "@phosphor-icons/react";
import { AuthBrandPanel, AuthMobileLogo, inputCls } from "@/components/auth-panel";

const ForgotPasswordClient = ({ labels: l }) => {
    const [sent, setSent] = useState(false);
    const [email, setEmail] = useState("");

    return (
        <div className="min-h-[100dvh] grid grid-cols-1 lg:grid-cols-2">
            <AuthBrandPanel locale={l.locale} logoLabel={l.logoLabel} tagline={l.brandTagline} />

            <div className="flex flex-col items-center justify-center px-6 py-16 bg-white">
                <AuthMobileLogo locale={l.locale} logoLabel={l.logoLabel} />

                <div className="w-full max-w-sm">
                    {sent ? (
                        /* ── Success state ── */
                        <div className="text-center">
                            <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-5">
                                <EnvelopeSimple size={22} weight="duotone" className="text-emerald-500" />
                            </div>
                            <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 mb-2">
                                {l.successTitle}
                            </h1>
                            <p className="text-sm text-zinc-500 mb-8 max-w-[32ch] mx-auto">
                                {l.successDesc}
                            </p>
                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={() => setSent(false)}
                                    className="w-full h-10 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-600 hover:bg-zinc-50 active:scale-[0.98] transition-all duration-200"
                                >
                                    {l.resend}
                                </button>
                                <Link
                                    href={`/${l.locale}/login`}
                                    className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-700 transition-colors"
                                >
                                    <ArrowLeft size={13} weight="bold" />
                                    {l.backToLogin}
                                </Link>
                            </div>
                        </div>
                    ) : (
                        /* ── Form state ── */
                        <>
                            <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 mb-1">{l.title}</h1>
                            <p className="text-sm text-zinc-500 mb-8">{l.subtitle}</p>

                            <form
                                className="flex flex-col gap-5"
                                noValidate
                                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                            >
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-medium text-zinc-800">
                                        {l.labelEmail}
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="name@company.com"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className={inputCls}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center gap-2 h-10 px-5 rounded-lg bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200"
                                >
                                    {l.submitButton}
                                    <ArrowRight size={14} weight="bold" />
                                </button>
                            </form>

                            <div className="pt-7 flex justify-center">
                                <Link
                                    href={`/${l.locale}/login`}
                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-700 transition-colors"
                                >
                                    <ArrowLeft size={13} weight="bold" />
                                    {l.backToLogin}
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordClient;
