import { motion } from 'framer-motion'
import { Users, Heart, Calendar, Target, Users2, Sparkles, MapPin, Download } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function Home() {
    const { t } = useTranslation()
    
    const stats = [
        {
            icon: Users,
            number: t('home.stat1Number'),
            label: t('home.stat1Label'),
            color: 'bg-green-400',
            textColor: 'text-green-600',
        },
        {
            icon: Heart,
            number: t('home.stat2Number'),
            label: t('home.stat2Label'),
            color: 'bg-yellow-300',
            textColor: 'text-yellow-600',
        },
        {
            icon: Calendar,
            number: t('home.stat3Number'),
            label: t('home.stat3Label'),
            color: 'bg-blue-400',
            textColor: 'text-blue-600',
        },
    ]

    const axes = [
        {
            title: t('home.axis1'),
            description: t('home.axis1Desc'),
            color: 'bg-blue-100',
            borderColor: 'border-blue-400',
            icon: Target,
        },
        {
            title: t('home.axis2'),
            description: t('home.axis2Desc'),
            color: 'bg-green-100',
            borderColor: 'border-green-400',
            icon: Sparkles,
        },
        {
            title: t('home.axis3'),
            description: t('home.axis3Desc'),
            color: 'bg-cyan-100',
            borderColor: 'border-cyan-400',
            icon: Users2,
        },
        {
            title: t('home.axis4'),
            description: t('home.axis4Desc'),
            color: 'bg-purple-100',
            borderColor: 'border-purple-400',
            icon: MapPin,
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    }

    // Fonction pour télécharger le PDF avec gestion des caractères arabes
    const handleDownloadPDF = async () => {
        try {
            const pdfPath = '/doc/الدليل التعريفي.pdf'
            const fileName = 'الدليل التعريفي.pdf'
            
            // Télécharger le fichier
            const response = await fetch(pdfPath)
            if (!response.ok) {
                throw new Error('Erreur lors du téléchargement du fichier')
            }
            
            // Créer un blob
            const blob = await response.blob()
            
            // Créer un lien temporaire pour le téléchargement
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.download = fileName // Nom du fichier avec caractères arabes
            link.style.display = 'none'
            
            // Ajouter au DOM, cliquer, puis supprimer
            document.body.appendChild(link)
            link.click()
            
            // Nettoyer
            document.body.removeChild(link)
            window.URL.revokeObjectURL(url)
        } catch (error) {
            console.error('Erreur lors du téléchargement:', error)
            // Fallback : ouvrir dans un nouvel onglet si le téléchargement échoue
            window.open('/doc/الدليل التعريفي.pdf', '_blank')
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
            {/* Motifs géométriques en arrière-plan */}
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute top-[5vh] right-[5vw] w-[clamp(8rem,15vw,16rem)] h-[clamp(8rem,15vw,16rem)] border-[clamp(2px,0.3vw,4px)] border-primary rotate-12 rounded-3xl"></div>
                <div className="absolute bottom-[10vh] left-[5vw] w-[clamp(6rem,12vw,12rem)] h-[clamp(6rem,12vw,12rem)] border-[clamp(2px,0.3vw,4px)] border-accent rotate-45 rounded-3xl"></div>
                <div className="absolute top-1/2 right-1/3 w-[clamp(4rem,8vw,8rem)] h-[clamp(4rem,8vw,8rem)] border-[clamp(2px,0.3vw,4px)] border-secondary rotate-6 rounded-2xl"></div>

                {/* Hexagones */}
                <svg className="absolute top-[2.5vh] left-[25%] w-[clamp(3rem,6vw,6rem)] h-[clamp(3rem,6vw,6rem)] text-primary" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                    <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="none" stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                </svg>
                <svg className="absolute bottom-[5vh] right-[25%] w-[clamp(4rem,8vw,8rem)] h-[clamp(4rem,8vw,8rem)] text-accent" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                    <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="none" stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                </svg>
                <svg className="absolute top-1/3 left-[2.5vw] w-[clamp(2.5rem,5vw,5rem)] h-[clamp(2.5rem,5vw,5rem)] text-secondary" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                    <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="none" stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                </svg>
            </div>

            <div className="relative z-10">
                {/* Hero Section avec logo */}
                <section className="py-12 md:py-20 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-7xl mx-auto text-center"
                    >
                        <motion.img
                            src="/doc/logo.png"
                            alt="شعار جمعية الهادف"
                            className="h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 mx-auto mb-6 md:mb-8 object-contain"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                        />
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-secondary mb-3 md:mb-4">
                            {t('home.title')}
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-primary font-semibold mb-6 md:mb-8">
                            {t('home.subtitle')}
                        </p>
                        
                        {/* Bouton de téléchargement du PDF */}
                        <motion.button
                            onClick={handleDownloadPDF}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary-dark text-white px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform"
                        >
                            <Download className="w-5 h-5 md:w-6 md:h-6" />
                            <span>{t('common.downloadGuide')}</span>
                        </motion.button>
                    </motion.div>
                </section>

                {/* Section Identité et Fondation */}
                <section className="py-12 md:py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-12 border-t-4 border-accent"
                        >
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
                                <span className="bg-accent text-white px-5 py-2 md:px-6 md:py-3 rounded-full text-lg md:text-xl font-bold flex-shrink-0 latin-numbers">1</span>
                                <h2 className="text-2xl md:text-4xl font-bold text-secondary text-center md:text-right">{t('home.section1Title')}</h2>
                            </div>
                            <p className="text-base md:text-xl text-gray-700 leading-relaxed text-right">
                                {t('home.section1Content')}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Section Axes Principaux */}
                <section className="py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <span className="bg-accent text-white px-6 py-3 rounded-full text-xl font-bold latin-numbers">2</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-secondary">{t('home.section2Title')}</h2>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        >
                            {axes.map((axis, index) => {
                                const Icon = axis.icon
                                return (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.03, y: -5 }}
                                        className={`${axis.color} rounded-3xl p-8 border-4 ${axis.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300`}
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`p-3 rounded-full ${axis.borderColor.replace('border', 'bg')} bg-opacity-20`}>
                                                <Icon className="w-8 h-8 text-secondary" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-secondary">{axis.title}</h3>
                                        </div>
                                        <p className="text-gray-700 text-lg leading-relaxed text-right">
                                            {axis.description}
                                        </p>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* Section Statistiques */}
                <section className="py-12 md:py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-8 md:mb-12"
                        >
                            <div className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6">
                                <span className="bg-accent text-white px-5 py-2 md:px-6 md:py-3 rounded-full text-lg md:text-xl font-bold latin-numbers">3</span>
                                <h2 className="text-2xl md:text-4xl font-bold text-secondary">{t('home.section3Title')}</h2>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                        >
                            {stats.map((stat, index) => {
                                const Icon = stat.icon
                                return (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, y: -10 }}
                                        className={`${stat.color} rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300`}
                                    >
                                        <div className="flex flex-col items-center text-center">
                                            <div className="mb-3 md:mb-4">
                                                <Icon className={`w-12 h-12 md:w-16 md:h-16 ${stat.textColor}`} />
                                            </div>
                                            <div className={`text-4xl md:text-6xl font-bold ${stat.textColor} mb-3 md:mb-4 latin-numbers`}>
                                                {stat.number}
                                            </div>
                                            <p className="text-gray-800 font-semibold text-base md:text-lg leading-relaxed">
                                                {stat.label}
                                            </p>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home
