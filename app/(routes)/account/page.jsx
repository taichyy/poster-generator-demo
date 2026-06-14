"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Camera, FloppyDisk, Key } from "@phosphor-icons/react";

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

const AccountPage = () => {
    const [saved, setSaved] = useState(false);
    const [pwSaved, setPwSaved] = useState(false);

    return (
        <main className="flex flex-col px-6 py-8 w-full min-h-screen bg-zinc-50/40">
            {/* Page header */}
            <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-lg bg-zinc-100 flex items-center justify-center">
                    <User size={18} weight="duotone" className="text-zinc-600" />
                </div>
                <div>
                    <h1 className="text-base font-semibold tracking-tight text-zinc-950">帳戶設定</h1>
                    <p className="text-xs text-zinc-400 font-medium">管理個人資料與登入憑證</p>
                </div>
            </div>

            <div className="border-t border-zinc-200 mb-6" />

            <div className="flex flex-col gap-5 max-w-xl">

                {/* Avatar */}
                <Section title="個人頭像" description="建議使用 200×200 px 以上的正方形圖片">
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
                                加入日期：{new Date(mockUser.joinedAt).toLocaleDateString("zh-TW")}
                            </p>
                        </div>
                    </div>
                </Section>

                {/* Basic info */}
                <Section title="基本資料" description="這些資訊會顯示在您的帳戶頁面">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <Field label="顯示名稱">
                            <TextInput defaultValue={mockUser.name} />
                        </Field>
                        <Field label="電子郵件">
                            <TextInput defaultValue={mockUser.email} type="email" disabled />
                        </Field>
                        <Field label="電話">
                            <TextInput defaultValue={mockUser.phone} type="tel" />
                        </Field>
                        <Field label="公司 / 店名">
                            <TextInput defaultValue={mockUser.company} />
                        </Field>
                        <Field label="職稱">
                            <TextInput defaultValue={mockUser.role} />
                        </Field>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2000); }}
                            className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200"
                        >
                            <FloppyDisk size={14} weight="bold" />
                            儲存
                        </button>
                        {saved && <span className="text-xs text-emerald-600 font-medium">已儲存</span>}
                    </div>
                </Section>

                {/* Change password */}
                <Section title="變更密碼" description="建議定期更換密碼以確保帳號安全">
                    <div className="flex flex-col gap-4 mb-4">
                        <Field label="目前密碼">
                            <TextInput type="password" placeholder="輸入目前密碼" />
                        </Field>
                        <Field label="新密碼">
                            <TextInput type="password" placeholder="至少 8 個字元" />
                        </Field>
                        <Field label="確認新密碼">
                            <TextInput type="password" placeholder="再次輸入新密碼" />
                        </Field>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => { setPwSaved(true); setTimeout(() => setPwSaved(false), 2000); }}
                            className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200"
                        >
                            <Key size={14} weight="bold" />
                            更新密碼
                        </button>
                        {pwSaved && <span className="text-xs text-emerald-600 font-medium">密碼已更新</span>}
                    </div>
                </Section>

                {/* Danger zone */}
                <Section title="帳號管理">
                    <div className="flex flex-col gap-2">
                        <button className="self-start h-9 px-4 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-600 hover:bg-zinc-50 active:scale-[0.98] transition-all duration-200">
                            登出所有裝置
                        </button>
                        <button className="self-start h-9 px-4 rounded-lg border border-red-200 text-sm font-medium text-red-600 hover:bg-red-50 active:scale-[0.98] transition-all duration-200">
                            停用帳號
                        </button>
                    </div>
                </Section>

            </div>
        </main>
    );
};

export default AccountPage;
