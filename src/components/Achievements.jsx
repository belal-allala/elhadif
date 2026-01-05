import { motion } from 'framer-motion'

function Achievements() {
    // TODO: Remplacer les URLs d'images Unsplash par vos propres photos
    const achievements = [
        {
            title: 'البيئة والنظافة',
            subtitle: 'Environnement & Propreté',
            description: 'Campagnes de nettoyage et peinture d\'armoires électriques pour embellir notre ville',
            // Remplacer cette image par votre photo de campagne de nettoyage
            image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=600&fit=crop',
        },
        {
            title: 'تأطير الأطفال',
            subtitle: 'Encadrement des Enfants',
            description: 'Ateliers éducatifs et artistiques pour développer la créativité des jeunes',
            // Remplacer cette image par votre photo d'atelier pour enfants
            image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop',
        },
        {
            title: 'تشجيع القراءة',
            subtitle: 'Promotion de la Lecture',
            description: 'Ateliers de lecture et concours de Tajwid pour encourager l\'apprentissage',
            // Remplacer cette image par votre photo d'atelier de lecture
            image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop',
        },
        {
            title: 'المهارات الرقمية',
            subtitle: 'Compétences Numériques',
            description: 'Partenariat avec YouCode pour initier les jeunes au codage et à la programmation',
            // Remplacer cette image par votre photo de l'atelier YouCode
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
        },
        {
            title: 'العناية بالمقابر',
            subtitle: 'Entretien des Cimetières',
            description: 'Action sociale et citoyenne pour préserver la dignité de nos défunts',
            // Remplacer cette image par votre photo d'action au cimetière
            image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
        },
        {
            title: 'دعم المواهب',
            subtitle: 'Soutien aux Talents',
            description: 'Tournois d\'échecs et ateliers d\'art urbain pour révéler les talents locaux',
            // Remplacer cette image par votre photo d'activité artistique ou échecs
            image: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?w=800&h=600&fit=crop',
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

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    }

    return (
        <section id="realisations" className="py-20 bg-gray-50">
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
                        إنجازاتنا على أرض الواقع
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        نفخر بما حققناه من إنجازات ملموسة في خدمة مجتمعنا وشبابنا
                    </p>
                </motion.div>

                {/* Grille des réalisations */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
                        >
                            {/* Image avec effet zoom au hover */}
                            <div className="relative h-56 overflow-hidden">
                                <motion.img
                                    src={achievement.image}
                                    alt={achievement.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.4 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Contenu de la carte */}
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-secondary mb-2">
                                    {achievement.title}
                                </h3>
                                <p className="text-sm text-primary font-semibold mb-3">
                                    {achievement.subtitle}
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    {achievement.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Message de conclusion */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center mt-16"
                >
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
                        هذه مجرد لمحة من أنشطتنا المتنوعة. نواصل العمل بكل جد لتحقيق المزيد من الإنجازات
                    </p>
                    <a
                        href="#don"
                        className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                        ساهم في مشاريعنا
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Achievements
