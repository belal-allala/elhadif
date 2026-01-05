import { Mail, Phone, MapPin, Building2 } from 'lucide-react'

function Footer() {
    return (
        <footer className="bg-secondary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Section À propos */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-primary">
                            جمعية الهادف للتنمية والتعاون
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            جمعية تنموية تعاونية تهدف إلى تحسين الظروف الاجتماعية والاقتصادية للمجتمع المحلي من خلال مشاريع مستدامة ومبادرات تنموية.
                        </p>
                    </div>

                    {/* Section Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-primary">
                            اتصل بنا
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold">العنوان:</p>
                                    <p className="text-gray-300">Dar Echabab Jraifat</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Mail className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold">البريد الإلكتروني:</p>
                                    <a
                                        href="mailto:associationelhadef@gmail.com"
                                        className="text-gray-300 hover:text-accent transition-colors"
                                    >
                                        associationelhadef@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Phone className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold">الهاتف:</p>
                                    <a
                                        href="tel:+212637167401"
                                        className="text-gray-300 hover:text-accent transition-colors"
                                    >
                                        +212 637-167401
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section Dons */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-primary">
                            معلومات التبرع
                        </h3>
                        <div className="space-y-4">
                            <div className="bg-secondary-dark p-4 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <Building2 className="h-5 w-5 text-accent" />
                                    <p className="font-semibold">RIB:</p>
                                </div>
                                <p className="text-gray-300 font-mono text-sm break-all">
                                    230 780 2121172205730001 75
                                </p>
                            </div>

                            <div className="bg-secondary-dark p-4 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <Building2 className="h-5 w-5 text-accent" />
                                    <p className="font-semibold">IBAN:</p>
                                </div>
                                <p className="text-gray-300 font-mono text-sm break-all">
                                    MA64 230 780 2121172205730001 75
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-secondary-light text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} جمعية الهادف للتنمية والتعاون. جميع الحقوق محفوظة.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
