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
    title: 'Expanded Newborn Screening Poster',
    files: [
      { label: 'English', file: '/files/posters/ENBS-Poster-English.pdf' },
      { label: 'Filipino', file: '/files/posters/ENBS-Poster-Filipino.pdf' }
    ]
  },
  {
    id: '2',
    title: 'Sample Poster 1',
    file: '/files/posters/sample-poster-1.pdf'
  },
  {
    id: '3',
    title: 'Sample Poster 2',
    file: '/files/posters/sample-poster-2.pdf'
  }
  // Add more posters as needed
];