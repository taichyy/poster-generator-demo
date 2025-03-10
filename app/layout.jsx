import { Toaster } from 'react-hot-toast';

import "./globals.css";
import AOSProvider from '@/providers/aos-provider';
import { TooltipProvider } from '@/components/ui/tooltip';

export const metadata = {
    title: "一番賞海報生成工具",
    description: "一番賞海報生成工具，配合線上編輯功能。輕鬆點選、容易調整、快速產生",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={` font-sans text-slate-800 min-h-screen`}>
                <AOSProvider>
                    <TooltipProvider>
                        <Toaster />
                        {children}
                    </TooltipProvider>
                </AOSProvider>
            </body>
        </html>
    );
}
