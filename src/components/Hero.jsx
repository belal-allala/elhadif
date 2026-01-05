import { motion } from 'framer-motion'
import { Users, Heart, Calendar } from 'lucide-react'

function Hero() {
    const stats = [
        {
            icon: Users,
            number: '+500',
            label: 'المستفيدين سنوياً',
            color: 'primary',
        },
        {
            icon: Heart,
            number: '+50',
            label: 'متطوع ومتطوعة',
            color: 'accent',
        },
        {
            icon: Calendar,
            number: '+5',
            label: 'أنشطة وبرامج أسبوعية',
            color: 'secondary',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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

    const statVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
            {/* Motifs géométriques en arrière-plan */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
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

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                >
                    {/* Logo */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-8 flex justify-center"
                    >
                        <motion.img
                            src="/doc/logo.png"
                            alt="شعار جمعية الهادف"
                            className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 object-contain"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>

                    {/* Titre principal */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-secondary mb-6 leading-tight"
                    >
                        جمعية الهادف للتنمية والتعاون
                    </motion.h1>

                    {/* Slogan */}
                    <motion.p
                        variants={itemVariants}
                        className="text-2xl sm:text-3xl md:text-4xl text-primary font-semibold mb-4"
                    >
                        معاً نبني مستقبلاً أفضل
                    </motion.p>

                    {/* Date de fondation */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-gray-600 mb-12"
                    >
                        تأسست في 23 يوليو 2002
                    </motion.p>

                    {/* Bouton CTA */}
                    <motion.div variants={itemVariants} className="mb-20">
                        <a
                            href="#axes"
                            className="inline-block bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            اكتشف أنشطتنا
                        </a>
                    </motion.div>

                    {/* Statistiques */}
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
                    >
                        {stats.map((stat, index) => {
                            const Icon = stat.icon
                            return (
                                <motion.div
                                    key={index}
                                    variants={statVariants}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className={`bg-white rounded-2xl p-8 shadow-xl border-t-4 border-${stat.color} hover:shadow-2xl transition-shadow duration-300`}
                                >
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${stat.color}/10 mb-4`}>
                                        <Icon className={`w-8 h-8 text-${stat.color}`} />
                                    </div>
                                    <div className={`text-4xl font-bold text-${stat.color} mb-2`}>
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-700 font-medium text-lg">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </motion.div>
            </div>

            {/* Vague décorative en bas */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path
                        d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                        fill="#f9fafb"
                        fillOpacity="0.5"
                    />
                </svg>
            </div>
        </section>
    )
}

export default Hero
