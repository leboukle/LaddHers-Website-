import { Cormorant_Garamond, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "LaddHers — A Circle for Women Rising with Intention",
  description:
    "LaddHers is a modern circle for ambitious women building wealth, relationships, and opportunity — through curated experiences, private gatherings, and a community of women in the room.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${josefin.variable}`}
    >
      <body className="font-sans antialiased bg-ivory text-charcoal">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
