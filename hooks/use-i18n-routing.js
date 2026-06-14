import { useLocale } from 'next-intl';

export function useI18nRouting() {
    const locale = useLocale();

    const getLocalizedPath = (path) => {
        // If path already starts with /locale, return as is
        if (path.startsWith(`/${locale}/`) || path === `/${locale}`) {
            return path;
        }
        // Add locale prefix if not present
        if (path.startsWith('/')) {
            return `/${locale}${path}`;
        }
        return `/${locale}/${path}`;
    };

    return { locale, getLocalizedPath };
}
