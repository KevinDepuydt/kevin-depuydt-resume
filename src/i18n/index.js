import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';


import enTranslations from './translations/en.json';
import frTranslations from './translations/fr.json';

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    debug: true,
    load: 'languageOnly',
    resources: {
      en: {
        translation: enTranslations,
      },
      fr: {
        translation: frTranslations,
      },
    },
    whitelist: ['en', 'fr'],
    fallbackLng: 'en',
    react: {
      wait: true,
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
