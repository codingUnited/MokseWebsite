import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "../components/common/footer";
import { Provider } from "./provider";
import Navbar from "../components/common/navbar";



const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Mokse - Empowering Change Through Education and Advocacy",
  description: "We strive to break down barriers and stop the stigma associated with incarceration through consulting services, educational conferences, and business support programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${openSans.variable} antialiased`}
      >
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>

      </body>
    </html>
  );
}
