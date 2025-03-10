"use client"
import { useState } from 'react'

import NavDesk from './nav-desk'
import NavMobile from './nav-mobile'

const NavResponsive = () => {
    const [showNav, setShowNav] = useState(false)
    
    const navLinks = [
        {
            id: "1",
            url: "/projects",
            label: "工坊",
        },
        {
            id: "3",
            url: "/contact",
            label: "聯絡我們",
        },
    ]

    return (
        <div className='sticky top-0 h-[12vh] z-[1000]'>
            <NavDesk setShowNav={setShowNav} navLinks={navLinks} />
            <NavMobile showNav={showNav} setShowNav={setShowNav} navLinks={navLinks} />
        </div>
    )
}

export default NavResponsive