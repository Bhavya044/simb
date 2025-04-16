import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simbian - AI-Powered Security Operations",
  description: "Experience the future of security operations with Simbian AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-full">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
