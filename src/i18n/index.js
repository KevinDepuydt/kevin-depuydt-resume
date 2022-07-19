import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';


import enTranslations from './translations/en.json';
import frTranslations from './translations/en.json';

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
      en: {
        translations: enTranslations,
      },
      fr: {
        translations: frTranslations,
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
