const buildParams = (ps: any) =>
  Object.keys(ps)
    .map((k) => `${k}=${ps[k]}`)
    .join('&');

const buildUrl = (args: Array<string | number>, params: any) =>
  'https://api.jikan.moe/v3' +
  `/${args.filter(Boolean).join('/')}` +
  `?${buildParams(params)}`;

const requestJikan = (args: Array<string | number>, params = {}) =>
  fetch(buildUrl(args, params), { redirect: 'follow' }).then((res: any) => res.json());

export default { request: requestJikan };
