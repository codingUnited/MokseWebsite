import FeatureCard from "@/components/ui/feature-card";
import Navbar from "../components/ui/navbar";
import { empowerment } from "@/data/empowerment";

export default function Home() {
  return (
    <body>
      <div>
        <Navbar />
        <img src="/HeroImage.jpg" />
        <h1>Empowering Change Through Education and Advocacy</h1>
        <p>We strive to break down barriers and stop the stigma associated with 
          incarceration through consulting services, educational conferences, and business support programs.</p>
        <button>Learn More</button>
      </div>
      <div>
        <div>
          <h1>A Commitment to Empowerment</h1>
          <p>To transform the lives of learners by providing accessible education, entrepreneurial 
            support, and empowerment resources that foster personal and professional growth.</p>
          <button>About Us</button>
        </div>
        <div>
          {empowerment.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </body>    
  );
}
