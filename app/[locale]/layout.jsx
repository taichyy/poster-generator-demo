import { locales } from "@/i18n/config";
import { Toaster } from 'react-hot-toast';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { Geist, Geist_Mono } from "next/font/google";

import "../globals.css";
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
    title: "Poster Generator",
    description: "Import materials, select templates, adjust online, and generate print-quality posters.",
};

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

const LocaleLayout = async ({ children, params }) => {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`${geist.variable} ${geistMono.variable} font-[family-name:var(--font-geist)] text-zinc-900 min-h-screen antialiased`}>
                <NextIntlClientProvider messages={messages}>
                    <TooltipProvider>
                        <Toaster
                            position="top-right"
                            toastOptions={{
                                style: {
                                    background: "#18181b",
                                    color: "#fafafa",
                                    border: "1px solid #3f3f46",
                                },
                                success: {
                                    style: {
                                        background: "#10b981",
                                        color: "#fafafa",
                                    },
                                },
                                error: {
                                    style: {
                                        background: "#ef4444",
                                        color: "#fafafa",
                                    },
                                },
                            }}
                        />
                        {children}
                    </TooltipProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}

export default LocaleLayout;