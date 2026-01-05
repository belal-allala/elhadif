import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Handshake, Shield, Lightbulb, Eye, Users } from 'lucide-react'

function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const values = [
        {
            icon: Handshake,
            title: 'التعاون',
            subtitle: 'Coopération',
        },
        {
            icon: Shield,
            title: 'المسؤولية',
            subtitle: 'Responsabilité',
        },
        {
            icon: Lightbulb,
            title: 'الإبداع',
            subtitle: 'Créativité',
        },
        {
            icon: Eye,
            title: 'الشفافية',
            subtitle: 'Transparence',
        },
        {
            icon: Users,
            title: 'المواطنة',
            subtitle: 'Citoyenneté',
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    }

    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* En-tête de section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                        من نحن؟
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
                    <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                        جمعية الهادف للتنمية والتعاون هي منصة شبابية مقرها بمدينة آسفي، ولدت من إرادة التغيير الإيجابي.
                        نسعى لبناء مجتمع أفضل من خلال تمكين الشباب وتطوير قدراتهم عبر برامج متنوعة ومستدامة.
                    </p>
                </motion.div>

                {/* Vision & Mission */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-primary hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <Eye className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-secondary">رؤيتنا</h3>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            مجتمع رائد، يُعدّ فيه الشباب المحرّك الأساسي للتنمية المستدامة
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-accent hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                                <Lightbulb className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-2xl font-bold text-secondary">مهمتنا</h3>
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            تمكين شباب منطقتنا وتنمية قدراتهم من خلال برامج تربوية، ثقافية، ورياضية
                        </p>
                    </motion.div>
                </div>

                {/* Valeurs */}
                <div ref={ref}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                            قيمنا
                        </h3>
                        <div className="w-20 h-1 bg-primary mx-auto"></div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
                    >
                        {values.map((value, index) => {
                            const Icon = value.icon
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="flex flex-col items-center text-center group cursor-pointer"
                                >
                                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:from-primary-dark group-hover:to-primary">
                                        <Icon className="w-12 h-12 text-white" />
                                    </div>
                                    <h4 className="text-xl font-bold text-secondary mb-1">
                                        {value.title}
                                    </h4>
                                    <p className="text-sm text-gray-600">{value.subtitle}</p>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
