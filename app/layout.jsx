import { Toaster } from 'react-hot-toast';

import "./globals.css";

export const metadata = {
  title: "NX樂園－海報生成工具",
  description: "NX樂園－海報生成工具。輕鬆點選、容易調整、快速產生",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans text-slate-800">
        <Toaster />
        {children}
      </body>
    </html>
  );
}
