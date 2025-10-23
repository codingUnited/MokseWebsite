import Image from 'next/image';
import type { TeamMember } from '@/data/team';

export default function TeamMemberCard({ name, title, email, imagePath }: TeamMember) {
  return (
    <article>
      <figure>
        <Image src={imagePath} alt={name} width={300} height={300} />
      </figure>
      <div>
        <h3>{name}</h3>
        <p>{title}</p>
        {email && <p>{email}</p>}
      </div>
    </article>
  );
}
