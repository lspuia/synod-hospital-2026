import type { Metadata } from "next";
import { Cormorant_Garamond, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Synod Hospital, Durtlang",
  description: "Synod Hospital is a multispeciality secondary hospital located in Durtlang, on the outskirts of Aizawl, the capital of the state of Mizoram. We provide quality medical care at affordable rates, with our primary focus on the poor and the needy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${lora.variable}`}>
        <Header />
        <main role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
