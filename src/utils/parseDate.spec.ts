import { parseDate } from './parseDate';

describe('parseDate', () => {
  describe('specific date', () => {
    it('returns releaseDate object with date and specific dateString', () => {
      const releaseDate = {
        dateType: 'specific',
        dateString: '2023-10-07T17:24:34+0000',
      };
      const result = parseDate(releaseDate);
      expect(typeof result.date).toBe('object');
      expect(result.displayString).toEqual('07/10/2023');
    });
  });
});
