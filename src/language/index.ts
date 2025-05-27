import i18n from "i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import en from "./locales.js/en";
import hi from "./locales.js/hi";

import { initReactI18next } from "react-i18next";

const locales = {
  en: { translation: en },
  hi: { translation: hi },
};

export const setLocale = async (locale = "en") => {
  await i18n.changeLanguage(locale);
};

// ✅ language detector for persist support
const languageDetector = {
  type: "languageDetector",
  async: true,
  detect: async (callback: any) => {
    console.log("🌐 Detecting language...");

    const storedLanguage = await AsyncStorage.getItem("user-language");
    console.log("🌐 Detected language:", storedLanguage);
    callback("en");
  },
  init: async () => {
    console.log("✅ Language detector initialized");
  },
  cacheUserLanguage: async (lng: any) => {
    console.log("💾 Caching language:", lng);
    await AsyncStorage.setItem("user-language", lng);
  },
};

const initData = () => ({
  compatibilityJSON: "v3",
  fallbackLng: ["en", "hi"], // Fallback languages
  debug: false,
  interpolation: {
    escapeValue: false, // React already does escaping
  },
  resources: locales,
});

i18n.use(languageDetector).use(initReactI18next).init(initData());

export default i18n;
