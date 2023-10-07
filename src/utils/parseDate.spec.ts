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
});
