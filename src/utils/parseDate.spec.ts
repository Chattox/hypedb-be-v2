import { parseDate } from './parseDate';

describe('parseDate', () => {
  describe('specific date', () => {
    it('returns releaseDate object with dateString and specific displayString', () => {
      const releaseDate = {
        dateType: 'specific',
        dateString: '2023-10-07T17:24:34.000Z',
      };
      const result = parseDate(releaseDate);
      expect(result.dateString).toBe('2023-10-07T17:24:34.000Z');
      expect(result.displayString).toBe('07/10/2023');
    });
  });
  describe('quarter date', () => {
    it('returns releaseDate obj with dateString at the end of the quarter and quarter displayString', () => {
      const releaseDate = {
        dateType: 'quarter',
        dateString: '2023-10-07T17:24:34.000Z',
      };
      const result = parseDate(releaseDate);
      expect(result.dateString).toBe('2023-12-31T23:59:59.999Z');
      expect(result.displayString).toBe('Q4 2023');
    });
  });
  describe('year date', () => {
    it('returns releaseDate obj with dateString at the end of the year and year displayString', () => {
      const releaseDate = {
        dateType: 'year',
        dateString: '2023-10-07T17:24:34.000Z',
      };
      const result = parseDate(releaseDate);
      expect(result.dateString).toBe('2023-12-31T23:59:59.999Z');
      expect(result.displayString).toBe('2023');
    });
  });
  describe('custom date', () => {
    it('returns releaseDate obj with dateString from the year 3000 and custom displayString', () => {
      const releaseDate = {
        dateType: 'custom',
        dateString: 'Coming soon',
      };
      const result = parseDate(releaseDate);
      expect(result.dateString).toBe('3000-01-01T12:00:00.000Z');
      expect(result.displayString).toBe('Coming soon');
    });
  });
});
