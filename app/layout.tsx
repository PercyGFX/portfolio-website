import Header from "@/components/header";
import "./globals.css";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Kelum Isuranga — Software Engineer",
  description:
    "Full-stack engineer specializing in Go and Node.js backend systems for production iGaming platforms. Based in Sri Lanka.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`!scroll-smooth ${fraunces.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body className="bg-paper font-sans text-ink antialiased">
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <div className="mx-auto min-h-screen max-w-[76rem] border-x border-line">
              <Header />
              {children}
              <Footer />
            </div>

            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  borderRadius: "0",
                  border: "1px solid rgb(var(--ink) / 0.15)",
                  background: "rgb(var(--paper))",
                  color: "rgb(var(--ink))",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                },
              }}
            />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
