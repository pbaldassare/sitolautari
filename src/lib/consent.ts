// Consenso cookie: un solo cookie tecnico, "lautari_consent", con le categorie accettate.
// Durata 6 mesi, come indicato dalle linee guida del Garante (10 giugno 2021) prima di richiedere di nuovo.
export type Consent = { media: boolean };

const NAME = 'lautari_consent';

export function getConsent(): Consent | null {
  const m = document.cookie.match(new RegExp(`(?:^|; )${NAME}=([^;]*)`));
  if (!m) return null;
  return { media: decodeURIComponent(m[1]).includes('media') };
}

export function setConsent(c: Consent) {
  const v = c.media ? 'necessary,media' : 'necessary';
  const secure = location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${NAME}=${v}; Max-Age=${60 * 60 * 24 * 182}; Path=/; SameSite=Lax${secure}`;
  document.dispatchEvent(new CustomEvent('consent', { detail: c }));
}
