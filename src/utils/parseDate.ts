import spacetime from 'spacetime';

export const parseDate = (releaseDate) => {
  const dateObj = spacetime(releaseDate.dateString);

  switch (releaseDate.dateType) {
    case 'specific':
      return {
        dateString: dateObj.format('iso'),
        displayString: dateObj.format('numeric-uk'),
        dateType: releaseDate.dateType,
      };
    case 'quarter':
      return {
        dateString: dateObj.endOf('quarter').format('iso'),
        displayString: dateObj.format('{quarter} {year}'),
        dateType: releaseDate.dateType,
      };
    case 'year':
      return {
        dateString: dateObj.endOf('year').format('iso'),
        displayString: dateObj.format('{year}'),
        dateType: releaseDate.dateType,
      };
    case 'custom':
      return {
        dateString: spacetime('3000-01-01T12:00:00.000Z').format('iso'),
        displayString: releaseDate.dateString,
        dateType: releaseDate.dateType,
      };
    default:
      return {
        dateString: spacetime('0793-06-08T12:00:00.000Z').format('iso'),
        displayString: 'Invalid date type',
        dateType: releaseDate.dateType,
      };
  }
};
