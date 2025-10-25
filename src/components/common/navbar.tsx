'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <Link href="/">
                <Image src="/MOKSE-3-180x46.png" alt="MOKSE Logo" width={180} height={46} />
            </Link>
            <Link href="/">Home</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
            <a href="tel:+16034961535">
                <button>Call Us Today</button>
            </a>
        </nav>
    )
};