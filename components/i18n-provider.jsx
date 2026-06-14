"use client";

import { useLocale } from 'next-intl';

const I18nProvider = ({ children }) => {
    const locale = useLocale();

    return (
        <html lang={locale}>
            {children}
        </html>
    );
}

export default I18nProvider;