import Image from 'next/image';

interface ServiceCardProps {
  icon: React.ComponentType;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  image,
  imageAlt,
}: ServiceCardProps) {
  return (
    <article>
      <Icon />
      <h4>{title}</h4>
      <p>{description}</p>
      <Image src={image} alt={imageAlt} width={400} height={300} />
    </article>
  );
}
