import spacetime from 'spacetime';

export const parseDate = (releaseDate) => {
  switch (releaseDate.dateType) {
    case 'specific':
      const dateObj = spacetime(releaseDate.dateString);
      return {
        date: dateObj,
        displayString: dateObj.format('numeric-uk'),
      };
    default:
      return {
        date: spacetime.min(),
        displayString: 'Invalid date type',
      };
  }
};
