export function truncate(value: string, limit = 25, completeWords = true, ellipsis = '...') {
  if (completeWords) {
    limit = value.substr(0, limit).lastIndexOf(' ');
  }
  return value.length > limit ? value.substr(0, limit) + ellipsis : value;

}