import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import Providers from "@/lib/providers";

const font = Roboto_Mono({ subsets: ["latin"] });

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
    <html lang="en">
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
