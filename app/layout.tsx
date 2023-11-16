import type { Metadata } from "next";
import { Providers } from "../redux/provider";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/header";
import { ReactQueryProvider } from "@/components/providers/TanstackProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick and Morty",
  description: "Welcome to new",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={`${inter.className} max-w-4xl mx-auto`}>
          <header>
            <Header />
          </header>
          <Providers>
            <main>{children}</main>
          </Providers>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
