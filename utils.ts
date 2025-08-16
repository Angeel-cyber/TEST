import type { Experience } from './types';

export const calculateYearsOfExperience = (experience: Experience[]): number => {
  if (!experience || experience.length === 0) {
    return 0;
  }

  const monthMap: { [key: string]: number } = {
    // French Full
    'janvier': 0, 'février': 1, 'mars': 2, 'avril': 3, 'mai': 4, 'juin': 5,
    'juillet': 6, 'août': 7, 'septembre': 8, 'octobre': 9, 'novembre': 10, 'décembre': 11,
    // French Short
    'janv': 0, 'févr': 1, 'avr': 3, 'juil': 6, 'sept': 8, 'déc': 11,
    // English Full
    'january': 0, 'february': 1, 'march': 2, 'april': 3, 'may': 4, 'june': 5,
    'july': 6, 'august': 7, 'september': 8, 'october': 9, 'november': 10, 'december': 11,
    // English Short (3-letter)
    'jan': 0, 'feb': 1, 'mar': 2, 'apr': 3, 'jun': 5, 'jul': 6, 'aug': 7, 'sep': 8, 'oct': 9, 'nov': 10, 'dec': 11,
  };


  const startDates = experience
    .map(exp => {
      // Clean the date string: lowercase, remove "depuis", remove periods.
      const dateStr = exp.startDate?.toLowerCase().replace('depuis ', '').replace(/\./g, '');
      if (!dateStr) return null;
      
      const parts = dateStr.split(' ');
      if (parts.length !== 2) return null;

      const monthStr = parts[0];
      const year = parseInt(parts[1], 10);
      const month = monthMap[monthStr];

      if (isNaN(year) || month === undefined) return null;

      return new Date(year, month);
    })
    .filter((date): date is Date => date !== null);

  if (startDates.length === 0) {
    return 0;
  }

  const earliestStartDate = new Date(Math.min(...startDates.map(d => d.getTime())));
  const today = new Date();
  
  let years = today.getFullYear() - earliestStartDate.getFullYear();
  const m = today.getMonth() - earliestStartDate.getMonth();
  
  if (m < 0 || (m === 0 && today.getDate() < earliestStartDate.getDate())) {
    years--;
  }

  return Math.max(0, years);
};
