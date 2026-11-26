import { Analytics } from "@vercel/analytics/next";

// This root layout is intentionally minimal.
// All locale-specific rendering (html lang, body, fonts) is handled by app/[locale]/layout.jsx
const RootLayout = (props) => {
    const { children } = props;

    return (
        <>
            <Analytics />
            {children}
        </> 
    );
};

export default RootLayout;