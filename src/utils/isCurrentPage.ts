export function isCurrentPage(url: string, href: string) {
  return url.includes(href);
}
