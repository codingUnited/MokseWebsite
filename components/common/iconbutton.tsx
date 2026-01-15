//Create a reusable IconButton component that takes in link, platform, url, and icon as props and renders an anchor tag with the provided icon.
//  & React.ComponentProps<typeof ChakraIcon>

export default function IconButton({
  link,
  platform,
  url,
  icon,
}: {
  link: string;
  platform: string;
  url: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit our ${platform} page`}
    >
      {icon}
    </a>
  );
}
