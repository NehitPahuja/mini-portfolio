import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nehitpahuja.vercel.app"),
  title: "Nehit's Portfolio",
  description:
    "Portfolio of Nehit Pahuja, a frontend developer based in India building modern, minimal web experiences.",
  openGraph: {
    title: "Nehit's Portfolio",
    description:
      "Portfolio of Nehit Pahuja, a frontend developer based in India building modern, minimal web experiences.",
    url: "https://nehitpahuja.vercel.app",
    siteName: "Nehit's Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
