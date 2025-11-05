import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '@i18n/locales/en.json';
import ar from '@i18n/locales/ar.json';
import fr from '@i18n/locales/fr.json';

export const defaultLanguage = 'en';
export const supportedLanguages = ['en', 'ar', 'fr'];

const resources = {
    en: { translation: en },
    ar: { translation: ar },
    fr: { translation: fr },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: defaultLanguage,
        supportedLngs: supportedLanguages,

        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage'],
        },

        interpolation: {
            escapeValue: false,
        },

        react: {
            useSuspense: false,
        },
    });

export default i18n;
