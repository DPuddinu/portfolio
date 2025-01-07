export function isCurrentPage(url: string, href: string) {
  if (href === '/') {
    return url === href;
  }
  return url.includes(href);
}
