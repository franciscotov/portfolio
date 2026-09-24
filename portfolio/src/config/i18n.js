import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslations from "../locales/en/translations.json";
import esTranslations from "../locales/es/translations.json";

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      lng: "en",
      fallbackLng: "en",
      keySeparator: ".",
      defaultNS: "translations",
      resources: {
        en: {
          translations: enTranslations,
        },
        es: {
          translations: esTranslations,
        },
      },
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;
