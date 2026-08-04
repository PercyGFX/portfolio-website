import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

import type { Metadata } from "next";

const siteUrl = "https://kelum.me";
const title = "Kelum Isuranga — Software Engineer";
const description =
  "Full-stack engineer specializing in Go and Node.js backend systems for production iGaming platforms. Experienced with Kafka event streaming, crypto payments, and KYC/AML compliance. Based in Sri Lanka.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: "Kelum Isuranga", url: siteUrl }],
  creator: "Kelum Isuranga",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Kelum Isuranga",
    locale: "en_US",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <ThemeContextProvider>
          {children}

          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                borderRadius: "6px",
                border: "1px solid rgb(var(--ink) / 0.12)",
                background: "rgb(var(--paper))",
                color: "rgb(var(--ink))",
                fontSize: "0.85rem",
              },
            }}
          />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
