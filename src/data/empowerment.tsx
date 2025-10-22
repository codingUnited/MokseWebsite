import { Users, BookOpen, Megaphone, Network } from 'lucide-react';
import type { ReactNode } from 'react';

export type Feature = {
  icon: ReactNode;
  title: string;
  description: string;
};

export const empowerment: Feature[] = [
  {
    icon: <BookOpen strokeWidth={2} />,
    title: 'Educational Advancement',
    description:
      'Deliver high-quality educational programs and conferences tailored to incarcerated and formerly incarcerated individuals, equipping them with essential skills for career success.',
  },
  {
    icon: <Users strokeWidth={2} />,
    title: 'Entrepreneurial Empowerment',
    description:
      'Develop and support entrepreneurship initiatives, providing business resources, mentorship, and guidance to foster self-employment and economic independence.',
  },
  {
    icon: <Megaphone strokeWidth={2} />,
    title: 'Stigma Reduction & Advocacy',
    description:
      'Advocate for policies and cultural change through consulting services and partnerships, aiming to dismantle barriers and eliminate the stigma associated with incarceration.',
  },
  {
    icon: <Network strokeWidth={2} />,
    title: 'Community Building',
    description:
      'Establish a supportive network for formerly incarcerated individuals, encouraging reintegration and connection through meaningful professional and social networks.',
  },
];