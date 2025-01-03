export function isCurrentPage(url: string, href: string) {
  if (href === url) {
    return true;
  }
  return url.split('/').filter(Boolean).includes(href.split('/')[1]);
}
