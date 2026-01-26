export interface EventSchedule {
  date: string;
  time: string;
  venue: string;
  city: string;
  province: string;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  overview: string;
  participants?: string;
  schedule?: EventSchedule[];
  facilitators?: string[];
  contact: {
    emails: string[];
    phone?: string;
    address: string;
  };
  registrationFee?: string;
  active: boolean;
}

export const eventsData: Event[] = [
  // EVENT 1 - ACTIVE
  {
    id: 1,
    title: 'Reunion of SAVED BABIES',
    description: 'The event aims to gather patients confirmed positive for the panel of disorders included in the Newborn Screening Program.',
    image: '/images/event2.jpg',
    date: 'October 2025',
    location: 'Has Venue Per Province (Click Read More)',
    overview: 'The event aims to gather patients confirmed positive for the panel of disorders included in the Newborn Screening Program. It also provides a venue for parents and children to meet who shares the same goals and interest in terms of disorders management. The Reunion of Saved Babies also serves as a celebration for the early detection and management of the diseases which could have resulted to mental retardation and death if undetected and unmanaged.',
    participants: 'Babies recently confirmed in a disorder included in the panel of disorders tested in Newborn Screening together with their parents or guardians.',
    schedule: [
      {
        date: 'October 3, 2025',
        time: '09:00 AM – 11:00 AM',
        venue: 'Jollibee Trece',
        city: 'Trece Martires City',
        province: 'Cavite'
      },
      {
        date: 'October 4, 2025',
        time: '10:00 AM – 12:00 NN',
        venue: 'Multipurpose Hall, Rizal Provincial Capital',
        city: 'Antipolo City',
        province: 'Rizal'
      },
      {
        date: 'October 11, 2025',
        time: '10:00 AM – 12:00 PM',
        venue: 'Jollibee Biñan, Umbria Mall',
        city: 'Biñan',
        province: 'Laguna'
      },
      {
        date: 'October 18, 2025',
        time: '09:00 AM – 11:00 AM',
        venue: 'Jollibee Levitown',
        city: 'Lipa City',
        province: 'Batangas'
      },
      {
        date: 'October 25, 2025',
        time: '09:00 AM – 11:00 AM',
        venue: 'Jollibee Lucena 1, Quezon Ave Corner San Fernando St. Brgy. 5',
        city: 'Lucena City',
        province: 'Quezon'
      }
    ],
    facilitators: [
      'Alma Panganiban-Andal, MD, DPCOM, DipHIM, DPCHA, CHA',
      'Angelita U. Vanguardia, RN, MAN',
      'Marc Kevin U. Estolas, RMT',
      'Patrick Charls O. Reyes',
      'Shirleen O. Micosa, RN, LPT',
      'Mancy F. Barrago, RN',
      'Erika Jane U. Tarray, RPm, CHRA',
      'Christian Magsino',
      'Carla Janelle Barrientos',
      'Renzo Malabanan'
    ],
    contact: {
      emails: ['pdo1@nscsl.com.ph', 'pdo2@nscsl.com.ph', 'pdo3@nscsl.com.ph', 'programmngr@nscsl.com.ph'],
      phone: '+6399310101640',
      address: '3rd Floor DMMC-IHS Building, #143 Narra Street, Mountview Subd. Tanauan City, Batangas, 4232, Philippines'
    },
    registrationFee: 'No registration fee is required for this activity.',
    active: true
  },

  // EVENT 2 TEMPLATE - UNCOMMENT TO ACTIVATE
  /*
  {
    id: 2,
    title: 'Congenital Hypothyroidism (CH) / Congenital Adrenal Hyperplasia (CAH) Forum',
    description: 'The objective of this event is to increase awareness and knowledge among the parents of patients with CH and CAH.',
    image: '/images/CH and CAH Poster.png',
    date: 'May 26, 2025',
    location: 'Cavite Collaboration Center for Public Health (CCCPH) Trece Martires, Province of Cavite',
    overview: 'This forum aims to provide parents with comprehensive information about CH and CAH conditions, treatment options, and support resources.',
    participants: 'Parents of patients with CH and CAH',
    contact: {
      emails: ['pdo1@nscsl.com.ph', 'pdo2@nscsl.com.ph'],
      phone: '+6399310101640',
      address: '3rd Floor DMMC-IHS Building, #143 Narra Street, Mountview Subd. Tanauan City, Batangas'
    },
    active: true
  },
  */

  // EVENT 3 TEMPLATE - UNCOMMENT TO ACTIVATE
  /*
  {
    id: 3,
    title: 'LECTURE ON NSC-SL ADMINISTRATIVE MECHANICS',
    description: 'This activity aims to provide supplementary learning material for newborn screening facilities.',
    image: '/images/cho-laguna.jpg',
    date: 'August 6, 2025',
    location: 'Laguna Cultural Center, Sta. Cruz, Laguna',
    overview: 'Comprehensive training on administrative mechanics, sample quality, and follow-up procedures.',
    contact: {
      emails: ['admin@nscsl.com.ph'],
      address: '3rd Floor DMMC-IHS Building, Tanauan City, Batangas'
    },
    active: true
  },
  */
];