import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Navbar from "./navbar";
import Footer from "./footer";
const inter = Inter({ subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"],
  weight : ['500', '800']
});
export const metadata: Metadata = {
  title: "WeatherFlix",
  description: "Find What To watch based on you mood!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bricolage.className}>
      <body className="bg-[#ece3d4] max-w-[712px] w-full min-h-screen mx-auto p-4">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
