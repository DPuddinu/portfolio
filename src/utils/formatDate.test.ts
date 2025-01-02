import { expect, test } from 'bun:test';
import { formatDate } from './formatDate';

test('formatDate', () => {
  const date = new Date('2023-10-01');
  const result = formatDate(date);
  expect(result).toBe('October 1, 2023');
});
