import { parseDate } from './parseDate';

describe('parseDate', () => {
  describe('specific date', () => {
    it('returns releaseDate object with dateObj and specific displayString', () => {
      const releaseDate = {
        dateType: 'specific',
        dateString: '2023-10-07T17:24:34+0000',
      };
      const result = parseDate(releaseDate);
      expect(typeof result.date).toBe('object');
      expect(result.displayString).toEqual('07/10/2023');
    });
  });
  describe('quarter date', () => {
    it('returns releaseDate object with dateObj and quarter displayString', () => {
      const releaseDate = {
        dateType: 'quarter',
        dateString: '2023-10-07T17:24:34+0000',
      };
      const result = parseDate(releaseDate);
      expect(typeof result.date).toBe('object');
      expect(result.displayString).toEqual('Q4 2023');
    });
  });
  describe('year date', () => {
    it('returns releaseDate object with dateObj and year displayString', () => {
      const releaseDate = {
        dateType: 'year',
        dateString: '2023-10-07T17:24:34+0000',
      };
      const result = parseDate(releaseDate);
      expect(typeof result.date).toBe('object');
      expect(result.displayString).toEqual('2023');
    });
  });
  describe('custom date', () => {
    it('returns releaseDate object with dateObj and custom displayString', () => {
      const releaseDate = {
        dateType: 'custom',
        dateString: 'Coming soon',
      };
      const result = parseDate(releaseDate);
      expect(typeof result.date).toBe('object');
      expect(result.displayString).toEqual('Coming soon');
    });
  });
});
