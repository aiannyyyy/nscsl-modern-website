export interface Memorandum {
  id: string;
  memoId: string;
  title: string;
  file: string;
  year: number;
}

export const memorandumsData: Memorandum[] = [
  // 2025
  { id: '1', memoId: 'MEMO 2025-01-07-001', title: 'Membership Data Update 2025', file: '/files/2025/NSCSL - MEMO 2025-01-07-001 Membership Data Update 2025.pdf', year: 2025 },
  { id: '2', memoId: 'MEMO 2025-01-07-002', title: 'Protocol in Sending NBS Samples Using Accredited Couriers', file: '/files/2025/NSCSL - MEMO 2025-01-07-002 Protocol in Sending NBS Samples Using Accredited Couriers.pdf', year: 2025 },
  { id: '3', memoId: 'MEMO 2025-01-07-003', title: 'Filter Card Monitoring', file: '/files/2025/NSCSL - MEMO 2025-01-07-003 FILTER CARD MONITORING.docx', year: 2025 },
  { id: '4', memoId: 'MEMO 2025-01-24-004', title: 'Proper Collection of NBS Sample Quality Blood Spot Via Zoom', file: '/files/2025/NSCSL - MEMO 2025-01-24-004.pdf', year: 2025 },
  { id: '5', memoId: 'MEMO 2025-03-25-006', title: 'Holidays For The Month of April', file: '/files/2025/NSCSL - MEMO 2025-03-25-006 HOLIDAYS FOR THE MONTH OF APRIL.docx', year: 2025 },
  { id: '6', memoId: 'MEMO 2025-03-27-007', title: 'PNB Mobile Banking Transaction', file: '/files/2025/NSCSL - MEMO 2025-03-27-007 PNB MOBILE BANGKING TRANSACTION V2.docx', year: 2025 },
  { id: '7', memoId: 'MEMO 2025-01-13-001', title: 'Reiteration of Courier Reimbursement', file: '/files/2025/NSCSL MEMO 2025-01-13-001 - REITERATION ON COURIER REIMBURSEMENT.pdf', year: 2025 },
  
  // 2024
  { id: '8', memoId: 'MEMO 2024-01-04-001', title: 'Membership Data Update 2024', file: '/files/2024/NSCSL - MEMO 2024-01-04-001 Membership Data Update.pdf', year: 2024 },
  { id: '9', memoId: 'MEMO 2024-01-17-002', title: 'Protocol for Mixed Feeding', file: '/files/2024/NSCSL - MEMO 2024-01-17-002 - PROTOCOL FOR MIXED FEEDING (SOY OR TPN IN COMBINATION WITH BREAST OR LACTOSE FEEDING).pdf', year: 2024 },
  { id: '10', memoId: 'MEMO 2024-01-24-003', title: 'Chinese New Year', file: '/files/2024/NSCSL - MEMO 2024-01-24-003 CHINESE NEW YEAR.pdf', year: 2024 },
  
  // Add more as needed - I'll keep it shorter for now but you can add all
];

export const getYears = (): number[] => {
  const years = [...new Set(memorandumsData.map(m => m.year))];
  return years.sort((a, b) => b - a); // Sort descending
};

export const getMemosByYear = (year: number): Memorandum[] => {
  return memorandumsData.filter(m => m.year === year);
};

export const getRecentMemos = (count: number = 5): Memorandum[] => {
  return memorandumsData.slice(0, count);
};