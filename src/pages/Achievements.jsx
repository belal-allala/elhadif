import { motion } from 'framer-motion'
import { Camera, Star, Heart, Trophy, Users, Palette, BookOpen, Monitor, Sparkles } from 'lucide-react'

function AchievementsPage() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    const photoVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5 }
        },
        hover: {
            scale: 1.05,
            rotate: 0,
            zIndex: 10,
            transition: { duration: 0.3 }
        }
    }

    return (
        <div className="min-h-screen bg-[#fdfbf6]">
            {/* Background Grid Pattern (Cahier styling) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: 'linear-gradient(#9CA3AF 1px, transparent 1px), linear-gradient(90deg, #9CA3AF 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 overflow-hidden">

                {/* --- Header Section --- */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <div className="flex justify-center mb-6">
                        <div className="bg-white p-4 rounded-full shadow-xl border-4 border-green-500">
                            <Camera className="w-16 h-16 text-green-600" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 font-primary">
                        إنجازاتنا على أرض الواقع
                    </h1>
                    <div className="w-32 h-2 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full mb-8"></div>

                    <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100">
                        <p className="text-2xl text-gray-800 font-semibold mb-4 leading-relaxed">
                            لأننا نؤمن بأن الأثر الحقيقي يُرى ولا يُحكى، ندعوكم لتصفح معرض صور لأبرز أنشطتنا ومبادراتنا.
                        </p>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            كل صورة هنا تروي حكاية نجاح، وكل بسمة هي شهادة على التزامنا، وكل إنجاز هو ثمرة عمل جماعي وتفانٍ لا حدود له.
                        </p>
                    </div>
                </motion.div>

                {/* --- Section 1: Environment & Cleaning (حملات النظافة) --- */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="flex items-center justify-end gap-4 mb-12">
                        <div className="text-right">
                            <h2 className="text-4xl font-bold text-orange-500 mb-2">حملات "حيي مسؤوليتي"</h2>
                            <p className="text-xl text-gray-600">للنظافة والتزيين والعناية بالبيئة</p>
                        </div>
                        <div className="bg-orange-100 p-3 rounded-2xl">
                            <Sparkles className="w-10 h-10 text-orange-500" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Photo 1: Painting Walls */}
                        <motion.div variants={photoVariants} whileHover="hover" className="bg-white p-3 shadow-lg rounded-sm transform -rotate-2">
                            <div className="aspect-[4/3] bg-gray-200 overflow-hidden mb-3">
                                <img src="/doc/environmental_cleanup.png" alt="صباغة الجدران" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-center font-handwriting text-lg text-gray-600">صباغة الجدران والجداريات</p>
                        </motion.div>

                        {/* Photo 2: Cleaning */}
                        <motion.div variants={photoVariants} whileHover="hover" className="bg-white p-3 shadow-lg rounded-sm transform rotate-1 mt-8 md:mt-0">
                            <div className="aspect-[4/3] bg-gray-200 overflow-hidden mb-3">
                                <img src="/doc/environmental_awareness.png" alt="حملات النظافة" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-center font-handwriting text-lg text-gray-600">تنظيف الشوارع والساحات</p>
                        </motion.div>

                        {/* Photo 3: Garden Painting */}
                        <motion.div variants={photoVariants} whileHover="hover" className="bg-white p-3 shadow-lg rounded-sm transform -rotate-1">
                            <div className="aspect-[4/3] bg-gray-200 overflow-hidden mb-3">
                                <img src="/doc/WhatsApp Image 2025-11-29 à 20.42.06_6771a9f0.jpg" alt="صباغة الأرصفة" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-center font-handwriting text-lg text-gray-600">صباغة الأرصفة وتزيينها</p>
                        </motion.div>

                        {/* Photo 4: Group Photo */}
                        <motion.div variants={photoVariants} whileHover="hover" className="bg-white p-3 shadow-lg rounded-sm transform rotate-2 mt-8 md:mt-0">
                            <div className="aspect-[4/3] bg-gray-200 overflow-hidden mb-3">
                                <img src="/doc/WhatsApp Image 2025-11-29 à 20.42.05_7822e775.jpg" alt="فريق العمل" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-center font-handwriting text-lg text-gray-600">روح الفريق والتطوع</p>
                        </motion.div>
                    </div>
                </motion.section>

                {/* --- Section 2: Skills & Education (YouCode + Reading) --- */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="flex flex-row-reverse items-center justify-end gap-4 mb-12">
                        <div className="text-left">
                            <h2 className="text-4xl font-bold text-blue-600 mb-2">مهارات وتشجيع المعرفة</h2>
                            <p className="text-xl text-gray-600">التكوين الرقمي وبرامج القراءة</p>
                        </div>
                        <div className="bg-blue-100 p-3 rounded-2xl">
                            <Monitor className="w-10 h-10 text-blue-600" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* YouCode Feature */}
                        <motion.div variants={itemVariants} className="md:col-span-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-6 border border-blue-100 shadow-md flex flex-col md:flex-row gap-6 items-center">
                            <div className="w-full md:w-1/2">
                                <h3 className="text-2xl font-bold text-blue-800 mb-4 bg-white/50 p-2 inline-block rounded-lg">شراكة YouCode</h3>
                                <div className="bg-white p-2 shadow-sm rounded-xl transform rotate-1">
                                    <img src="/doc/WhatsApp Image 2025-11-26 à 09.14.09_f5279ff7.jpg" alt="ورشات YouCode" className="rounded-lg w-full h-48 object-cover" />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 text-right">
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    برنامج تأهيل المهارات الرقمية بشراكة مع مؤسسة <span className="font-bold text-blue-600">YouCode</span>.
                                    نمكن الشباب من أدوات العصر الرقمي ولغة البرمجة لفتح آفاق مهنية واعدة.
                                </p>
                                <div className="flex gap-2 justify-end">
                                    <span className="px-3 py-1 bg-white rounded-full text-sm text-blue-600 font-semibold shadow-sm">#YouCode</span>
                                    <span className="px-3 py-1 bg-white rounded-full text-sm text-indigo-600 font-semibold shadow-sm">#DigitalSkills</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Reading feature */}
                        <motion.div variants={itemVariants} className="relative bg-amber-50 rounded-3xl p-6 border border-amber-100 shadow-md">
                            <div className="absolute -top-4 -right-4 bg-amber-500 text-white p-2 rounded-lg shadow-lg">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white p-2 shadow-sm rounded-xl -rotate-1">
                                    <img src="/doc/cultural_seminar.png" alt="ورشة القراءة" className="rounded-lg w-full h-40 object-cover" />
                                </div>
                                <div className="text-right">
                                    <h3 className="text-xl font-bold text-amber-800 mb-2">تعليم القرآن والقراءة</h3>
                                    <p className="text-gray-600 text-sm">برامج تعليم القرآن الكريم ومسابقات تجويد، بالإضافة إلى ورشات المطالعة الحرة.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* --- Section 3: Children & Art (الأطفال) --- */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="flex items-center justify-center gap-4 mb-16">
                        <div className="h-1 flex-1 bg-gradient-to-l from-transparent to-pink-200"></div>
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-pink-500 mb-2">مواكبة وتأطير الأطفال</h2>
                            <p className="text-xl text-gray-600">ورشات فنية، مسرح، وإبداع</p>
                        </div>
                        <div className="bg-pink-100 p-3 rounded-2xl">
                            <Palette className="w-10 h-10 text-pink-500" />
                        </div>
                        <div className="h-1 flex-1 bg-gradient-to-r from-transparent to-pink-200"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                        {/* Mosaic/Masonry Layout */}
                        <motion.div variants={photoVariants} whileHover="hover" className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl shadow-lg">
                            <img src="/doc/cultural_workshop.png" alt="مسرح الأطفال" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-xl font-bold">المسرح المدرسي</p>
                            </div>
                        </motion.div>

                        <motion.div variants={photoVariants} whileHover="hover" className="relative group overflow-hidden rounded-3xl shadow-lg">
                            <img src="/doc/WhatsApp Image 2025-11-28 à 12.34.38_9efb9b31.jpg" alt="ورشة الرسم" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </motion.div>

                        <motion.div variants={photoVariants} whileHover="hover" className="relative group overflow-hidden rounded-3xl shadow-lg bg-pink-100 flex items-center justify-center">
                            <div className="text-center p-4">
                                <Heart className="w-12 h-12 text-pink-500 mx-auto mb-2" />
                                <p className="text-pink-800 font-bold">تنمية المواهب</p>
                            </div>
                        </motion.div>

                        <motion.div variants={photoVariants} whileHover="hover" className="relative group overflow-hidden rounded-3xl shadow-lg">
                            <img src="/doc/WhatsApp Image 2025-11-28 à 12.34.38_1f058b02.jpg" alt="أنشطة ترفيهية" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </motion.div>

                        <motion.div variants={photoVariants} whileHover="hover" className="relative group overflow-hidden rounded-3xl shadow-lg md:col-span-2">
                            <img src="/doc/WhatsApp Image 2025-11-29 à 14.28.28_909dd54d.jpg" alt="صورة جماعية للأطفال" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg font-bold">فرحة النجاح</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Footer Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center bg-primary/10 rounded-[3rem] p-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                        <Users className="w-64 h-64 text-primary" />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">كن جزءاً من قصة نجاحنا القادمة</h3>
                        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                            أبواب الجمعية مفتوحة دائماً للمتطوعين، المساهمين، والشركاء. انضم إلينا لنصنع الفرق معاً.
                        </p>
                        <button className="bg-primary text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                            انضم إلينا الآن
                        </button>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default AchievementsPage

