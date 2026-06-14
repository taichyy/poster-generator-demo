"use client";

import { useState } from "react";
import { Gear, Bell, Shield, Palette, Globe, FloppyDisk } from "@phosphor-icons/react";

const Toggle = ({ defaultChecked = false }) => {
    const [on, setOn] = useState(defaultChecked);
    return (
        <button
            onClick={() => setOn(!on)}
            className={`relative w-10 h-6 rounded-full transition-colors duration-200 ${on ? "bg-emerald-400" : "bg-zinc-200"}`}
            aria-checked={on}
            role="switch"
        >
            <span className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${on ? "translate-x-4" : "translate-x-0"}`} />
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

const SettingRow = ({ label, description, children }) => (
    <div className="flex items-center justify-between py-4 border-b border-zinc-100 last:border-0">
        <div>
            <p className="text-sm font-medium text-zinc-800">{label}</p>
            {description && <p className="text-xs text-zinc-400 mt-0.5">{description}</p>}
        </div>
        <div className="ml-8 shrink-0">{children}</div>
    </div>
);

const tabIcons = { general: Gear, notifications: Bell, privacy: Shield, appearance: Palette, language: Globe };

const SettingsClient = ({ labels }) => {
    const [activeTab, setActiveTab] = useState("general");
    const [saved, setSaved] = useState(false);
    const [theme, setTheme] = useState("light");

    const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

    const g = labels.general;
    const n = labels.notifications;
    const p = labels.privacy;
    const a = labels.appearance;
    const l = labels.language;

    const tabContent = {
        general: (
            <div>
                <SettingRow label={g.workspaceName} description={g.workspaceNameDesc}>
                    <input defaultValue={g.workspaceNameDefault} className="h-9 px-3 w-56 rounded-lg border border-zinc-200 bg-white text-sm text-zinc-800 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all duration-200" />
                </SettingRow>
                <SettingRow label={g.exportFormat} description={g.exportFormatDesc}>
                    <SelectInput defaultValue="png" options={Object.entries(g.exportFormatOptions).map(([value, label]) => ({ value, label }))} />
                </SettingRow>
                <SettingRow label={g.resolution} description={g.resolutionDesc}>
                    <SelectInput defaultValue="2x" options={[{ value: "1x", label: "1× (72 DPI)" }, { value: "2x", label: "2× (144 DPI)" }, { value: "3x", label: "3× (216 DPI)" }]} />
                </SettingRow>
                <SettingRow label={g.autosave} description={g.autosaveDesc}><Toggle defaultChecked /></SettingRow>
                <SettingRow label={g.showGrid} description={g.showGridDesc}><Toggle defaultChecked /></SettingRow>
                <SettingRow label={g.snapToGrid} description={g.snapToGridDesc}><Toggle /></SettingRow>
            </div>
        ),
        notifications: (
            <div>
                <SettingRow label={n.systemUpdates} description={n.systemUpdatesDesc}><Toggle defaultChecked /></SettingRow>
                <SettingRow label={n.exportDone} description={n.exportDoneDesc}><Toggle defaultChecked /></SettingRow>
                <SettingRow label={n.billingReminder} description={n.billingReminderDesc}><Toggle defaultChecked /></SettingRow>
                <SettingRow label={n.marketing} description={n.marketingDesc}><Toggle /></SettingRow>
                <SettingRow label={n.weeklySummary} description={n.weeklySummaryDesc}><Toggle /></SettingRow>
            </div>
        ),
        privacy: (
            <div>
                <SettingRow label={p.dataCollection} description={p.dataCollectionDesc}><Toggle defaultChecked /></SettingRow>
                <SettingRow label={p.errorReporting} description={p.errorReportingDesc}><Toggle defaultChecked /></SettingRow>
                <SettingRow label={p.twoFactor} description={p.twoFactorDesc}><Toggle /></SettingRow>
                <SettingRow label={p.loginAlerts} description={p.loginAlertsDesc}><Toggle defaultChecked /></SettingRow>
                <div className="pt-4">
                    <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">{p.dataManagement}</p>
                    <div className="flex flex-col gap-2">
                        <button className="inline-flex items-center justify-center h-9 px-4 w-fit rounded-lg border border-zinc-200 text-sm font-medium text-zinc-700 hover:bg-zinc-50 active:scale-[0.98] transition-all duration-200">{p.downloadData}</button>
                        <button className="inline-flex items-center justify-center h-9 px-4 w-fit rounded-lg border border-red-200 text-sm font-medium text-red-600 hover:bg-red-50 active:scale-[0.98] transition-all duration-200">{p.deleteAccount}</button>
                    </div>
                </div>
            </div>
        ),
        appearance: (
            <div>
                <div className="py-4 border-b border-zinc-100">
                    <p className="text-sm font-medium text-zinc-800 mb-3">{a.themeMode}</p>
                    <div className="flex gap-3">
                        {Object.entries(a.themes).map(([value, label]) => (
                            <button
                                key={value}
                                onClick={() => setTheme(value)}
                                className={`h-9 px-4 rounded-lg text-sm font-medium transition-all duration-200 border ${theme === value ? "bg-zinc-950 text-white border-zinc-950" : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400"}`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
                <SettingRow label={a.compactMode} description={a.compactModeDesc}><Toggle /></SettingRow>
                <SettingRow label={a.reduceMotion} description={a.reduceMotionDesc}><Toggle /></SettingRow>
            </div>
        ),
        language: (
            <div>
                <SettingRow label={l.interfaceLanguage} description={l.interfaceLanguageDesc}>
                    <SelectInput defaultValue="zh-TW" options={Object.entries(l.languages).map(([value, label]) => ({ value: value === 'zhTW' ? 'zh-TW' : value === 'zhCN' ? 'zh-CN' : value, label }))} />
                </SettingRow>
                <SettingRow label={l.timezone} description={l.timezoneDesc}>
                    <SelectInput defaultValue="taipei" options={Object.entries(l.timezones).map(([value, label]) => ({ value, label }))} />
                </SettingRow>
                <SettingRow label={l.dateFormat} description={l.dateFormatDesc}>
                    <SelectInput defaultValue="ymd" options={Object.entries(l.dateFormats).map(([value, label]) => ({ value, label }))} />
                </SettingRow>
            </div>
        ),
    };

    const tabKeys = Object.keys(tabIcons);

    return (
        <main className="flex flex-col px-6 py-8 w-full min-h-screen bg-zinc-50/40">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-base font-semibold tracking-tight text-zinc-950">{labels.pageTitle}</h1>
                    <p className="text-xs text-zinc-400 font-medium mt-0.5">{labels.pageSubtitle}</p>
                </div>
                <button
                    onClick={handleSave}
                    className="inline-flex items-center gap-1.5 h-9 px-4 rounded-lg bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 active:scale-[0.98] transition-all duration-200"
                >
                    <FloppyDisk size={14} weight="bold" />
                    {labels.saveButton}
                </button>
            </div>

            {saved && (
                <div className="mb-4 px-4 py-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-sm text-emerald-700 font-medium w-fit">
                    {labels.saved}
                </div>
            )}

            <div className="border-t border-zinc-200 mb-6" />

            <div className="flex gap-8">
                <aside className="shrink-0 w-44">
                    <nav className="flex flex-col gap-0.5">
                        {tabKeys.map((key) => {
                            const Icon = tabIcons[key];
                            const active = activeTab === key;
                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`flex items-center gap-2.5 h-9 px-3 rounded-lg text-sm font-medium transition-colors text-left ${active ? "bg-zinc-100 text-zinc-950" : "text-zinc-500 hover:text-zinc-800 hover:bg-zinc-50"}`}
                                >
                                    <Icon size={15} weight={active ? "fill" : "regular"} />
                                    {labels.tabs[key]}
                                </button>
                            );
                        })}
                    </nav>
                </aside>
                <div className="flex-1 bg-white rounded-xl border border-zinc-100 shadow-sm px-6 py-2 min-h-[320px]">
                    {tabContent[activeTab]}
                </div>
            </div>
        </main>
    );
}

export default SettingsClient;