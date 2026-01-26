export interface FactSheetItem {
  title: string;
  file: string;
}

export interface FactSheetCategory {
  id: string;
  name: string;
  description: string;
  categories: {
    doctors: FactSheetItem[];
    parentsEnglish: FactSheetItem[];
    parentsFilipino: FactSheetItem[];
  };
}

export const factSheetsData: FactSheetCategory[] = [
  {
    id: 'amino-acid',
    name: 'Amino Acid Disorders',
    description: 'Information about amino acid metabolism disorders',
    categories: {
      doctors: [
        // Add your amino acid disorder files here
      ],
      parentsEnglish: [],
      parentsFilipino: []
    }
  },
  {
    id: 'endocrine',
    name: 'Endocrine Disorders',
    description: 'Information about endocrine system disorders',
    categories: {
      doctors: [
        { title: 'CAH (Congenital Adrenal Hyperplasia)', file: '/files/fact-sheets/endocrine/NSRC-INT-035-Rev0-CAH.pdf' },
        { title: 'CH (Congenital Hypothyroidism)', file: '/files/fact-sheets/endocrine/NSRC-INT-036Rev0-CH.pdf' }
      ],
      parentsEnglish: [
        { title: 'CAH (Congenital Adrenal Hyperplasia)', file: '/files/fact-sheets/endocrine/NSRC-PSU-FS-18_Rev0_CAH.pdf' },
        { title: 'CH (Congenital Hypothyroidism)', file: '/files/fact-sheets/endocrine/CH.pdf' }
      ],
      parentsFilipino: [
        { title: 'CAH (Congenital Adrenal Hyperplasia)', file: '/files/fact-sheets/endocrine/NSRC-PSU-FS-26-Rev0-Filipino-Fact-Sheet-on-CAH-Controlled-Copy.pdf' },
        { title: 'CH (Congenital Hypothyroidism)', file: '/files/fact-sheets/endocrine/NSRC-PSU-FS-27-Rev0-Filipino-Fact-Sheet-on-CH-Controlled-Copy.pdf' }
      ]
    }
  },
  {
    id: 'fatty-acid',
    name: 'Fatty Acid Oxidation Disorders',
    description: 'Information about fatty acid metabolism disorders',
    categories: {
      doctors: [
        { title: 'MCADD (Medium chain acyl-CoA dehydrogenase deficiency)', file: '/files/fact-sheets/faod/(1) NSRC-INT-037-Rev0-MCADD.pdf' },
        { title: 'VLCADD (Very long chain acyl-CoA dehydrogenase deficiency)', file: '/files/fact-sheets/faod/(2) NSRC-INT-038-Rev0-VLCADD.pdf' },
        { title: 'LCHADD (Long Chain 3-hydroxyacyl-CoA Dehydrogenase Deficiency)', file: '/files/fact-sheets/faod/(3) NSRC-INT-039-Rev0-LCHADD.pdf' },
        { title: 'TFP (Trifunctional Protein Deficiency)', file: '/files/fact-sheets/faod/(4) NSRC-INT-040-Rev0-TFP.pdf' },
        { title: 'CPT1 (Carnitine Palmitoyl Transferase Deficiency Type 1)', file: '/files/fact-sheets/faod/(5) NSRC-INT-041-Rev0-CPT1.pdf' },
        { title: 'CPT2 (Carnitine Palmitoyl Transferase Deficiency Type 2)', file: '/files/fact-sheets/faod/(6) NSRC-INT-042-Rev0-CPT2.pdf' },
        { title: 'Carnitine Uptake Defect', file: '/files/fact-sheets/faod/(7) NSRC-INT-043Rev0-CUD.pdf' },
        { title: 'Glutaric Aciduria Type 2', file: '/files/fact-sheets/faod/(8) NSRC-INT-044Rev0-GA2.pdf' }
      ],
      parentsEnglish: [
        { title: 'Intro', file: '/files/fact-sheets/faod/(A) NSRC-PSU-FS-15_Rev0_FAOD-Intro.pdf' },
        { title: 'CPT1', file: '/files/fact-sheets/faod/(B) NSRC-PSU-FS-17_Rev0_CPT1.pdf' },
        { title: 'CPT2', file: '/files/fact-sheets/faod/(C) NSRC-PSU-FS-13_Rev0_CPT2.pdf' }
      ],
      parentsFilipino: [
        { title: 'Intro', file: '/files/fact-sheets/faod/(a) NSRC-PSU-FS-30_Rev0_Fil-FAOD-Intro.pdf' },
        { title: 'CPT1', file: '/files/fact-sheets/faod/(b) NSRC-PSU-FS-28_Rev0_Fil-CPT1.pdf' },
        { title: 'CPT2', file: '/files/fact-sheets/faod/(c) NSRC-PSU-FS-29_Rev0_Fil-CPT2.pdf' }
      ]
    }
  },
  {
    id: 'organic-acidurias',
    name: 'Organic Acidurias',
    description: 'Information about organic acid metabolism disorders',
    categories: {
      doctors: [
        { title: 'PA (Propionic Acidemia)', file: '/files/fact-sheets/oa/(1) NSRC-INT-045Rev0-PA.pdf' },
        { title: 'MMA (Methylmalonic Academia)', file: '/files/fact-sheets/oa/(2) NSRC-INT-047-Rev0-MMA.pdf' },
        { title: 'IVA (Isovaleric Acidemia)', file: '/files/fact-sheets/oa/(3) NSRC-INT-046Rev0-IVA.pdf' }
      ],
      parentsEnglish: [
        { title: 'Intro', file: '/files/fact-sheets/oa/(A) NSRC-PSU-FS-16_Rev0_Organic-Acidurias-Intro.pdf' },
        { title: '3-MCC', file: '/files/fact-sheets/oa/(B) NSRC-PSU-FS-05_Rev0_3-MCC.pdf' }
      ],
      parentsFilipino: [
        { title: 'Intro', file: '/files/fact-sheets/oa/(a) NSRC-PSU-FS-38_Rev0_Fil-OA-Intro.pdf' },
        { title: '3-MCC', file: '/files/fact-sheets/oa/(b) NSRC-PSU-FS-23_Rev0_Fil-3-MCC.pdf' }
      ]
    }
  },
  {
    id: 'thalassemias',
    name: 'Thalassemias and Hemoglobinopathies',
    description: 'Information about blood disorders',
    categories: {
      doctors: [
        { title: 'Thalassemias and Hemoglobinopathies Introduction', file: '/files/fact-sheets/thalasemmias-and-hemoglabinophaties/(1) NSRC-PSU-FS-63_Rev0-1.pdf' },
        { title: 'Alpha Thalassemia Trait / Minor', file: '/files/fact-sheets/thalasemmias-and-hemoglabinophaties/(2) NSRC-PSU-FS-45_Rev0-1.pdf' }
      ],
      parentsEnglish: [
        { title: 'Thalassemias and hemoglobinopathies', file: '/files/fact-sheets/thalasemmias-and-hemoglabinophaties/(A) NSRC-PSU-FS-02_Rev0_Thalassemias-Hemoglobinopathies.pdf' }
      ],
      parentsFilipino: [
        { title: 'Thalassemia Trait/Minor', file: '/files/fact-sheets/thalasemmias-and-hemoglabinophaties/(a) NSRC-PSU-FS-64_Rev0-1.pdf' }
      ]
    }
  },
  {
    id: 'urea-cycle',
    name: 'Urea Cycle Defects',
    description: 'Information about urea cycle disorders',
    categories: {
      doctors: [
        { title: 'Argininosuccinic Aciduria', file: '/files/fact-sheets/urea-cycle-defects/(1) NSRC-INT-052Rev0-ASA.pdf' },
        { title: 'For UCDs: Citrullinemia Type 1', file: '/files/fact-sheets/urea-cycle-defects/(2) NSRC-INT-053-Rev0-CIT.pdf' }
      ],
      parentsEnglish: [
        { title: 'Urea Cycle Defects', file: '/files/fact-sheets/urea-cycle-defects/(A) NSRC-PSU-FS-07_Rev0_UCD.pdf' }
      ],
      parentsFilipino: [
        { title: 'Urea Cycle Defects', file: '/files/fact-sheets/urea-cycle-defects/(a) NSRC-PSU-FS-43_Rev0_Fil-UCD.pdf' }
      ]
    }
  },
  {
    id: 'others',
    name: 'Others',
    description: 'Other screening disorders',
    categories: {
      doctors: [
        { title: 'Biotinidase Deficiency', file: '/files/fact-sheets/others/(1) BTD-Doctors.pdf' },
        { title: 'Cystic Fibrosis', file: '/files/fact-sheets/others/(2) CF.pdf' },
        { title: 'Galactosemia', file: '/files/fact-sheets/others/(3) NSRC-INT-056Rev0-GAL.pdf' },
        { title: 'G6PD Deficiency', file: '/files/fact-sheets/others/(4) G6PD-for-Doctors-2024.pdf' }
      ],
      parentsEnglish: [
        { title: 'Biotinidase Deficiency', file: '/files/fact-sheets/others/(A) BTD-Parents-English.pdf' },
        { title: 'Galactosemia', file: '/files/fact-sheets/others/(B) GAL-Parents-English-Rev1.pdf' }
      ],
      parentsFilipino: [
        { title: 'Biotinidase Deficiency', file: '/files/fact-sheets/others/(C) BTD-Parents-Filipino.pdf' },
        { title: 'Galactosemia', file: '/files/fact-sheets/others/(D) GAL-Parents-Filipino-Rev1.pdf' }
      ]
    }
  }
];