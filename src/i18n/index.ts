import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fr from './translations/fr.json';
import en from './translations/en.json';
import ptBR from './translations/ptBR.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: en,
    fr: fr,
    ptBR: ptBR,
  },
});

export default i18n;
