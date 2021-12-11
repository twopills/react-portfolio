enum EMod {
  NOT_SET,
  LIGHT,
  DARK,
}
// eslint-disable-next-line
export function getCookies(): number {
  if (document.cookie && document.cookie.includes('theme')) {
    const value = document.cookie.split(';')[0].replace('theme=', '');
    return value.includes('light') ? EMod.LIGHT : EMod.DARK;
  } else return EMod.NOT_SET;
}

export class CookieManager {}
