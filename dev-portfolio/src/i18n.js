import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      // translation file path
      loadPath: "/assets/i18n/{{ns}}/{{lng}}.json ",
    },
    fallbackLng: "en",
    debug: false,
    ns: [
      "about,main,techstack,contactus,projects,header",
    ],
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
      react: {
        wait: true,
      },
    },
  });

export default i18n;
