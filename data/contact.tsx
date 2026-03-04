import { IconName } from "@/components/ui/icons/icon-registry";

export interface ContactInfo {
  icon: IconName;
  label: string;
  value: string;
  phoneNumber: string;
}

export interface SocialLink {
  platform: IconName;
  url: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: "MapPin",
    label: "Mailing Address",
    value: "497 Hooksett Road,Suite 362",
    phoneNumber: "Manchester NH,03104"
  },
  {
    icon: "Phone",
    label: "Call Us On",
    value: "+1 603 496 1535",
    phoneNumber: "tel:+16034961535",
  },
  {
    icon: "Mail",
    label: "Email us",
    value: "info@mokse.org",
    phoneNumber: "mailto:info@mokse.org",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "Facebook",
    url: "https://web.facebook.com/mokseorg/",
  },
  {
    platform: "YouTube",
    url: "https://www.youtube.com/@mokse-org",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/company/mokse-org",
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/mokse_org/",
  },
];

export const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.334934398748!2d-71.41689792346378!3d42.99457907114612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e24f6482e3dde3%3A0x8b5f5e5e5e5e5e5e!2sMokse!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus";
