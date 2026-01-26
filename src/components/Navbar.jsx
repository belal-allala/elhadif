import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Languages } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../contexts/LanguageContext'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
    const { t } = useTranslation()
    const { currentLanguage, changeLanguage } = useLanguage()

    const navLinks = [
        { name: t('nav.home'), to: '/' },
        { name: t('nav.about'), to: '/about' },
        { name: t('nav.axes'), to: '/axes' },
        { name: t('nav.achievements'), to: '/achievements' },
    ]

    const handleLanguageChange = (lang) => {
        changeLanguage(lang)
        setIsLangMenuOpen(false)
    }

    const getLanguageDisplayName = (lang) => {
        switch (lang) {
            case 'ar':
                return 'العربية'
            case 'fr':
                return 'Français'
            case 'en':
                return 'English'
            default:
                return 'العربية'
        }
    }

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo et nom de l'association (à droite en RTL) */}
                    <div className="flex-shrink-0 flex items-center gap-2 md:gap-3">
                        <img
                            src="/doc/logo.png"
                            alt="شعار جمعية الهادف"
                            className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 object-contain"
                        />
                        <h1 className="text-sm sm:text-lg md:text-2xl font-bold text-secondary max-w-[200px] sm:max-w-none leading-tight">
                            {t('common.associationName')}
                        </h1>
                    </div>

                    {/* Navigation desktop (à gauche en RTL) */}
                    <div className="hidden md:flex items-center gap-4">
                        <div className="flex gap-6">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `text-gray-700 hover:text-primary transition-colors duration-200 font-medium ${isActive ? 'text-primary border-b-2 border-primary' : ''
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>

                        {/* Sélecteur de langue */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
                                aria-label="Changer la langue"
                            >
                                <Languages className="w-5 h-5 text-gray-700" />
                                <span className="font-medium text-gray-700">
                                    {getLanguageDisplayName(currentLanguage)}
                                </span>
                            </button>
                            
                            {isLangMenuOpen && (
                                <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[150px] z-50">
                                    <button
                                        onClick={() => handleLanguageChange('ar')}
                                        className={`w-full text-right px-4 py-2 hover:bg-gray-100 transition-colors flex items-center justify-between ${
                                            currentLanguage === 'ar' ? 'bg-primary/10 text-primary font-semibold' : 'text-gray-700'
                                        }`}
                                    >
                                        <span>العربية</span>
                                        {currentLanguage === 'ar' && <span className="text-primary">✓</span>}
                                    </button>
                                    <button
                                        onClick={() => handleLanguageChange('fr')}
                                        className={`w-full text-right px-4 py-2 hover:bg-gray-100 transition-colors flex items-center justify-between ${
                                            currentLanguage === 'fr' ? 'bg-primary/10 text-primary font-semibold' : 'text-gray-700'
                                        }`}
                                    >
                                        <span>Français</span>
                                        {currentLanguage === 'fr' && <span className="text-primary">✓</span>}
                                    </button>
                                    <button
                                        onClick={() => handleLanguageChange('en')}
                                        className={`w-full text-right px-4 py-2 hover:bg-gray-100 transition-colors flex items-center justify-between ${
                                            currentLanguage === 'en' ? 'bg-primary/10 text-primary font-semibold' : 'text-gray-700'
                                        }`}
                                    >
                                        <span>English</span>
                                        {currentLanguage === 'en' && <span className="text-primary">✓</span>}
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Bouton Don */}
                        <NavLink
                            to="/contact"
                            className="bg-accent hover:bg-accent-dark text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            {t('common.donateNow')}
                        </NavLink>
                    </div>

                    {/* Bouton menu mobile */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6 text-gray-700" />
                        ) : (
                            <Menu className="h-6 w-6 text-gray-700" />
                        )}
                    </button>
                </div>
            </div>

            {/* Menu mobile */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
                    <div className="px-4 py-4 space-y-3">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.to}
                                className={({ isActive }) =>
                                    `block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors font-medium ${isActive ? 'bg-primary/10 text-primary' : ''
                                    }`
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        {/* Sélecteur de langue mobile */}
                        <div className="px-4 py-2 border-t border-gray-200">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-gray-700">
                                    {getLanguageDisplayName(currentLanguage)}
                                </span>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => {
                                        handleLanguageChange('ar')
                                        setIsMenuOpen(false)
                                    }}
                                    className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                                        currentLanguage === 'ar'
                                            ? 'bg-primary text-white font-semibold'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    العربية
                                </button>
                                <button
                                    onClick={() => {
                                        handleLanguageChange('fr')
                                        setIsMenuOpen(false)
                                    }}
                                    className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                                        currentLanguage === 'fr'
                                            ? 'bg-primary text-white font-semibold'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    Français
                                </button>
                                <button
                                    onClick={() => {
                                        handleLanguageChange('en')
                                        setIsMenuOpen(false)
                                    }}
                                    className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                                        currentLanguage === 'en'
                                            ? 'bg-primary text-white font-semibold'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    English
                                </button>
                            </div>
                        </div>
                        
                        <NavLink
                            to="/contact"
                            className="block text-center bg-accent hover:bg-accent-dark text-white px-6 py-2.5 rounded-lg font-semibold transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t('common.donateNow')}
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
