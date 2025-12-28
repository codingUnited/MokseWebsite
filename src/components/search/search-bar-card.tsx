'use client';

// This is only a placeholder component for the actual SearchBarCard component
// which is implemented in the 'app' directory using server components.

import Image from 'next/image';

// Define the props for the SearchBarCard component
interface SearchBarCardProps {
  icon: React.ComponentType;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}


// Placeholder implementation
// Replace this with the actual implementation in the 'app' directory
export default function SearchBarCard({
  icon: Icon,
  title,
  description,
  image,
  imageAlt,
}: SearchBarCardProps) {
  return (
    <article>
      <Icon />
      <h4>{title}</h4>
      <p>{description}</p>
      <Image src={image} alt={imageAlt} width={400} height={300} />
    </article>
  );
}
