import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import {Theme} from "@radix-ui/themes"

const inter = Poppins({weight:["500","600","700","800","900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rahul Sai - Portfolio",
  description: "A passionate computer science student willing to learn more about Technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}
