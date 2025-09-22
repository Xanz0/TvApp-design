import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uzTranslation from '../public/locales/uz/translation.json';
import ruTranslation from '../public/locales/ru/translation.json';
import enTranslation from '../public/locales/en/translation.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            uz: { translation: uzTranslation },
            ru: { translation: ruTranslation },
            en: { translation: enTranslation }
        },
        lng: 'uz',
        fallbackLng: 'uz',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;