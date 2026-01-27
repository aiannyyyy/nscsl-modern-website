export interface PosterFile {
  label: string;
  file: string;
}

export interface Poster {
  id: string;
  title: string;
  file?: string; // Single file
  files?: PosterFile[]; // Multiple files (e.g., English/Filipino)
}

export const postersData: Poster[] = [
  {
    id: '1',
    title: 'Gabay',
    file: '/files/gabay.pdf'
  },
  {
    id: '2',
    title: 'Are Your Newborn Screenening Samples Acceptable?',
    file: '/images/poster1.png'
  },
  {
    id: '3',
    title: 'Collection Procedure',
    file: '/images/poster2.JPG'
  }
];