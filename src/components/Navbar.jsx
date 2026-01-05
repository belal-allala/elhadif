import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinks = [
        { name: 'الرئيسية', to: '/' },
        { name: 'من نحن', to: '/about' },
        { name: 'محاورنا', to: '/axes' },
        { name: 'إنجازاتنا', to: '/achievements' },
    ]

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
                            جمعية الهادف للتنمية والتعاون
                        </h1>
                    </div>

                    {/* Navigation desktop (à gauche en RTL) */}
                    <div className="hidden md:flex items-center gap-8">
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

                        {/* Bouton Don */}
                        <NavLink
                            to="/contact"
                            className="bg-accent hover:bg-accent-dark text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            تبرع الآن
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
                        <NavLink
                            to="/contact"
                            className="block text-center bg-accent hover:bg-accent-dark text-white px-6 py-2.5 rounded-lg font-semibold transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            تبرع الآن
                        </NavLink>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
