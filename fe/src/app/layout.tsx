'use client'

import { Geist, Geist_Mono } from "next/font/google";
import {QueryClientProvider} from "@tanstack/react-query";
import queryClient from "@/app/network/appQueryClient";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
    <QueryClientProvider client={queryClient}>
      <body className="min-h-full flex flex-col">{children}</body>
    </QueryClientProvider>
    </html>
  );
}
