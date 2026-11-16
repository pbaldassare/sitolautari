// Unica fonte per contatti e sedi: usata da header, footer, pagine e dati strutturati.
export const org = {
  name: 'Comunità Lautari',
  legalName: 'Cooperativa di Solidarietà Lautari ONLUS',
  phone: '+39 030 9918700',
  phoneHref: 'tel:+390309918700',
  email: 'info@lautari.it',
  cf: '01702160985',
  rea: 'REA BS n. 342243',
  albo: 'Albo Nazionale Società Cooperative n. A107298',
  iban: 'IT67U0511654461000000026280',
  ccp: '000012850251',
  // PayPal Business della cooperativa (se vuoti, i pulsanti mostrano "in attivazione"):
  // - paypalClientId: Client ID "Live" dell'app REST creata su developer.paypal.com → form carta e PayPal dentro la pagina (donazioni singole)
  // - paypal: email dell'account → donazioni mensili (abbonamento su paypal.com)
  paypalClientId: '',
  paypal: '',
  facebook: 'https://www.facebook.com/comunita.lautari/',
  founded: 1992,
};

export type Sede = {
  id: string;
  city: string;
  label: string;
  street: string;
  locality: string;
  postalCode: string;
  region: string;
  phone: string;
  fax: string;
  email: string;
  img: string;
  pos: [number, number]; // lat, lng (geocodificate con Google)
};

export const sedi: Sede[] = [
  { id: 'brescia', city: 'Pozzolengo', label: 'Sede centrale · Brescia', street: 'Via Monte Ingrana, 2', locality: 'Pozzolengo', postalCode: '25010', region: 'BS', phone: '+39 030 9918700', fax: '+39 030 918162', email: 'info@lautari.it', img: '/img/sede-lautari-brescia-02.webp', pos: [45.409983, 10.618107] },
  { id: 'como', city: 'Veniano', label: 'Unità locale · Como', street: 'Via de Gasperi, 14', locality: 'Veniano', postalCode: '22070', region: 'CO', phone: '+39 031 931141', fax: '+39 031 933404', email: 'como@lautari.it', img: '/img/sede-como-lautari.webp', pos: [45.722103, 8.985175] },
  { id: 'firenze', city: 'San Casciano', label: 'Unità locale · Firenze', street: 'Via Cassia per Siena, 50 – Loc. Bargino', locality: 'San Casciano in Val di Pesa', postalCode: '50026', region: 'FI', phone: '+39 055 8249278', fax: '+39 055 8249355', email: 'firenze@lautari.it', img: '/img/san-casciano-firenze.webp', pos: [43.616276, 11.190154] },
  { id: 'pordenone', city: 'San Quirino', label: 'Unità locale · Pordenone', street: 'Via Aprilis, 19', locality: 'San Quirino', postalCode: '33080', region: 'PN', phone: '+39 0434 919558', fax: '+39 0434 919560', email: 'pordenone@lautari.it', img: '/img/san-quirino-pordenone.webp', pos: [46.016344, 12.678970] },
  { id: 'roma', city: 'Ardea', label: 'Unità locale · Roma', street: 'Viale Piave, 59 – Loc. Tor San Lorenzo', locality: 'Ardea', postalCode: '00040', region: 'RM', phone: '+39 06 91010933', fax: '+39 06 9102417', email: 'roma@lautari.it', img: '/img/sede-roma.webp', pos: [41.571685, 12.541239] },
];

export const tel = (n: string) => 'tel:' + n.replace(/[^+\d]/g, '');
export const mapsUrl = (s: Sede) =>
  'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(`${s.street}, ${s.postalCode} ${s.locality} ${s.region}`);

export const nav = [
  { href: '/chiedi-aiuto', label: 'Chiedi aiuto' },
  { href: '/percorso', label: 'Il percorso' },
  { href: '/storie', label: 'Storie' },
  { href: '/chi-siamo', label: 'Chi siamo' },
  { href: '/sedi', label: 'Sedi' },
  { href: '/faq', label: 'FAQ' },
];

// Chiave Google Maps JavaScript API. Finisce comunque nell'HTML pubblico:
// la protezione vera è la restrizione per referrer HTTP nella Google Cloud Console.
export const mapsKey = 'AIzaSyA76iVcQpSnl76_G6bJVnEeOUmWVd7278I';
