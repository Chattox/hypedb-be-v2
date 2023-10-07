import spacetime from 'spacetime';

export const parseDate = (releaseDate) => {
  switch (releaseDate.dateType) {
    case 'specific':
      const sDateObj = spacetime(releaseDate.dateString);
      return {
        dateString: sDateObj.format('iso'),
        displayString: sDateObj.format('numeric-uk'),
      };
  }
};
