import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "GDGC-Biet",
  description: "GDGC-Biet,Lucknow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-950">
        <div className="h-28 w-full flex justify-center pt-3 font-Lato sticky top-5 z-40">
          <Navbar></Navbar>
        </div>
        {children}
        <div className="w-full">
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
