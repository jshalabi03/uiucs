import type { Metadata } from "next";
import { cn } from "@/lib/utils";

import Header from "@/components/header";
import "@/styles/globals.css";

import { Roboto_Mono as FontSans } from "next/font/google";
import Providers from "@/lib/providers";
const font = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "UIUC CS Courses",
  description: "Reviews and information for UIUC's Computer Science courses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-mono antialiased",
          font.className
        )}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
