"use client";

import { useLocale } from 'next-intl';

const I18nProvider = (props) => {
    const { children } = props;

    const locale = useLocale();

    return (
        <html lang={locale}>
            {children}
        </html>
    );
};

export default I18nProvider;