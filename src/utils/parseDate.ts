import spacetime from 'spacetime';

export const parseDate = (releaseDate) => {
  switch (releaseDate.dateType) {
    case 'specific':
      const sDateObj = spacetime(releaseDate.dateString);
      return {
        date: sDateObj,
        displayString: sDateObj.format('numeric-uk'),
      };
    case 'quarter':
      const qDateObj = spacetime(releaseDate.dateString);
      return {
        date: qDateObj,
        displayString: qDateObj.format('{quarter} {year}'),
      };
    default:
      return {
        date: spacetime.min(),
        displayString: 'Invalid date type',
      };
  }
};
