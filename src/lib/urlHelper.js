import url from 'url';

function getUrl(url, direct) {
  return `${ direct ? '/#' : '' }${ url }`;
}

export function getCollectionUrl(collectionName, direct) {
  return getUrl(`/collections/${ collectionName }`, direct);
}

export function getNewEntryUrl(collectionName, direct) {
  return getUrl(`/collections/${ collectionName }/entries/new`, direct);
}

export function addParams(urlString, params) {
  const parsedUrl = url.parse(urlString, true);
  parsedUrl.query = { ...parsedUrl.query, ...params };
  return url.format(parsedUrl);
}
