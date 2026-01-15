import { Handshake, HandHeart } from "lucide-react";
import type { ReactNode } from "react";
import { IconName } from "@/components/ui/icons/icon-registry";

export type Feature = {
  icon: IconName;
  title: string;
  description: string;
};

export const getInvolved: Feature[] = [
  {
    icon: "HandHoldingHeart",
    title: "Donate",
    description:
      "Your donation goes directly toward supporting our programs and services, creating a positive impact on the lives of justice-impacted individuals. Every contribution, big or small, makes a difference.",
  },
  {
    icon: "Handshake",
    title: "Partnership Opportunities",
    description:
      "We welcome partnerships with businesses, educational institutions, state agencies, and other nonprofits. Join us in creating meaningful change through collaborative projects and shared resources.",
  },
];
