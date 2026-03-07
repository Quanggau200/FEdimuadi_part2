import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import vi from "./vn.json"
import en from "./en.json";

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    debug: true,
    fallbackLng: "vi",
    supportedLngs: ["vi", "en"],
    interpolation: {
      escapeValue: false,
    },
    resources: {
      vi: {
        translation: vi,
      },
      en: {
        translation: en,
      },
    },
  });

export default i18n; 