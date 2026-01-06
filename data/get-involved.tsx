import { Handshake, HandHeart} from 'lucide-react';
import type { ReactNode } from 'react';

export type Feature = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const getInvolved: Feature[] = [
  {
    icon: <HandHeart strokeWidth={2} />,
    title: 'Donate',
    description:
      'Your donation goes directly toward supporting our programs and services, creating a positive impact on the lives of justice-impacted individuals. Every contribution, big or small, makes a difference.',
  },
  {
    icon: <Handshake strokeWidth={2} />,
    title: 'Partnership Opportunities',
    description:
      'We welcome partnerships with businesses, educational institutions, state agencies, and other nonprofits. Join us in creating meaningful change through collaborative projects and shared resources.',
  }
];