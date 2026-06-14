import { Analytics } from "@vercel/analytics/next"

// This root layout is intentionally minimal.
// All locale-specific rendering (html lang, body, fonts) is handled by app/[locale]/layout.jsx
const RootLayout = ({ children }) => {
    return (
        <>
            <Analytics />
            {children}
        </> 
    )
}

export default RootLayout;