import { IconName } from "../ui/icons/icon";
import { Icon } from "../ui/icons/icon";

interface SupportCardProps {
  icon: IconName;
  title: string;
  description: string;
}

export default function SupportCard({
  icon,
  title,
  description,
}: SupportCardProps) {
  return (
    <article>
      <Icon name={icon} />
      <h5>{title}</h5>
      <p>{description}</p>
    </article>
  );
}
