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
});
