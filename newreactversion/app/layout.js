"use client";

// import { Geist, Geist_Mono } from "next/font/google";
import Ebaron from "@/components/shared/Ebaron";
import Providers from "@/components/shared/ProgressBarProvider";
import { useEffect } from 'react';
import "aos/dist/aos.css";
import "@/app/games/games.css";
import "@/app/css/globals.css";
import "@/app/css/style.css";
import "@/app/css/themes.css";
import "@/app/css/gms.css";
import "@/app/css/recentplays.css";
import "@/app/css/contextMenu.css";
import { usePathname } from 'next/navigation';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const showEbaron = pathname !== '/games/random';

  return (
    <html lang="en">
      <body data-theme="default"
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {showEbaron && <Ebaron />}
          {children}
        </Providers>
      </body>
    </html>
  );
}
