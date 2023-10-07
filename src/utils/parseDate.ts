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
  }
};
