import CubeIcon from '@/components/services/icons/cube-icon';
import PlugIcon from '@/components/services/icons/plug-icon';
import UsersCogIcon from '@/components/services/icons/users-cog-icon';
import NewspaperIcon from '@/components/services/icons/newspaper-icon';
import UsersIcon from '@/components/services/icons/users-icon';

export interface Service {
  icon: React.ComponentType;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface SupportOption {
  icon: React.ComponentType;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const services: Service[] = [
  {
    icon: CubeIcon,
    title: 'Technical Assistance and Consulting for Colleges and Universities',
    description: 'To provide consulting services to colleges and universities interested in establishing prison programs for incarcerated learners using micro-credentials and badging.',
    image: '/services/technical-assistance.jpg',
    imageAlt: 'Technical Assistance',
  },
  {
    icon: PlugIcon,
    title: 'Stop the Stigma Conference',
    description: 'To organize an annual conference that raises awareness and educates college students and community members about the issues surrounding incarceration and the importance of stopping the stigma.',
    image: '/services/stop-stigma.jpg',
    imageAlt: 'Stop the Stigma Conference',
  },
  {
    icon: UsersCogIcon,
    title: 'Entrepreneurship Support for Formerly Incarcerated Individuals',
    description: 'To provide support and resources to formerly incarcerated individuals who aspire to start their businesses',
    image: '/services/entrepreneurship.jpg',
    imageAlt: 'Entrepreneurship Support',
  },
];

export const supportOptions: SupportOption[] = [
  {
    icon: NewspaperIcon,
    title: 'Donate',
    description: 'Your donation goes directly toward supporting our programs and services, creating a positive impact on the lives of justice-impacted individuals. Every contribution, big or small, makes a difference.',
  },
  {
    icon: UsersIcon,
    title: 'Partnership Opportunities',
    description: 'We welcome partnerships with businesses, educational institutions, state agencies, and other nonprofits. Join us in creating meaningful change through collaborative projects and shared resources.',
  },
];

export const faqItems: FaqItem[] = [
  {
    question: 'What is the vision of Mokse?',
    answer: 'Mokse envisions a society where all individuals have equal opportunities to thrive, learn, and lead, free from the stigma and limitations associated with their pasts. We believe in empowering individuals to contribute positively to their communities.',
  },
  {
    question: 'How can I get involved with Mokse?',
    answer: 'There are several ways to get involved, including volunteering, attending our events, or supporting our programs. For additional information on volunteering email: volunteers@mokse.org.',
  },
  {
    question: 'How does Mokse support formerly incarcerated individuals?',
    answer: 'Mokse provides accessible education, entrepreneurial support, and empowerment resources designed to transform the lives of formerly incarcerated individuals, helping them achieve personal and professional growth.',
  },
  {
    question: 'Where can I find more information about upcoming events?',
    answer: 'You can find details about our upcoming events, including the Stop the Stigma Conference, on our website. We regularly update it with new information on conferences, workshops, and community initiatives.',
  },
];
