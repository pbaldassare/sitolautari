import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.lautari.it',
  // Vecchi URL WordPress -> nuove pagine, per non perdere posizionamento e link esistenti
  redirects: {
    '/hai-bisogno-di-aiuto': '/chiedi-aiuto',
    '/come-accedere': '/chiedi-aiuto',
    '/vita-in-comunita/per-i-famigliari': '/chiedi-aiuto#famiglie',
    '/vita-in-comunita': '/percorso#vita',
    '/vita-in-comunita/per-gli-ospiti': '/percorso#regole',
    '/vita-in-comunita/reinserimento': '/percorso#reinserimento',
    '/team': '/chi-siamo#team',
    '/amministrazione-trasparente': '/chi-siamo#trasparenza',
    '/progetto-drug-zero': '/progetti#drug-zero',
    '/progetto-salvagente': '/progetti#salvagente',
    '/progetto-grest': '/progetti#grest',
    '/progetto-prevenzione-e-informazione': '/progetti#prevenzione',
    '/sedi-e-contatti': '/sedi',
    '/comunita-tossicodipendenti-como': '/sedi#como',
    '/comunita-tossicodipendenti-firenze': '/sedi#firenze',
    '/comunita-tossicodipendenti-pordenone': '/sedi#pordenone',
    '/comunita-tossicodipendenti-roma': '/sedi#roma',
    '/dona-ora': '/sostienici',
    '/cookie-policy': '/privacy#cookie',
  },
});
