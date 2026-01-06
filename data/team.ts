export type TeamMember = {
  name: string;
  title: string;
  email?: string;
  imagePath: string;
};

export const executiveBoard: TeamMember[] = [
  {
    name: 'Dr. Lowell C. Matthews',
    title: 'President',
    imagePath: '/team/lowell-matthews-exec.jpg',
  },
  {
    name: 'Dr. Adeola Adeniyi',
    title: 'Chief Financial Officer',
    imagePath: '/team/adeola-adeniyi-exec.jpg',
  },
  {
    name: 'Dr. Gamini Hewawasam',
    title: 'Board Chair',
    imagePath: '/team/gamini-hewawasam.jpg',
  },
  {
    name: 'Siesonn Fontaine',
    title: 'Secretary',
    imagePath: '/team/siesonn-fontaine.jpg',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Lowell C. Matthews',
    title: 'President',
    email: 'cmatthews@mokse.org',
    imagePath: '/team/lowell-matthews.jpg',
  },
  {
    name: 'Dr. Adeola Adeniyi',
    title: 'Chief Financial Officer',
    email: 'adeniyi@mokse.org',
    imagePath: '/team/adeola-adeniyi.jpg',
  },
  {
    name: 'Ben Wright',
    title: 'Stop the Stigma Director',
    email: 'wright@mokse.org',
    imagePath: '/team/ben-wright.jpg',
  },
  {
    name: 'Ariel Castay',
    title: 'Marketing Coordinator',
    email: 'castay@mokse.org',
    imagePath: '/team/ariel-castay.jpg',
  },
  {
    name: 'Juaniqua Tippens',
    title: 'Operations Director',
    email: 'tippens@mokse.org',
    imagePath: '/team/juaniqua-tippens.jpg',
  },
  {
    name: 'Kat Hannah',
    title: 'Community Coordinator',
    email: 'hannah@mokse.org',
    imagePath: '/team/kat-hannah.jpg',
  },
  {
    name: 'Liam Carlen',
    title: 'Marketing Intern',
    email: 'carlen@mokse.org',
    imagePath: '/team/liam-carlen.jpg',
  },
  {
    name: 'Kayla Strevel',
    title: 'Volunteer Coordinator',
    email: 'strevel@mokse.org',
    imagePath: '/team/kayla-strevel.jpg',
  },
];
