import { Toaster } from 'react-hot-toast';

import "./globals.css";

export const metadata = {
  title: "海報生成工具DEMO－嚴太成",
  description: "海報生成工具。輕鬆點選、容易調整、快速產生",
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
