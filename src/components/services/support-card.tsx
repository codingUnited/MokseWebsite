interface SupportCardProps {
  icon: React.ComponentType;
  title: string;
  description: string;
}

export default function SupportCard({
  icon: Icon,
  title,
  description,
}: SupportCardProps) {
  return (
    <article>
      <Icon />
      <h5>{title}</h5>
      <p>{description}</p>
    </article>
  );
}
