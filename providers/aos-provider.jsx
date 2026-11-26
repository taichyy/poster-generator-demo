"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const AOSProvider = (props) => {
    const { children } = props;

    useEffect(() => {
        const initAOS = async () => {
            await import("aos");
            AOS.init({
                duration: 1000,
                easing: "ease",
                once: true,
                anchorPlacement: "top-bottom"
            });
        };
        
        initAOS();
    }, []);

    return (
        <>
            {children}
        </>
    );
};

export default AOSProvider;