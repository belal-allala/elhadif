import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import arTranslations from './locales/ar.json'
import frTranslations from './locales/fr.json'
import enTranslations from './locales/en.json'

// Récupérer la langue sauvegardée ou utiliser l'arabe par défaut
const savedLanguage = localStorage.getItem('language') || 'ar'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: {
        translation: arTranslations
      },
      fr: {
        translation: frTranslations
      },
      en: {
        translation: enTranslations
      }
    },
    lng: savedLanguage, // langue par défaut
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false // React échappe déjà les valeurs
    }
  })

export default i18n
