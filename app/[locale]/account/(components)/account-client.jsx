"use client";

import { useState } from "react";
import { User, Camera, FloppyDisk, Key } from "@phosphor-icons/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const mockUser = {
    name: "田中フォーチュン",
    email: "tanaka@fortune-ichiban.jp",
    phone: "+81 03-1234-5678",
    company: "フォーチュン一番賞",
    role: "店長",
    avatar: "https://picsum.photos/seed/user-tanaka-avatar/80/80",
    joinedAt: "2025-03-12",
};

const Field = ({ label, children }) => (
    <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-zinc-700">{label}</label>
        {children}
    </div>
);

const TextInput = ({ defaultValue, placeholder, type = "text", disabled }) => (
    <input
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        className="h-9 px-3 rounded-lg border border-zinc-200 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-200 disabled:bg-zinc-50 disabled:text-zinc-400 disabled:cursor-not-allowed"
    />
);

const Section = ({ title, description, children }) => (
    <div className="bg-white rounded-xl border border-zinc-100 shadow-sm px-6 py-5">
        <div className="mb-4 pb-4 border-b border-zinc-100">
            <h2 className="text-sm font-semibold text-zinc-900">{title}</h2>
            {description && <p className="text-xs text-zinc-400 mt-0.5">{description}</p>}
        </div>
        {children}
    </div>
);

const AccountClient = ({ labels: l }) => {
    const [saved, setSaved] = useState(false);
    const [pwSaved, setPwSaved] = useState(false);

    return (
        <main className="flex flex-col px-6 py-8 w-full min-h-screen bg-zinc-50/40">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-lg bg-zinc-100 flex items-center justify-center">
                    <User size={18} weight="duotone" className="text-zinc-600" />
                </div>
                <div>
                    <h1 className="text-base font-semibold tracking-tight text-zinc-950">{l.pageTitle}</h1>
                    <p className="text-xs text-zinc-400 font-medium">{l.pageSubtitle}</p>
                </div>
            </div>

            <div className="border-t border-zinc-200 mb-6" />

            <div className="flex flex-col gap-5 max-w-xl">

                <Section title={l.avatarSection} description={l.avatarSectionDesc}>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Avatar className="w-14 h-14 border-2 border-zinc-200">
                                <AvatarImage src={mockUser.avatar} />
                                <AvatarFallback className="text-base font-semibold bg-emerald-50 text-emerald-700">
                                    {mockUser.name.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                            <button className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-zinc-950 text-white flex items-center justify-center hover:bg-zinc-700 transition-colors">
                                <Camera size={11} weight="bold" />
                            </button>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-zinc-800">{mockUser.name}</p>
                            <p className="text-xs text-zinc-400">
                                {l.joinedAt}{new Date(mockUser.joinedAt).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                </Section>

                <Section title={l.basicInfoSection} description={l.basicInfoSectionDesc}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <Field label={l.labelDisplayName}><TextInput defaultValue={mockUser.name} /></Field>
                        <Field label={l.labelEmail}><TextInput defaultValue={mockUser.email} type="email" disabled /></Field>
                        <Field label={l.labelPhone}><TextInput defaultValue={mockUser.phone} type="tel" /></Field>
                        <Field label={l.labelCompany}><TextInput defaultValue={mockUser.company} /></Field>
                        <Field label={l.labelRole}><TextInput defaultValue={mockUser.role} /></Field>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2000); }}
                            className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200"
                        >
                            <FloppyDisk size={14} weight="bold" />
                            {l.save}
                        </button>
                        {saved && <span className="text-xs text-emerald-600 font-medium">{l.saved}</span>}
                    </div>
                </Section>

                <Section title={l.passwordSection} description={l.passwordSectionDesc}>
                    <div className="flex flex-col gap-4 mb-4">
                        <Field label={l.labelCurrentPassword}><TextInput type="password" placeholder={l.placeholderCurrentPassword} /></Field>
                        <Field label={l.labelNewPassword}><TextInput type="password" placeholder={l.placeholderNewPassword} /></Field>
                        <Field label={l.labelConfirmPassword}><TextInput type="password" placeholder={l.placeholderConfirmPassword} /></Field>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => { setPwSaved(true); setTimeout(() => setPwSaved(false), 2000); }}
                            className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200"
                        >
                            <Key size={14} weight="bold" />
                            {l.updatePassword}
                        </button>
                        {pwSaved && <span className="text-xs text-emerald-600 font-medium">{l.passwordUpdated}</span>}
                    </div>
                </Section>

                <Section title={l.dangerSection}>
                    <div className="flex flex-col gap-2">
                        <button className="self-start h-9 px-4 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-600 hover:bg-zinc-50 active:scale-[0.98] transition-all duration-200">
                            {l.logoutAllDevices}
                        </button>
                        <button className="self-start h-9 px-4 rounded-lg border border-red-200 text-sm font-medium text-red-600 hover:bg-red-50 active:scale-[0.98] transition-all duration-200">
                            {l.deactivateAccount}
                        </button>
                    </div>
                </Section>

            </div>
        </main>
    );
}

export default AccountClient;
