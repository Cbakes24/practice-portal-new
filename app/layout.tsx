import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./NavBar";
import Link from "next/link";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
        
          <Link href="/" className="p-4 flex gap-2">
            <Image
              src="/logo.svg"
              alt="logo"
              width={30}
              height={30}
              className="object-contain"
            />
            <p className="text-blue-300 logo_text">OnPoint</p>
          </Link>
          <NavBar />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
