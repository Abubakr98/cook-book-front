import { getDate } from '../utils/getNoramlDate';

test('Date normalizing', () => {
  expect(getDate(new Date('2020-07-15T05:33:25.558Z'))).toBe('July 15, 2020, 8:33 AM');
});
