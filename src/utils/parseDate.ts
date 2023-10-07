import spacetime from 'spacetime';

export const parseDate = (releaseDate) => {
  const dateObj = spacetime(releaseDate.dateString);

  switch (releaseDate.dateType) {
    case 'specific':
      return {
        dateString: dateObj.format('iso'),
        displayString: dateObj.format('numeric-uk'),
      };
    case 'quarter':
      return {
        dateString: dateObj.endOf('quarter').format('iso'),
        displayString: dateObj.format('{quarter} {year}'),
      };
    case 'year':
      return {
        dateString: dateObj.endOf('year').format('iso'),
        displayString: dateObj.format('{year}'),
      };
    default:
      return {
        dateString: spacetime('0793-06-08T12:00:00.000Z').format('iso'),
        displayString: 'Invalid date type',
      };
  }
};
