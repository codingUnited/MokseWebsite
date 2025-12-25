import { Geist, Geist_Mono, Poppins, Open_Sans } from "next/font/google";
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
const poppins = Poppins({
    weight: ["600"],
    variable: "--font-poppins",
    subsets: ["latin"],
});
const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
});
export { poppins, geistSans, geistMono, openSans };