import Image from 'next/image';
import Navbar from '@/components/common/navbar';
import TeamMemberCard from '@/components/about/team-member-card';
import GemIcon from '@/components/about/gem-icon';
import { executiveBoard, teamMembers } from '@/data/team';

export default function AboutUs() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <section>
          <h1>About Us</h1>
          <p>
            Our organization strives to break down barriers and stop the stigma
            associated with incarceration through technical assistance, consulting
            services, educational conferences, and business support programs.
          </p>
        </section>

        <section>
          <article>
            <GemIcon />
            <div>
              <h3>Vision</h3>
              <p>
                A society where all individuals have equal opportunities to thrive,
                learn, and lead. Empowered to contribute positively to their
                communities without the stigma or limitations from their past.
              </p>
            </div>
          </article>

          <article>
            <GemIcon />
            <div>
              <h3>Mission</h3>
              <p>
                To promote education, empowerment, and entrepreneurship among
                incarcerated learners and individuals. Our organization strives to
                break down barriers and stop the stigma associated with incarceration
                through consulting services, educational conferences, and business
                support programs.
              </p>
            </div>
          </article>
        </section>

        <section>
          <h2>Executive Board Members</h2>
          <div>
            {executiveBoard.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </section>

        <section>
          <h2>Our Team</h2>
          <div>
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name + member.email} {...member} />
            ))}
          </div>
        </section>

        <section>
          <h2>Our Partners</h2>
          <p>
            Join us in creating meaningful change through collaborative projects and
            shared resources.
          </p>
          <div>
            <a href="https://www.facebook.com/profile.php?id=61569163410278" target="_blank" rel="noopener noreferrer">
              <Image src="/partners/ht-logo.webp" alt="HT Partner" width={300} height={300} />
            </a>
            <a href="https://www.instagram.com/osobeautifulreentry/" target="_blank" rel="noopener noreferrer">
              <Image src="/partners/oh-so-beautiful-logo.webp" alt="Oh So Beautiful Reentry" width={300} height={300} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
