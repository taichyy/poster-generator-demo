"use client"
import { useState } from 'react';

import NavDesk from './nav-desk';
import NavMobile from './nav-mobile';

const NavResponsive = () => {
    const [showNav, setShowNav] = useState(false);

    const navLinks = [
        { id: "1", url: "/projects", label: "工坊" },
        { id: "2", url: "/contact", label: "聯絡我們" },
    ];

    return (
        <header className="sticky top-0 z-[1000]">
            <NavDesk setShowNav={setShowNav} navLinks={navLinks} />
            <NavMobile showNav={showNav} setShowNav={setShowNav} navLinks={navLinks} />
        </header>
    );
};

export default NavResponsive;
