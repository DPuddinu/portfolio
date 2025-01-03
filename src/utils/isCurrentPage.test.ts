import { expect, test } from 'bun:test';
import { isCurrentPage } from './isCurrentPage';

test('is current page', () => {
  const currentUrl = '/blog/1234'
  const isCurrent = isCurrentPage(currentUrl, '/blog')
  expect(isCurrent).toBeTrue();
});
