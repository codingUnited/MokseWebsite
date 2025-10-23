import Image from 'next/image';
import Link from 'next/link';
import FeatureCard from "@/components/home/feature-card";
import Navbar from "@/components/common/navbar";
import { empowerment } from "@/data/empowerment";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Image src="/HeroImage.jpg" alt="Mokse hero image" width={1920} height={1080} priority />
        <h1>Empowering Change Through Education and Advocacy</h1>
        <p>We strive to break down barriers and stop the stigma associated with
          incarceration through consulting services, educational conferences, and business support programs.</p>
        <Link href="/services">
          <button>Learn More</button>
        </Link>
      </div>
      <div>
        <div>
          <h1>A Commitment to Empowerment</h1>
          <p>To transform the lives of learners by providing accessible education, entrepreneurial
            support, and empowerment resources that foster personal and professional growth.</p>
          <Link href="/about-us">
            <button>About Us</button>
          </Link>
        </div>
        <div>
          {empowerment.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </>
  );
}
