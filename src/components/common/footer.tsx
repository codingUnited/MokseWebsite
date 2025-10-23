'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div>
        <section>
          <p>A society where all individuals have equal opportunities to thrive, learn, and lead.</p>
          <ul>
            <li>
              <a href="https://web.facebook.com/mokseorg/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/mokse-org" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@mokse-org" target="_blank" rel="noopener noreferrer">
                YouTube
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mokse_org/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="mailto:info@mokse.org">
                Email
              </a>
            </li>
          </ul>
        </section>

        <section>
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>Support</h2>
          <ul>
            <li>
              <Link href="/">Terms and Conditions</Link>
            </li>
            <li>
              <Link href="/about-us">Legal</Link>
            </li>
            <li>
              <Link href="/services">Business</Link>
            </li>
            <li>
              <Link href="/contact">Partners</Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>Our Company</h2>
          <address>
            <p>497 Hooksett Road, Suite 362, Manchester, NH 03104</p>
            <p>
              <a href="tel:+16034961535">+1 603 496 1535</a>
            </p>
            <p>
              <a href="mailto:info@mokse.org">info@mokse.org</a>
            </p>
          </address>
        </section>
      </div>

      <div>
        <p>Copyright &copy; 2025 Mokse | Powered by Mokse</p>
      </div>
    </footer>
  );
}
