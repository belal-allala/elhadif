import { motion } from 'framer-motion'
import { Leaf, Library, GraduationCap, Users, HeartHandshake, Trophy } from 'lucide-react'

function WorkAxes() {
    const axes = [
        {
            icon: Leaf,
            title: 'البيئة والتنمية المستدامة',
            subtitle: 'Environnement & Développement Durable',
            color: 'primary',
        },
        {
            icon: Library,
            title: 'الثقافة والتراث',
            subtitle: 'Culture & Patrimoine',
            color: 'secondary',
        },
        {
            icon: GraduationCap,
            title: 'التربية والتعليم',
            subtitle: 'Éducation',
            color: 'accent',
        },
        {
            icon: Users,
            title: 'العمل التطوعي وبناء القدرات',
            subtitle: 'Bénévolat & Renforcement des Capacités',
            color: 'primary',
        },
        {
            icon: HeartHandshake,
            title: 'التنمية الاجتماعية',
            subtitle: 'Développement Social',
            color: 'secondary',
        },
        {
            icon: Trophy,
            title: 'الرياضة والترفيه',
            subtitle: 'Sport & Loisirs',
            color: 'accent',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    }

    return (
        <section id="axes" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Titre de section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                        محاور عملنا الرئيسية
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto"></div>
                </motion.div>

                {/* Grille des axes */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {axes.map((axe, index) => {
                        const Icon = axe.icon
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className={`bg-white rounded-2xl p-8 shadow-lg border-t-4 border-${axe.color} hover:shadow-2xl transition-all duration-300 group cursor-pointer`}
                            >
                                <div className={`w-16 h-16 bg-${axe.color}/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-${axe.color} transition-all duration-300`}>
                                    <Icon className={`w-8 h-8 text-${axe.color} group-hover:text-white transition-colors duration-300`} />
                                </div>

                                <h3 className="text-2xl font-bold text-secondary mb-2">
                                    {axe.title}
                                </h3>

                                <p className="text-gray-600 text-sm">
                                    {axe.subtitle}
                                </p>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* Message de conclusion */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        نعمل على تحقيق أهدافنا من خلال هذه المحاور الستة، بهدف بناء مجتمع أفضل وتمكين الشباب في منطقتنا
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default WorkAxes
