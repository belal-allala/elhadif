import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Building2, MessageCircle } from 'lucide-react'

function Contact() {
    return (
        <section id="contact" className="relative py-20 bg-white overflow-hidden">
            {/* Motifs hexagonaux décoratifs */}
            <div className="absolute inset-0 overflow-hidden opacity-5">
                <svg className="absolute top-[2.5vh] right-[5vw] w-[clamp(4rem,8vw,8rem)] h-[clamp(4rem,8vw,8rem)] text-primary" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                    <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="none" stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                </svg>
                <svg className="absolute bottom-[5vh] left-[5vw] w-[clamp(5rem,10vw,10rem)] h-[clamp(5rem,10vw,10rem)] text-accent" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                    <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="none" stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                </svg>
                <svg className="absolute top-1/2 left-[25%] w-[clamp(3rem,6vw,6rem)] h-[clamp(3rem,6vw,6rem)] text-secondary" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                    <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="none" stroke="currentColor" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mot de remerciement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                        كلمة شكر وتقدير
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>

                    <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                            نتقدم بجزيل الشكر والامتنان لكل من ساهم في دعم مسيرتنا، من شركاء ومانحين ومتطوعين.
                            بفضل تضافر جهودكم، نواصل تحقيق أهدافنا في خدمة المجتمع وتمكين الشباب.
                        </p>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                            شكراً لكل من آمن برؤيتنا ووقف إلى جانبنا في رحلة التنمية والتغيير الإيجابي.
                        </p>

                        {/* Signature */}
                        <div className="pt-6 border-t-2 border-primary/20">
                            <p className="text-3xl md:text-4xl font-bold text-primary">
                                #كلنا_الهادف
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Section Contact et Dons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
                        تواصل معنا
                    </h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Coordonnées de contact - À droite en RTL */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <h4 className="text-2xl font-bold text-secondary mb-6">
                                معلومات الاتصال
                            </h4>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1">الهاتف:</p>
                                        <a
                                            href="tel:+212637167401"
                                            className="text-gray-700 hover:text-primary transition-colors"
                                        >
                                            +212 637-167401
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1">البريد الإلكتروني:</p>
                                        <a
                                            href="mailto:associationelhadef@gmail.com"
                                            className="text-gray-700 hover:text-primary transition-colors break-all"
                                        >
                                            associationelhadef@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1">العنوان:</p>
                                        <p className="text-gray-700">
                                            Dar Echabab Jraifat<br />
                                            Safi, Maroc
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Bouton WhatsApp */}
                            <a
                                href="https://wa.me/212637167401"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg"
                            >
                                <MessageCircle className="w-5 h-5" />
                                تواصل معنا عبر واتساب
                            </a>
                        </div>

                        {/* Espace Don - À gauche en RTL */}
                        <div className="bg-gradient-to-br from-accent to-accent-dark rounded-2xl p-8 shadow-xl text-white">
                            <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Building2 className="w-7 h-7" />
                                فضاء التبرع
                            </h4>

                            <p className="text-white/90 mb-6 leading-relaxed">
                                ساهم في دعم مشاريعنا وأنشطتنا من خلال التبرع عبر الحساب البنكي التالي:
                            </p>

                            <div className="space-y-4">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                    <p className="text-sm text-white/80 mb-1">صاحب الحساب:</p>
                                    <p className="font-bold text-lg">EL HADEF</p>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                    <p className="text-sm text-white/80 mb-1">البنك:</p>
                                    <p className="font-bold">Banque Populaire</p>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                    <p className="text-sm text-white/80 mb-1">RIB:</p>
                                    <p className="font-mono text-sm md:text-base font-semibold break-all">
                                        230 780 2121172205730001 75
                                    </p>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                    <p className="text-sm text-white/80 mb-1">IBAN:</p>
                                    <p className="font-mono text-sm md:text-base font-semibold break-all">
                                        MA64 230 780 2121172205730001 75
                                    </p>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                    <p className="text-sm text-white/80 mb-1">Code SWIFT:</p>
                                    <p className="font-mono font-semibold">BCPOMAMC</p>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-white/20">
                                <p className="text-sm text-white/90 text-center">
                                    كل مساهمة، مهما كانت صغيرة، تحدث فرقاً كبيراً
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
