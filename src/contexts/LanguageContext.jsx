import { createContext, useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation()
  const savedLang = typeof window !== 'undefined' ? localStorage.getItem('language') || 'ar' : 'ar'
  const [currentLanguage, setCurrentLanguage] = useState(savedLang)

  useEffect(() => {
    // Initialiser la langue au chargement
    const initLanguage = () => {
      const lang = localStorage.getItem('language') || 'ar'
      i18n.changeLanguage(lang)
      setCurrentLanguage(lang)
      
      // Mettre à jour les attributs HTML
      const html = document.documentElement
      html.setAttribute('lang', lang)
      html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
      
      // Mettre à jour le body pour la direction
      document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
    }
    
    initLanguage()
  }, []) // Seulement au montage

  useEffect(() => {
    // Mettre à jour quand la langue change
    if (currentLanguage) {
      i18n.changeLanguage(currentLanguage)
      localStorage.setItem('language', currentLanguage)
      
      // Mettre à jour les attributs HTML
      const html = document.documentElement
      html.setAttribute('lang', currentLanguage)
      html.setAttribute('dir', currentLanguage === 'ar' ? 'rtl' : 'ltr')
      
      // Mettre à jour le body pour la direction
      document.body.setAttribute('dir', currentLanguage === 'ar' ? 'rtl' : 'ltr')
    }
  }, [currentLanguage, i18n])

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang)
  }

  const isRTL = currentLanguage === 'ar'

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        changeLanguage,
        isRTL
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

