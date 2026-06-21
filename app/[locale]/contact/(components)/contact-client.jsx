"use client";

import { useState } from "react";
import { Headset, EnvelopeSimple, ChatCircle, BookOpen, ArrowRight, CheckCircle } from "@phosphor-icons/react";

const quickLinkIcons = [BookOpen, ChatCircle, EnvelopeSimple];

const ContactClient = ({ labels }) => {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className="flex flex-col px-6 py-8 w-full min-h-screen bg-zinc-50/40">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-lg bg-zinc-100 flex items-center justify-center">
                    <Headset size={18} weight="duotone" className="text-zinc-600" />
                </div>
                <div>
                    <h1 className="text-base font-semibold tracking-tight text-zinc-950">{labels.pageTitle}</h1>
                    <p className="text-xs text-zinc-400 font-medium">{labels.pageSubtitle}</p>
                </div>
            </div>

            <div className="border-t border-zinc-200 mb-6" />

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 max-w-4xl">
                {/* Contact form */}
                <div className="bg-white rounded-xl border border-zinc-100 shadow-sm px-6 py-6">
                    {submitted ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <CheckCircle size={40} weight="fill" className="text-red-500 mb-3" />
                            <h2 className="text-base font-semibold text-zinc-950 mb-1">{labels.successTitle}</h2>
                            <p className="text-sm text-zinc-500">{labels.successDesc}</p>
                            <button
                                onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                                className="mt-6 h-9 px-4 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition-colors"
                            >
                                {labels.sendAnother}
                            </button>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-sm font-semibold text-zinc-800 mb-5">{labels.formTitle}</h2>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-medium text-zinc-700">{labels.labelName}</label>
                                        <input
                                            required
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            placeholder={labels.placeholderName}
                                            className="h-9 px-3 rounded-lg border border-zinc-200 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all duration-200"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-medium text-zinc-700">{labels.labelEmail}</label>
                                        <input
                                            required
                                            type="email"
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            placeholder="name@company.com"
                                            className="h-9 px-3 rounded-lg border border-zinc-200 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all duration-200"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-medium text-zinc-700">{labels.labelSubject}</label>
                                    <input
                                        required
                                        value={form.subject}
                                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                        placeholder={labels.placeholderSubject}
                                        className="h-9 px-3 rounded-lg border border-zinc-200 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all duration-200"
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-medium text-zinc-700">{labels.labelMessage}</label>
                                    <textarea
                                        required
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        placeholder={labels.placeholderMessage}
                                        rows={5}
                                        className="px-3 py-2.5 rounded-lg border border-zinc-200 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100 transition-all duration-200 resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="self-start inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200"
                                >
                                    {labels.submitButton}
                                    <ArrowRight size={14} weight="bold" />
                                </button>
                            </form>
                        </>
                    )}
                </div>

                {/* Right column */}
                <div className="flex flex-col gap-4">
                    <div className="bg-white rounded-xl border border-zinc-100 shadow-sm px-5 py-5">
                        <h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2 mt-4">{labels.otherContactTitle}</h2>
                        <div className="flex flex-col gap-2 pb-4">
                            {labels.quickLinks.map((item, i) => {
                                const Icon = quickLinkIcons[i];
                                return (
                                    <button
                                        key={i}
                                        className="flex items-center gap-3 h-12 px-3 rounded-lg hover:bg-zinc-50 transition-colors text-left group"
                                    >
                                        <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center shrink-0">
                                            <Icon size={15} weight="duotone" className="text-zinc-600" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-zinc-800">{item.label}</p>
                                            <p className="text-xs text-zinc-400">{item.desc}</p>
                                        </div>
                                        <ArrowRight size={13} weight="bold" className="text-zinc-300 group-hover:text-zinc-500 shrink-0 transition-colors" />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="bg-white rounded-xl border border-zinc-100 shadow-sm px-5 py-5">
                        <h2 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2 mt-4">{labels.faqTitle}</h2>
                        <div className="flex flex-col pb-4">
                            {labels.faq.map((item, i) => (
                                <div key={i} className="border-b border-zinc-100 last:border-0">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between py-3 text-left"
                                    >
                                        <span className="text-sm font-medium text-zinc-800 pr-3">{item.q}</span>
                                        <span className={`shrink-0 text-zinc-400 text-lg leading-none transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                                    </button>
                                    {openFaq === i && (
                                        <p className="text-xs text-zinc-500 leading-relaxed pb-3 pr-4">{item.a}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ContactClient;