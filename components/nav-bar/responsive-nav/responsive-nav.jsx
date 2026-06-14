"use client"

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import NavDesk from './nav-desk';
import NavMobile from './nav-mobile';

const NavResponsive = () => {
    const [showNav, setShowNav] = useState(false);
    const locale = useLocale();
    const t = useTranslations('nav');

    const navLinks = [
        { id: "1", url: `/${locale}/projects`, label: t('workshop') },
        { id: "2", url: `/${locale}/contact`, label: t('contactUs') },
    ];

    return (
        <header className="sticky top-0 z-[1000]">
            <NavDesk setShowNav={setShowNav} navLinks={navLinks} locale={locale} />
            <NavMobile showNav={showNav} setShowNav={setShowNav} navLinks={navLinks} locale={locale} />
        </header>
    );
};

export default NavResponsive;
