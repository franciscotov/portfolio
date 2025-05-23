import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-xhr-backend";

if (!i18n.isInitialized) {
  i18n.use(LanguageDetector).use(Backend).use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    keySeparator: ".",
    defaultNS: "translations",
    initImmediate: false,
  });
}

export default i18n;
