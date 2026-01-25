import { motion } from 'framer-motion'
import { Handshake, Shield, Lightbulb, Eye, Users, Award, CheckCircle, Target, TrendingUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function AboutPage() {
    const { t } = useTranslation()
    const values = [
        { name: t('about.cooperation'), icon: Handshake, color: 'text-blue-600', bgColor: 'bg-blue-100' },
        { name: t('about.responsibility'), icon: Shield, color: 'text-red-600', bgColor: 'bg-red-100' },
        { name: t('about.creativity'), icon: Lightbulb, color: 'text-yellow-600', bgColor: 'bg-yellow-100' },
        { name: t('about.transparency'), icon: Eye, color: 'text-green-600', bgColor: 'bg-green-100' },
        { name: t('about.citizenship'), icon: Users, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    ]

    const objectives = [
        {
            number: '01',
            title: t('about.objective1'),
            icon: Award,
            color: 'bg-green-500',
            textColor: 'text-green-600',
        },
        {
            number: '02',
            title: t('about.objective2'),
            icon: CheckCircle,
            color: 'bg-cyan-500',
            textColor: 'text-cyan-600',
        },
        {
            number: '03',
            title: t('about.objective3'),
            icon: Target,
            color: 'bg-yellow-500',
            textColor: 'text-yellow-600',
        },
        {
            number: '04',
            title: t('about.objective4'),
            icon: TrendingUp,
            color: 'bg-amber-700',
            textColor: 'text-amber-700',
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
                {/* Header Section */}
                <section className="py-20 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-7xl mx-auto text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-4">
                            {t('about.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-primary font-semibold">
                            {t('about.subtitle')}
                        </p>
                    </motion.div>
                </section>

                {/* Section من نحن، رؤيتنا، رسالتنا */}
                <section className="py-16 px-4">
                    <div className="max-w-6xl mx-auto space-y-8">
                        {/* من نحن */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-r-8 border-cyan-400"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-cyan-600">{t('about.whoWeAre')}</h2>
                            </div>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-right">
                                {t('about.whoWeAreContent')}
                            </p>
                        </motion.div>

                        {/* رؤيتنا */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-r-8 border-green-400"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-green-600">{t('about.vision')}</h2>
                            </div>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-right">
                                {t('about.visionContent')}
                            </p>
                        </motion.div>

                        {/* رسالتنا */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-r-8 border-blue-400"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-blue-600">{t('about.mission')}</h2>
                            </div>
                            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-right">
                                {t('about.missionContent')}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Section Valeurs (قيمنا) */}
                <section className="py-16 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">{t('about.values')}</h2>
                            <p className="text-xl text-gray-600">{t('about.valuesSubtitle')}</p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 md:grid-cols-5 gap-6"
                        >
                            {values.map((value, index) => {
                                const Icon = value.icon
                                return (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.1, y: -10 }}
                                        className={`${value.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center`}
                                    >
                                        <div className={`p-4 rounded-full bg-white mb-4`}>
                                            <Icon className={`w-10 h-10 ${value.color}`} />
                                        </div>
                                        <h3 className={`text-xl font-bold ${value.color}`}>{value.name}</h3>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* Section Objectifs (أهدافنا) */}
                <section className="py-16 px-4">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <h2 className="text-2xl md:text-5xl font-bold text-secondary mb-4">{t('about.objectives')}</h2>
                            <p className="text-base md:text-xl text-gray-600">{t('about.objectivesSubtitle')}</p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-4 md:space-y-6"
                        >
                            {objectives.map((objective, index) => {
                                const Icon = objective.icon
                                return (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.02, x: -10 }}
                                        className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                                    >
                                        <div className="flex items-center">
                                            {/* Number Circle */}
                                            <div className={`${objective.color} text-white px-4 py-6 md:px-8 md:py-12 flex items-center justify-center flex-shrink-0`}>
                                                <span className="text-2xl md:text-5xl font-bold latin-numbers">{objective.number}</span>
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 px-4 py-4 md:px-8 md:py-6 flex items-center gap-3 md:gap-6">
                                                <div className={`p-2 md:p-4 rounded-full ${objective.bgColor || 'bg-gray-100'} flex-shrink-0`}>
                                                    <Icon className={`w-6 h-6 md:w-10 md:h-10 ${objective.textColor}`} />
                                                </div>
                                                <h3 className={`text-base md:text-2xl lg:text-3xl font-bold ${objective.textColor} leading-tight`}>
                                                    {objective.title}
                                                </h3>
                                            </div>
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

export default AboutPage
