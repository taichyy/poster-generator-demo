"use client";

import { useLocale } from 'next-intl';
import { locales } from '@/i18n/config';
import { useRouter, usePathname } from 'next/navigation';

const LanguageSwitcher = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLocale = (newLocale) => {
        // pathname is like /en/... or /zh-TW/...
        // Replace the locale segment at the start
        const segments = pathname.split('/');
        // segments[0] is '', segments[1] is the current locale
        if (locales.includes(segments[1])) {
            segments[1] = newLocale;
        } else {
            segments.splice(1, 0, newLocale);
        }
        router.push(segments.join('/'));
    };

    return (
        <div className="flex gap-2">
            <button
                onClick={() => switchLocale('en')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    locale === 'en'
                        ? 'bg-red-600 text-white'
                        : 'text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600'
                }`}
            >
                EN
            </button>
            <button
                onClick={() => switchLocale('zh-TW')}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    locale === 'zh-TW'
                        ? 'bg-red-600 text-white'
                        : 'text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600'
                }`}
            >
                中文
            </button>
        </div>
    );
}

export default LanguageSwitcher;
