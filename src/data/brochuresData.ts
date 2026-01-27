export interface BrochureFile {
  label: string;
  file: string;
}

export interface Brochure {
  id: string;
  title: string;
  file?: string; // Single file
  files?: BrochureFile[]; // Multiple files (e.g., English/Filipino)
}

export const brochuresData: Brochure[] = [
  {
    id: '1',
    title: 'Expanded Newborn Screening Brochure',
    files: [
      { label: 'English', file: '/files/brochure/ENBS-PBE-2020 NEW.pdf' },
      { label: 'Filipino', file: '/files/brochure/ENBS-PBT-2020 NEW.pdf' }
    ]
  },
  {
    id: '2',
    title: 'Alpha Thalassemia Brochure',
    file: '/files/brochure/Alpha Thal brochure.pdf'
  },
  {
    id: '3',
    title: 'G6PD Brochure',
    file: '/files/brochure/www.newbornscreening.ph_images_stories_downloadables_G6PD-brochure_2014.pdf'
  },
  {
    id: '4',
    title: 'Blood Spot Check',
    file: '/files/brochure/spot check.JPG'
  }
];