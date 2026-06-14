"use client";
import { useState } from "react";
import { Gear, Bell, Shield, Palette, Globe, FloppyDisk } from "@phosphor-icons/react";

const tabs = [
    { id: "general", label: "一般設定", icon: Gear },
    { id: "notifications", label: "通知設定", icon: Bell },
    { id: "privacy", label: "隱私與安全", icon: Shield },
    { id: "appearance", label: "外觀", icon: Palette },
    { id: "language", label: "語系與地區", icon: Globe },
];

const SaveButton = ({ onClick }) => (
    <button
        onClick={onClick}
        className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200"
    >
        <FloppyDisk size={14} weight="bold" />
        儲存變更
    </button>
);

const SettingRow = ({ label, description, children }) => (
    <div className="flex items-center justify-between py-4 border-b border-zinc-100 last:border-0">
        <div>
            <p className="text-sm font-medium text-zinc-800">{label}</p>
            {description && <p className="text-xs text-zinc-400 mt-0.5">{description}</p>}
        </div>
        <div className="ml-8 shrink-0">{children}</div>
    </div>
);

const Toggle = ({ defaultChecked = false }) => {
    const [on, setOn] = useState(defaultChecked);
    return (
        <button
            onClick={() => setOn(!on)}
            className={`relative w-10 h-6 rounded-full transition-colors duration-200 ${on ? "bg-emerald-400" : "bg-zinc-200"}`}
            aria-checked={on}
            role="switch"
        >
            <span
                className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${on ? "translate-x-4" : "translate-x-0"}`}
            />
        </button>
    );
};

const SelectInput = ({ options, defaultValue }) => {
    const [value, setValue] = useState(defaultValue);
    return (
        <select
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="h-9 px-3 rounded-lg border border-zinc-200 bg-white text-sm text-zinc-800 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
        >
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </select>
    );
};

const GeneralTab = () => (
    <div>
        <SettingRow label="工作區名稱" description="顯示於側欄頂部的識別名稱">
            <input
                defaultValue="田中フォーチュン 的工作區"
                className="h-9 px-3 w-56 rounded-lg border border-zinc-200 bg-white text-sm text-zinc-800 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
            />
        </SettingRow>
        <SettingRow label="預設匯出格式" description="新建海報時的預設輸出格式">
            <SelectInput
                defaultValue="png"
                options={[
                    { value: "png", label: "PNG (高品質)" },
                    { value: "jpg", label: "JPG (較小檔案)" },
                    { value: "webp", label: "WebP" },
                ]}
            />
        </SettingRow>
        <SettingRow label="預設解析度" description="匯出時的像素密度">
            <SelectInput
                defaultValue="2x"
                options={[
                    { value: "1x", label: "1× (72 DPI)" },
                    { value: "2x", label: "2× (144 DPI)" },
                    { value: "3x", label: "3× (216 DPI)" },
                ]}
            />
        </SettingRow>
        <SettingRow label="自動儲存" description="每隔 30 秒自動儲存編輯中的海報">
            <Toggle defaultChecked />
        </SettingRow>
        <SettingRow label="顯示格線" description="在畫布上顯示對齊格線">
            <Toggle defaultChecked />
        </SettingRow>
        <SettingRow label="吸附至格線" description="移動物件時自動吸附至最近的格線">
            <Toggle />
        </SettingRow>
    </div>
);

const NotificationsTab = () => (
    <div>
        <SettingRow label="系統更新通知" description="有新版本或功能更新時通知我">
            <Toggle defaultChecked />
        </SettingRow>
        <SettingRow label="海報匯出完成" description="海報匯出完成時顯示通知">
            <Toggle defaultChecked />
        </SettingRow>
        <SettingRow label="帳單到期提醒" description="方案到期前 7 天發送提醒">
            <Toggle defaultChecked />
        </SettingRow>
        <SettingRow label="行銷郵件" description="接收產品功能介紹與優惠資訊">
            <Toggle />
        </SettingRow>
        <SettingRow label="每週使用摘要" description="每週一寄送上週使用統計報告">
            <Toggle />
        </SettingRow>
    </div>
);

const PrivacyTab = () => (
    <div>
        <SettingRow label="使用資料收集" description="允許收集匿名使用資料以改善產品">
            <Toggle defaultChecked />
        </SettingRow>
        <SettingRow label="錯誤回報" description="發生錯誤時自動送出錯誤報告">
            <Toggle defaultChecked />
        </SettingRow>
        <SettingRow label="兩步驟驗證" description="登入時要求手機驗證碼">
            <Toggle />
        </SettingRow>
        <SettingRow label="登入通知" description="偵測到新裝置登入時寄送通知信">
            <Toggle defaultChecked />
        </SettingRow>
        <div className="pt-4">
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">資料管理</p>
            <div className="flex flex-col gap-2">
                <button className="inline-flex items-center justify-center h-9 px-4 w-fit rounded-lg border border-zinc-200 text-sm font-medium text-zinc-700 hover:bg-zinc-50 active:scale-[0.98] transition-all duration-200">
                    下載我的資料
                </button>
                <button className="inline-flex items-center justify-center h-9 px-4 w-fit rounded-lg border border-red-200 text-sm font-medium text-red-600 hover:bg-red-50 active:scale-[0.98] transition-all duration-200">
                    刪除帳號
                </button>
            </div>
        </div>
    </div>
);

const AppearanceTab = () => {
    const [theme, setTheme] = useState("light");
    const themes = [
        { value: "light", label: "淺色" },
        { value: "dark", label: "深色" },
        { value: "system", label: "跟隨系統" },
    ];
    return (
        <div>
            <div className="py-4 border-b border-zinc-100">
                <p className="text-sm font-medium text-zinc-800 mb-3">主題模式</p>
                <div className="flex gap-3">
                    {themes.map((t) => (
                        <button
                            key={t.value}
                            onClick={() => setTheme(t.value)}
                            className={`h-9 px-4 rounded-lg text-sm font-medium transition-all duration-200 border ${
                                theme === t.value
                                    ? "bg-zinc-950 text-white border-zinc-950"
                                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400"
                            }`}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
            </div>
            <SettingRow label="緊湊模式" description="縮小間距，讓畫面顯示更多內容">
                <Toggle />
            </SettingRow>
            <SettingRow label="減少動態效果" description="減少介面動態效果（適合動作敏感使用者）">
                <Toggle />
            </SettingRow>
        </div>
    );
};

const LanguageTab = () => (
    <div>
        <SettingRow label="介面語言" description="系統介面的顯示語言">
            <SelectInput
                defaultValue="zh-TW"
                options={[
                    { value: "zh-TW", label: "繁體中文" },
                    { value: "zh-CN", label: "简体中文" },
                    { value: "en", label: "English" },
                    { value: "ja", label: "日本語" },
                ]}
            />
        </SettingRow>
        <SettingRow label="時區" description="影響日期與時間的顯示方式">
            <SelectInput
                defaultValue="asia-taipei"
                options={[
                    { value: "asia-taipei", label: "亞洲/台北 (UTC+8)" },
                    { value: "asia-tokyo", label: "亞洲/東京 (UTC+9)" },
                    { value: "utc", label: "UTC+0" },
                ]}
            />
        </SettingRow>
        <SettingRow label="日期格式" description="選擇日期顯示格式">
            <SelectInput
                defaultValue="yyyy-mm-dd"
                options={[
                    { value: "yyyy-mm-dd", label: "YYYY/MM/DD" },
                    { value: "dd-mm-yyyy", label: "DD/MM/YYYY" },
                    { value: "mm-dd-yyyy", label: "MM/DD/YYYY" },
                ]}
            />
        </SettingRow>
    </div>
);

const tabContent = {
    general: <GeneralTab />,
    notifications: <NotificationsTab />,
    privacy: <PrivacyTab />,
    appearance: <AppearanceTab />,
    language: <LanguageTab />,
};

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState("general");
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <main className="flex flex-col px-6 py-8 w-full min-h-screen bg-zinc-50/40">
            {/* Page header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-base font-semibold tracking-tight text-zinc-950">系統設定</h1>
                    <p className="text-xs text-zinc-400 font-medium mt-0.5">管理工作區偏好與帳號行為</p>
                </div>
                <SaveButton onClick={handleSave} />
            </div>

            {saved && (
                <div className="mb-4 px-4 py-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-sm text-emerald-700 font-medium w-fit">
                    已儲存變更
                </div>
            )}

            <div className="border-t border-zinc-200 mb-6" />

            <div className="flex gap-8">
                {/* Tab nav */}
                <aside className="shrink-0 w-44">
                    <nav className="flex flex-col gap-0.5">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            const active = activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2.5 h-9 px-3 rounded-lg text-sm font-medium transition-colors text-left ${
                                        active
                                            ? "bg-zinc-100 text-zinc-950"
                                            : "text-zinc-500 hover:text-zinc-800 hover:bg-zinc-50"
                                    }`}
                                >
                                    <Icon size={15} weight={active ? "fill" : "regular"} />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </nav>
                </aside>

                {/* Tab content */}
                <div className="flex-1 bg-white rounded-xl border border-zinc-100 shadow-sm px-6 py-2 min-h-[320px]">
                    {tabContent[activeTab]}
                </div>
            </div>
        </main>
    );
};

export default SettingsPage;
