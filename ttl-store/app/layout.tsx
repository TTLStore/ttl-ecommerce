import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/UI/Header";
import SessionProvider from "@/provider/SessionProvider";
import { auth } from "@/authentication/auth.config";
import { Footer } from "@/components/UI";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShareHub",
  description: "Sharing is carrying",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body className={`${inter.className} 2xl:max-w-[1440px] m-auto`}>
        <SessionProvider session={session}>
          <Header />
          {children}
        </SessionProvider>
        <Footer />
      </body>
    </html>
  );
}
