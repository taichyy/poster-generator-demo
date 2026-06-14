import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from 'react-hot-toast';

import "./globals.css";
import { TooltipProvider } from '@/components/ui/tooltip';

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist",
});

const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
});

export const metadata = {
    title: "一番賞海報生成工具",
    description: "匯入素材，選擇版型，線上微調，即可生成一番賞海報。無需設計技能，輕鬆完成。",
};

export default function RootLayout({ children }) {
    return (
        <html lang="zh-TW">
            <body className={`${geist.variable} ${geistMono.variable} font-[family-name:var(--font-geist)] text-zinc-900 min-h-screen antialiased`}>
                <TooltipProvider>
                    <Toaster
                        position="top-right"
                        toastOptions={{
                            style: {
                                borderRadius: "0.75rem",
                                fontSize: "0.875rem",
                                fontFamily: "var(--font-geist)",
                            },
                        }}
                    />
                    {children}
                </TooltipProvider>
            </body>
        </html>
    );
}
