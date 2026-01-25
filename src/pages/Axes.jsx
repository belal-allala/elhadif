import { motion } from 'framer-motion'
import { Globe, Landmark, GraduationCap, HandHeart, Users, Dumbbell, Cloud, Leaf, Recycle, TreePine, BookOpen, School, Backpack, Heart, Gift, UserPlus, Trophy, Gamepad2, Footprints, Palette, Mic, Scroll, Truck, HeartHandshake, Goal, PartyPopper } from 'lucide-react'

function Axes() {
    const workDomains = [
        {
            number: '01',
            title: 'البيئة والتنمية المستدامة',
            icon: Globe,
            accentColor: '#2AD1E3',
            mainColor: '#0A3D46',
            gradientFrom: '#2AD1E3',
            gradientTo: '#7ED957',
        },
        {
            number: '02',
            title: 'الثقافة والتراث',
            icon: Landmark,
            accentColor: '#8C52FF',
            mainColor: '#0A3D46',
            gradientFrom: '#8C52FF',
            gradientTo: '#2AD1E3',
        },
        {
            number: '03',
            title: 'التربية والتعليم',
            icon: GraduationCap,
            accentColor: '#FF914D',
            mainColor: '#0A3D46',
            gradientFrom: '#FF914D',
            gradientTo: '#C9A227',
        },
        {
            number: '04',
            title: 'العمل التطوعي وبناء القدرات',
            icon: HandHeart,
            accentColor: '#7ED957',
            mainColor: '#0A3D46',
            gradientFrom: '#7ED957',
            gradientTo: '#2AD1E3',
        },
        {
            number: '05',
            title: 'التنمية الاجتماعية',
            icon: Users,
            accentColor: '#8C52FF',
            mainColor: '#0A3D46',
            gradientFrom: '#8C52FF',
            gradientTo: '#FF914D',
        },
        {
            number: '06',
            title: 'الرياضة والترفيه',
            icon: Dumbbell,
            accentColor: '#FF914D',
            mainColor: '#0A3D46',
            gradientFrom: '#FF914D',
            gradientTo: '#7ED957',
        },
    ]

    const environmentalPrograms = [
        {
            title: 'حملات النظافة والتشجير',
            description: 'نعمل بشكل مباشر على تحسين جمالية منطقتنا عبر مبادرات ميدانية تعزز الوعي وتحدث أثراً ملموساً في المجتمع.',
            icon: Recycle,
            image: '/doc/474058605_530026146759115_7759097212140950000_n.jpg',
            color: 'border-green-500',
        },
        {
            title: 'برامج التوعية البيئية',
            description: 'نسعى إلى بناء جيل واع بيئياً قادر على تبني سلوكيات مستدامة تحافظ على الطبيعة وتدعم مستقبلاً أكثر خضرة.',
            icon: TreePine,
            image: '/doc/487051105_577594808668915_6503870267768049242_n.jpg',
            color: 'border-green-500',
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
                        <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
                            مجالات عملنا وبرامجنا
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                            ترجمة لرؤيتنا ورسالتنا على أرض الواقع، نظم أنشطتنا وبرامجنا ضمن ستة محاور عمل متكاملة ومترابطة. كل محور مصمم بعناية لتلبية احتياجات محددة في مجتمعنا، وضمان تحقيق أثر إيجابي، عميق، ومستدام.
                        </p>
                    </motion.div>
                </section>

                {/* Icon Cloud Illustration */}
                <section className="py-8 px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-md mx-auto"
                    >
                        <div className="relative">
                            <Cloud className="w-full h-48 text-cyan-400 opacity-20" strokeWidth={1} />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-3xl md:text-4xl font-bold text-green-500">محاور عملنا</h2>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Work Domains Grid */}
                <section className="py-[clamp(3rem,8vw,6rem)] px-[clamp(1rem,4vw,2rem)] relative">
                    <div className="max-w-[clamp(20rem,90vw,75rem)] mx-auto">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(1.5rem,4vw,2.5rem)]"
                        >
                            {workDomains.map((domain, index) => {
                                const Icon = domain.icon
                                return (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.03, y: -8 }}
                                        className="relative group"
                                    >
                                        {/* Card Container */}
                                        <div
                                            className="relative rounded-[clamp(1.5rem,3vw,2rem)] p-[clamp(1.5rem,4vw,2.5rem)] min-h-[clamp(18rem,40vw,22rem)] flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-500"
                                            style={{
                                                background: `linear-gradient(135deg, ${domain.gradientFrom}15 0%, ${domain.gradientTo}08 100%)`,
                                                border: `clamp(2px,0.3vw,3px) solid ${domain.accentColor}40`,
                                                boxShadow: `0 clamp(0.5rem,1.5vw,1rem) clamp(1.5rem,3vw,2.5rem) ${domain.accentColor}20`
                                            }}
                                        >
                                            {/* Gold Number Badge */}
                                            <div
                                                className="absolute top-[clamp(0.75rem,2vw,1.25rem)] right-[clamp(0.75rem,2vw,1.25rem)] rounded-full flex items-center justify-center font-bold shadow-xl transition-transform duration-300 group-hover:scale-110"
                                                style={{
                                                    width: 'clamp(3rem,7vw,4.5rem)',
                                                    height: 'clamp(3rem,7vw,4.5rem)',
                                                    fontSize: 'clamp(1rem,2.5vw,1.5rem)',
                                                    background: 'linear-gradient(135deg, #C9A227 0%, #FF914D 100%)',
                                                    color: '#0A3D46'
                                                }}
                                            >
                                                {domain.number}
                                            </div>

                                            {/* Decorative Background Shapes */}
                                            <div
                                                className="absolute top-0 left-0 w-full h-full opacity-5"
                                                style={{ background: `radial-gradient(circle at 30% 20%, ${domain.accentColor} 0%, transparent 50%)` }}
                                            ></div>
                                            <div
                                                className="absolute bottom-0 right-0 w-[clamp(6rem,15vw,10rem)] h-[clamp(6rem,15vw,10rem)] opacity-5"
                                                style={{ background: `radial-gradient(circle, ${domain.gradientTo} 0%, transparent 70%)` }}
                                            ></div>

                                            {/* Icon Container with Gradient Border */}
                                            <div
                                                className="relative mb-[clamp(1rem,3vw,1.75rem)] p-[clamp(1rem,2.5vw,1.5rem)] rounded-full transition-all duration-300 group-hover:scale-110"
                                                style={{
                                                    background: 'linear-gradient(135deg, #FFFFFF 0%, #F2F2F2 100%)',
                                                    boxShadow: `0 clamp(0.25rem,0.75vw,0.5rem) clamp(0.75rem,2vw,1.25rem) ${domain.accentColor}30`
                                                }}
                                            >
                                                <Icon
                                                    className="relative z-10 transition-transform duration-300"
                                                    style={{
                                                        width: 'clamp(3rem,7vw,4.5rem)',
                                                        height: 'clamp(3rem,7vw,4.5rem)',
                                                        color: domain.accentColor
                                                    }}
                                                />
                                                {/* Animated Ring */}
                                                <div
                                                    className="absolute inset-0 rounded-full animate-pulse opacity-20"
                                                    style={{
                                                        border: `clamp(2px,0.4vw,3px) solid ${domain.accentColor}`
                                                    }}
                                                ></div>
                                            </div>

                                            {/* Title with Text Shadow */}
                                            <h3
                                                className="relative z-10 font-bold leading-tight transition-colors duration-300"
                                                style={{
                                                    fontSize: 'clamp(1.125rem,2.5vw,1.5rem)',
                                                    color: domain.mainColor,
                                                    textShadow: `0 clamp(0.125rem,0.3vw,0.25rem) clamp(0.25rem,0.5vw,0.5rem) ${domain.accentColor}20`
                                                }}
                                            >
                                                {domain.title}
                                            </h3>

                                            {/* Decorative Corner Elements */}
                                            <svg
                                                className="absolute bottom-[clamp(0.5rem,1.5vw,1rem)] left-[clamp(0.5rem,1.5vw,1rem)] opacity-20"
                                                style={{
                                                    width: 'clamp(2rem,5vw,3rem)',
                                                    height: 'clamp(2rem,5vw,3rem)'
                                                }}
                                                viewBox="0 0 100 100"
                                                preserveAspectRatio="xMidYMid meet"
                                            >
                                                <polygon
                                                    points="50 1 95 25 95 75 50 99 5 75 5 25"
                                                    fill="none"
                                                    stroke={domain.accentColor}
                                                    strokeWidth="clamp(2px,0.4vw,3px)"
                                                    vectorEffect="non-scaling-stroke"
                                                />
                                            </svg>
                                            <svg
                                                className="absolute top-[clamp(0.5rem,1.5vw,1rem)] right-[clamp(0.5rem,1.5vw,1rem)] opacity-20 rotate-180"
                                                style={{
                                                    width: 'clamp(2rem,5vw,3rem)',
                                                    height: 'clamp(2rem,5vw,3rem)'
                                                }}
                                                viewBox="0 0 100 100"
                                                preserveAspectRatio="xMidYMid meet"
                                            >
                                                <polygon
                                                    points="50 1 95 25 95 75 50 99 5 75 5 25"
                                                    fill="none"
                                                    stroke={domain.gradientTo}
                                                    strokeWidth="clamp(2px,0.4vw,3px)"
                                                    vectorEffect="non-scaling-stroke"
                                                />
                                            </svg>

                                            {/* Hover Gradient Overlay */}
                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-[clamp(1.5rem,3vw,2rem)]"
                                                style={{
                                                    background: `linear-gradient(135deg, ${domain.gradientFrom} 0%, ${domain.gradientTo} 100%)`
                                                }}
                                            ></div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* Detailed Environmental Axis Section */}
                <section className="py-[clamp(3rem,8vw,6rem)] px-[clamp(1rem,4vw,2rem)] relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F2F2F2 0%, #2AD1E315 50%, #7ED95710 100%)' }}>
                    {/* Decorative Background Elements */}
                    <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
                        <div className="absolute top-[10%] right-[5%] w-[clamp(8rem,20vw,15rem)] h-[clamp(8rem,20vw,15rem)] rounded-full" style={{ background: 'radial-gradient(circle, #2AD1E3 0%, transparent 70%)' }}></div>
                        <div className="absolute bottom-[15%] left-[8%] w-[clamp(6rem,15vw,12rem)] h-[clamp(6rem,15vw,12rem)] rounded-full" style={{ background: 'radial-gradient(circle, #7ED957 0%, transparent 70%)' }}></div>
                        <svg className="absolute top-[20%] left-[50%] w-[clamp(4rem,10vw,8rem)] h-[clamp(4rem,10vw,8rem)] opacity-20" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                            <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="none" stroke="#2AD1E3" strokeWidth="clamp(2px,0.4vw,3px)" vectorEffect="non-scaling-stroke" />
                        </svg>
                    </div>

                    <div className="max-w-[clamp(20rem,90vw,75rem)] mx-auto relative z-10">
                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-[clamp(2rem,5vw,4rem)]"
                        >
                            <div className="flex items-center justify-center gap-[clamp(0.75rem,2vw,1.5rem)] mb-[clamp(1rem,3vw,2rem)]">
                                <div
                                    className="p-[clamp(0.75rem,2vw,1.25rem)] rounded-full shadow-xl transition-transform duration-300 hover:scale-110"
                                    style={{ background: 'linear-gradient(135deg, #7ED957 0%, #2AD1E3 100%)' }}
                                >
                                    <Leaf className="text-white" style={{ width: 'clamp(2rem,5vw,4rem)', height: 'clamp(2rem,5vw,4rem)' }} />
                                </div>
                            </div>
                            <h2
                                className="font-bold mb-[clamp(0.75rem,2vw,1.25rem)]"
                                style={{
                                    fontSize: 'clamp(1.75rem,4.5vw,3rem)',
                                    color: '#0A3D46',
                                    textShadow: '0 clamp(0.125rem,0.3vw,0.25rem) clamp(0.25rem,0.5vw,0.5rem) #2AD1E330'
                                }}
                            >
                                محور البيئة والتنمية المستدامة
                            </h2>
                            <p
                                className="leading-relaxed max-w-[clamp(18rem,85vw,64rem)] mx-auto mb-[clamp(0.75rem,2vw,1.25rem)]"
                                style={{
                                    fontSize: 'clamp(1rem,2.5vw,1.25rem)',
                                    color: '#0A3D46'
                                }}
                            >
                                يبقتنا مسؤوليتنا... نحميها اليوم لنتركم للأجيال القادمة
                            </p>
                            <p
                                className="leading-relaxed max-w-[clamp(18rem,85vw,64rem)] mx-auto mt-[clamp(0.75rem,2vw,1.25rem)]"
                                style={{
                                    fontSize: 'clamp(0.875rem,2vw,1.125rem)',
                                    color: '#0A3D46',
                                    opacity: 0.8
                                }}
                            >
                                نؤمن بأن التنمية لا تكتمل إلا في بيئة نظيفة وصحية. إن الحفاظ على محيطنا الطبيعي ليس مجرد خيار، بل هو واجب أخلاقي ومسؤولية جماعية تجاه أنفسنا وتجاه الأجيال القادمة. لذلك، تطرح جمعية الهادف برسخ الوعي البيئي لدى الشباب، وتحويلهم من مجرد سكان إلى حماة فاعلين ومدافعين عن بيئتهم.
                            </p>
                        </motion.div>

                        {/* Environmental Programs */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-[clamp(1.5rem,4vw,2.5rem)]"
                        >
                            {environmentalPrograms.map((program, index) => {
                                const Icon = program.icon
                                const accentColors = ['#2AD1E3', '#7ED957']
                                const gradientColors = [
                                    { from: '#2AD1E3', to: '#7ED957' },
                                    { from: '#7ED957', to: '#2AD1E3' }
                                ]
                                return (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="group relative overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                                        style={{
                                            borderRadius: 'clamp(1.25rem,3vw,2rem)',
                                            background: 'linear-gradient(135deg, #FFFFFF 0%, #F2F2F2 100%)',
                                            boxShadow: `0 clamp(0.5rem,1.5vw,1rem) clamp(1.5rem,3vw,2.5rem) ${accentColors[index]}25`,
                                            borderLeft: `clamp(4px,0.8vw,8px) solid ${accentColors[index]}`
                                        }}
                                    >
                                        {/* Decorative Gradient Overlay */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                                            style={{ background: `linear-gradient(135deg, ${gradientColors[index].from} 0%, ${gradientColors[index].to} 100%)` }}
                                        ></div>

                                        <div className="grid md:grid-cols-2 gap-[clamp(1rem,3vw,2rem)] relative z-10">
                                            {/* Image */}
                                            <div
                                                className="relative overflow-hidden"
                                                style={{ minHeight: 'clamp(12rem,40vw,20rem)' }}
                                            >
                                                <img
                                                    src={program.image}
                                                    alt={program.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                    style={{ minHeight: 'clamp(12rem,40vw,20rem)' }}
                                                />
                                                {/* Gold Badge Icon */}
                                                <div
                                                    className="absolute top-[clamp(0.75rem,2vw,1.25rem)] right-[clamp(0.75rem,2vw,1.25rem)] rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                                                    style={{
                                                        width: 'clamp(3rem,7vw,4.5rem)',
                                                        height: 'clamp(3rem,7vw,4.5rem)',
                                                        padding: 'clamp(0.5rem,1.25vw,0.75rem)',
                                                        background: 'linear-gradient(135deg, #C9A227 0%, #FF914D 100%)'
                                                    }}
                                                >
                                                    <Icon className="text-white" style={{ width: 'clamp(1.5rem,4vw,2.5rem)', height: 'clamp(1.5rem,4vw,2.5rem)' }} />
                                                </div>
                                                {/* Decorative Corner Shape */}
                                                <div
                                                    className="absolute bottom-0 left-0 w-0 h-0 border-l-[clamp(3rem,8vw,6rem)] border-l-transparent border-b-[clamp(3rem,8vw,6rem)] opacity-10"
                                                    style={{ borderBottomColor: accentColors[index] }}
                                                ></div>
                                            </div>

                                            {/* Content */}
                                            <div
                                                className="flex flex-col justify-center p-[clamp(1.25rem,3vw,2.5rem)]"
                                                style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F2F2F205 100%)' }}
                                            >
                                                {/* Purple Accent Line */}
                                                <div
                                                    className="mb-[clamp(0.75rem,2vw,1.25rem)]"
                                                    style={{
                                                        width: 'clamp(3rem,8vw,6rem)',
                                                        height: 'clamp(3px,0.5vw,4px)',
                                                        background: 'linear-gradient(90deg, #8C52FF 0%, #2AD1E3 100%)',
                                                        borderRadius: 'clamp(2px,0.3vw,4px)'
                                                    }}
                                                ></div>
                                                <h3
                                                    className="font-bold mb-[clamp(0.75rem,2vw,1.25rem)]"
                                                    style={{
                                                        fontSize: 'clamp(1.25rem,3vw,2rem)',
                                                        color: '#0A3D46',
                                                        lineHeight: '1.3'
                                                    }}
                                                >
                                                    {program.title}
                                                </h3>
                                                <p
                                                    className="leading-relaxed"
                                                    style={{
                                                        fontSize: 'clamp(0.9375rem,2.25vw,1.125rem)',
                                                        color: '#0A3D46',
                                                        opacity: 0.85
                                                    }}
                                                >
                                                    {program.description}
                                                </p>
                                                {/* Orange Accent Dot */}
                                                <div
                                                    className="mt-[clamp(1rem,2.5vw,1.5rem)] self-start rounded-full"
                                                    style={{
                                                        width: 'clamp(0.5rem,1.25vw,0.75rem)',
                                                        height: 'clamp(0.5rem,1.25vw,0.75rem)',
                                                        background: '#FF914D'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </motion.div>

                        {/* Growing Plants Illustration */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mt-[clamp(3rem,8vw,5rem)] text-center"
                        >
                            <div className="relative max-w-[clamp(18rem,85vw,64rem)] mx-auto">
                                <div className="flex items-end justify-center gap-[clamp(0.5rem,1.5vw,1rem)]">
                                    {[1, 2, 3, 4, 5, 6].map((i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0, opacity: 0 }}
                                            whileInView={{ height: `clamp(${i * 0.75}rem,${i * 1.5}vw,${i * 1.25}rem)`, opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: i * 0.1 }}
                                            className="flex flex-col items-center"
                                        >
                                            <Leaf
                                                className="mb-[clamp(0.25rem,0.75vw,0.5rem)]"
                                                style={{
                                                    width: `clamp(${0.75 + i * 0.25}rem,${2 + i * 0.5}vw,${1.5 + i * 0.25}rem)`,
                                                    height: `clamp(${0.75 + i * 0.25}rem,${2 + i * 0.5}vw,${1.5 + i * 0.25}rem)`,
                                                    color: '#7ED957'
                                                }}
                                            />
                                            <div
                                                style={{
                                                    width: 'clamp(0.25rem,0.5vw,0.5rem)',
                                                    height: `clamp(${i * 0.75}rem,${i * 1.5}vw,${i * 1.25}rem)`,
                                                    background: 'linear-gradient(180deg, #7ED957 0%, #2AD1E3 100%)',
                                                    borderRadius: 'clamp(2px,0.3vw,4px)'
                                                }}
                                            ></div>
                                        </motion.div>
                                    ))}
                                </div>
                                <div
                                    className="mt-[clamp(0.25rem,0.75vw,0.5rem)] rounded-full"
                                    style={{
                                        height: 'clamp(0.25rem,0.5vw,0.5rem)',
                                        background: 'linear-gradient(90deg, #0A3D46 0%, #7ED957 50%, #0A3D46 100%)'
                                    }}
                                ></div>
                            </div>
                        </motion.div>
                    </div>
                </section>
                {/* Culture and Heritage Axis Section */}
                <section className="py-[clamp(4rem,10vw,8rem)] px-[clamp(1rem,4vw,2rem)] relative overflow-hidden bg-white">
                    <div
                        className="absolute inset-0"
                        style={{
                            background: "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 50%, #FFFFFF 100%)",
                            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent clamp(14px,2.8vw,18px), #0A3D4615 clamp(14px,2.8vw,18px), #0A3D4615 clamp(15px,3vw,20px)), repeating-linear-gradient(90deg, transparent, transparent clamp(14px,2.8vw,18px), #0A3D4615 clamp(14px,2.8vw,18px), #0A3D4615 clamp(15px,3vw,20px))`,
                            backgroundSize: "clamp(15px,3vw,20px) clamp(15px,3vw,20px)",
                        }}
                    ></div>
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <motion.div
                            animate={{ y: [0, -25, 0], rotate: [0, 8, 0] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[8%] right-[4%] w-[clamp(5rem,12vw,10rem)] h-[clamp(5rem,12vw,10rem)] rounded-full opacity-[0.05]"
                            style={{ background: "radial-gradient(circle, #8C52FF 0%, transparent 70%)" }}
                        ></motion.div>
                        <motion.div
                            animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
                            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-[12%] left-[6%] w-[clamp(4rem,10vw,8rem)] h-[clamp(4rem,10vw,8rem)] rounded-full opacity-[0.05]"
                            style={{ background: "radial-gradient(circle, #7ED957 0%, transparent 70%)" }}
                        ></motion.div>
                    </div>
                    <div className="max-w-[clamp(20rem,90vw,75rem)] mx-auto relative z-10">
                        {/* Header Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            className="text-center mb-[clamp(3rem,8vw,5.5rem)] relative"
                        >
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="font-bold mb-[clamp(1rem,2.5vw,1.75rem)] text-center md:text-right relative"
                                style={{
                                    fontSize: "clamp(2.25rem,5.5vw,4rem)",
                                    color: "#7ED957",
                                    fontWeight: 700,
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                محور الثقافة والتراث
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="font-semibold mb-[clamp(1.5rem,3.5vw,2.5rem)] text-center md:text-right"
                                style={{
                                    fontSize: "clamp(1.25rem,3.5vw,2rem)",
                                    color: "#0A3D46",
                                    lineHeight: "1.5",
                                    fontWeight: 600,
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                ثقافتنا هويتنا... بها نعتز ومنها نستلهم إبداعنا
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="leading-relaxed text-center md:text-right max-w-[clamp(18rem,85vw,64rem)] mx-auto"
                                style={{
                                    fontSize: "clamp(0.95rem,2.3vw,1.25rem)",
                                    color: "#0A3D46",
                                    opacity: 0.85,
                                    lineHeight: "1.8",
                                    fontWeight: 400,
                                }}
                            >
                                نرى في الثقافة والتراث نافذة يطل منها الشباب على تاريخهم وجذورهم، ومصدراً غنياً للإلهام والإبداع. لذلك، نعمل في جمعية الهادف على خلق فضاءات ثقافية حية تسمح للشباب بالتعبير عن أنفسهم، وتعميق معرفتهم بتراثهم المحلي والوطني، والمساهمة في إنتاج مشهد ثقافي متنوع ومبتكر.
                            </motion.p>
                        </motion.div>
                        {/* Program Cards */}
                        <div className="space-y-[clamp(2.5rem,7vw,4rem)] mt-[clamp(4.5rem,10vw,6rem)]">
                            {/* Card 1 - Cyan Workshops */}
                            <motion.div
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative group"
                            >
                                <div
                                    className="relative rounded-[clamp(1.5rem,3.5vw,2.5rem)] p-[clamp(1.75rem,4vw,3rem)] shadow-lg flex flex-col md:flex-row items-center gap-[clamp(1.5rem,3.5vw,2.5rem)] transform transition-all duration-500 group-hover:shadow-xl overflow-hidden"
                                    style={{
                                        background: "linear-gradient(135deg, #2AD1E3 0%, #1DB3C8 100%)",
                                        border: `3px solid #2AD1E3`,
                                        boxShadow: `0 clamp(0.75rem,1.75vw,1rem) clamp(1.5rem,3vw,2rem) #2AD1E330`,
                                    }}
                                >
                                    <div
                                        className="absolute inset-0 opacity-[0.12]"
                                        style={{
                                            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.6) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
                                        }}
                                    ></div>
                                    <div className="flex-1 text-center md:text-right order-2 md:order-1 relative z-10">
                                        <h3
                                            className="font-bold mb-[clamp(0.75rem,2vw,1.25rem)]"
                                            style={{
                                                fontSize: "clamp(1.375rem,3.5vw,2.25rem)",
                                                color: "#FFFFFF",
                                                textShadow: "0 2px 4px rgba(10,61,70,0.3)",
                                                fontWeight: 700,
                                                letterSpacing: "-0.01em",
                                            }}
                                        >
                                            الورشات والنوادي الإبداعية
                                        </h3>
                                        <p
                                            className="leading-relaxed"
                                            style={{
                                                fontSize: "clamp(1rem,2.5vw,1.375rem)",
                                                color: "#FFFFFF",
                                                opacity: 0.96,
                                                lineHeight: "1.7",
                                                fontWeight: 500,
                                            }}
                                        >
                                            نوفر للشباب والمواهب الناشئة منصة لتنمية مهاراتهم الفنية والأدبية.
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 order-1 md:order-2 relative z-10">
                                        <motion.div
                                            whileHover={{ scale: 1.15, rotate: 8 }}
                                            transition={{ duration: 0.3 }}
                                            className="rounded-2xl p-[clamp(1rem,2.5vw,1.75rem)]"
                                            style={{
                                                background: "linear-gradient(135deg, #FFFFFF 0%, #F0F9FF 100%)",
                                                boxShadow: `0 clamp(0.5rem,1.25vw,0.75rem) clamp(1rem,2.5vw,1.5rem) rgba(42,209,227,0.3), inset 0 -2px 4px rgba(10,61,70,0.08)`,
                                            }}
                                        >
                                            <Palette
                                                className="text-[#2AD1E3]"
                                                style={{ width: 'clamp(4rem,10vw,6rem)', height: 'clamp(4rem,10vw,6rem)' }}
                                                strokeWidth={1.5}
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                            {/* Card 2 - Orange Events */}
                            <motion.div
                                initial={{ opacity: 0, x: 80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                                className="relative ml-auto max-w-[clamp(18rem,85vw,64rem)] group"
                            >
                                <div
                                    className="relative rounded-[clamp(1.5rem,3.5vw,2.5rem)] p-[clamp(1.75rem,4vw,3rem)] shadow-lg flex flex-col md:flex-row items-center gap-[clamp(1.5rem,3.5vw,2.5rem)] transform transition-all duration-500 group-hover:shadow-xl overflow-hidden"
                                    style={{
                                        background: "linear-gradient(135deg, #FF914D 0%, #E8A043 50%, #FF9F43 100%)",
                                        border: `3px solid #FF914D`,
                                        boxShadow: `0 clamp(0.75rem,1.75vw,1rem) clamp(1.5rem,3vw,2rem) #FF914D30`,
                                    }}
                                >
                                    <div
                                        className="absolute inset-0 opacity-[0.12]"
                                        style={{
                                            backgroundImage: `radial-gradient(circle at 80% 20%, rgba(255,255,255,0.6) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
                                        }}
                                    ></div>
                                    <div className="flex-1 text-center md:text-right order-2 md:order-1 relative z-10">
                                        <h3
                                            className="font-bold mb-[clamp(0.75rem,2vw,1.25rem)]"
                                            style={{
                                                fontSize: "clamp(1.375rem,3.5vw,2.25rem)",
                                                color: "#FFFFFF",
                                                textShadow: "0 2px 4px rgba(10,61,70,0.3)",
                                                fontWeight: 700,
                                                letterSpacing: "-0.01em",
                                            }}
                                        >
                                            الندوات والفعاليات الثقافية
                                        </h3>
                                        <p
                                            className="leading-relaxed"
                                            style={{
                                                fontSize: "clamp(1rem,2.5vw,1.375rem)",
                                                color: "#FFFFFF",
                                                opacity: 0.96,
                                                lineHeight: "1.7",
                                                fontWeight: 500,
                                            }}
                                        >
                                            نساهم في إثراء الحوار الفكري والمعرفي في منطقتنا.
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 order-1 md:order-2 relative z-10">
                                        <motion.div
                                            whileHover={{ scale: 1.15, rotate: -8 }}
                                            transition={{ duration: 0.3 }}
                                            className="rounded-2xl p-[clamp(1rem,2.5vw,1.75rem)]"
                                            style={{
                                                background: "linear-gradient(135deg, #FFFFFF 0%, #FFFAEB 100%)",
                                                boxShadow: `0 clamp(0.5rem,1.25vw,0.75rem) clamp(1rem,2.5vw,1.5rem) rgba(255,145,77,0.3), inset 0 -2px 4px rgba(10,61,70,0.08)`,
                                            }}
                                        >
                                            <Mic
                                                className="text-[#FF914D]"
                                                style={{ width: 'clamp(4rem,10vw,6rem)', height: 'clamp(4rem,10vw,6rem)' }}
                                                strokeWidth={1.5}
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                            {/* Card 3 - Green Heritage */}
                            <motion.div
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                                className="relative group"
                            >
                                <div
                                    className="relative rounded-[clamp(1.5rem,3.5vw,2.5rem)] p-[clamp(1.75rem,4vw,3rem)] shadow-lg flex flex-col md:flex-row items-center gap-[clamp(1.5rem,3.5vw,2.5rem)] transform transition-all duration-500 group-hover:shadow-xl overflow-hidden"
                                    style={{
                                        background: "linear-gradient(135deg, #7ED957 0%, #6BBF46 100%)",
                                        border: `3px solid #7ED957`,
                                        boxShadow: `0 clamp(0.75rem,1.75vw,1rem) clamp(1.5rem,3vw,2rem) #7ED95730`,
                                    }}
                                >
                                    <div
                                        className="absolute inset-0 opacity-[0.12]"
                                        style={{
                                            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.6) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
                                        }}
                                    ></div>
                                    <div className="flex-1 text-center md:text-right order-2 md:order-1 relative z-10">
                                        <h3
                                            className="font-bold mb-[clamp(0.75rem,2vw,1.25rem)]"
                                            style={{
                                                fontSize: "clamp(1.375rem,3.5vw,2.25rem)",
                                                color: "#FFFFFF",
                                                textShadow: "0 2px 4px rgba(10,61,70,0.3)",
                                                fontWeight: 700,
                                                letterSpacing: "-0.01em",
                                            }}
                                        >
                                            إحياء التراث المحلي والتعريف به
                                        </h3>
                                        <p
                                            className="leading-relaxed"
                                            style={{
                                                fontSize: "clamp(1rem,2.5vw,1.375rem)",
                                                color: "#FFFFFF",
                                                opacity: 0.96,
                                                lineHeight: "1.7",
                                                fontWeight: 500,
                                            }}
                                        >
                                            نعمل على تقوية ارتباط الشباب بجذورهم وتاريخهم.
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 order-1 md:order-2 relative z-10">
                                        <motion.div
                                            whileHover={{ scale: 1.15, rotate: 8 }}
                                            transition={{ duration: 0.3 }}
                                            className="rounded-2xl p-[clamp(1rem,2.5vw,1.75rem)]"
                                            style={{
                                                background: "linear-gradient(135deg, #FFFFFF 0%, #F0FFEA 100%)",
                                                boxShadow: `0 clamp(0.5rem,1.25vw,0.75rem) clamp(1rem,2.5vw,1.5rem) rgba(126,217,87,0.3), inset 0 -2px 4px rgba(10,61,70,0.08)`,
                                            }}
                                        >
                                            <Scroll
                                                className="text-[#7ED957]"
                                                style={{ width: 'clamp(4rem,10vw,6rem)', height: 'clamp(4rem,10vw,6rem)' }}
                                                strokeWidth={1.5}
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Education and Teaching Axis Section */}
                <section className="py-20 px-4 bg-[#0A3D46] relative overflow-hidden">
                    {/* Grid Pattern Background - White opacity */}
                    <div className="absolute inset-0 opacity-[0.05]" style={{
                        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}></div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-12"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-[#FF914D] mb-4 text-right">
                                محور التربية والتعليم
                            </h2>
                            <div className="w-full h-1 bg-white/10 mb-6"></div>
                            <p className="text-2xl md:text-3xl text-white font-semibold mb-6 text-right">
                                بالعلم والمعرفة، نبني جيلاً قادراً على صنع المستقبل
                            </p>
                            <p className="text-base md:text-lg text-gray-200 leading-relaxed text-right">
                                نؤمن في جمعية الهادف بأن التعليم هو حجر الزاوية في أي مشروع تنموي حقيقي. لذلك، نضع محور التربية والتعليم في صميم استراتيجيتنا، ونسعى من خلاله إلى توفير فرص متكافئة للجميع، ومحاربة الهدر المدرسي، وتزويد الشباب بالأدوات المعرفية التي تمكنهم من تحقيق طموحاتهم.
                            </p>
                        </motion.div>

                        {/* Programs Section */}
                        <div className="mt-16 max-w-4xl mx-auto">
                            {/* Programs Grid */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            staggerChildren: 0.2,
                                        },
                                    },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                {/* Program 1 */}
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, x: -50 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                                    }}
                                    className="bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-r-4 border-[#FF914D]"
                                >
                                    <h3 className="text-xl md:text-2xl font-bold text-[#0A3D46] mb-3 text-right">
                                        برنامج دعم التمدرس
                                    </h3>
                                    <p className="text-base text-gray-600 leading-relaxed text-right">
                                        يهدف هذا البرنامج إلى تقديم المساعدة المباشرة للتلاميذ الذين يواجهون صعوبات دراسية.
                                    </p>
                                </motion.div>

                                {/* Program 2 */}
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, x: -50 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                                    }}
                                    className="bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-r-4 border-[#FF914D]"
                                >
                                    <h3 className="text-xl md:text-2xl font-bold text-[#0A3D46] mb-3 text-right">
                                        برنامج محو الأمية وتعزيز المهارات
                                    </h3>
                                    <p className="text-base text-gray-600 leading-relaxed text-right">
                                        إيماناً منا بأن التعلم حق للجميع وفي كل الأعمار، يستهدف هذا البرنامج فئة الشباب والناشئين المنقطعين عن الدراسة.
                                    </p>
                                </motion.div>

                                {/* Program 3 */}
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, x: -50 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                                    }}
                                    className="bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-r-4 border-[#FF914D]"
                                >
                                    <h3 className="text-xl md:text-2xl font-bold text-[#0A3D46] mb-3 text-right">
                                        برنامج التوجيه المدرسي والجامعي
                                    </h3>
                                    <p className="text-base text-gray-600 leading-relaxed text-right">
                                        نساعد الشباب في مرحلة اتخاذ القرارات المصيرية المتعلقة بمسارهم الدراسي والمهني.
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Expected Impact Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mt-20 text-center"
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-[#FF914D] mb-8">
                                الأثر المتوقع
                            </h3>
                            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto border-t border-white/10 pt-8">
                                الحد من الهدر المدرسي، تحسين النتائج الدراسية، وتمكين جيل من الشباب الواعي والقادر على اتخاذ قرارات مستنيرة لمستقبله.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Volunteer Work and Capacity Building Axis Section */}
                <section className="py-20 px-4 bg-white relative overflow-hidden">
                    {/* Grid Pattern Background - Dark opacity */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: 'linear-gradient(#0A3D46 1px, transparent 1px), linear-gradient(90deg, #0A3D46 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}></div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-16 text-center"
                        >
                            <div className="inline-block p-4 rounded-full bg-[#0A3D46]/5 mb-6">
                                <HandHeart className="w-16 h-16 text-[#FF914D]" strokeWidth={1.5} />
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-[#FF914D] mb-6">
                                محور العمل التطوعي وبناء القدرات
                            </h2>
                            <p className="text-2xl md:text-3xl text-[#0A3D46] font-semibold mb-8">
                                نستثمر في الإنسان... لنصنع قادة التغيير
                            </p>
                            <div className="max-w-4xl mx-auto">
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                    نؤمن بأن المتطوعين ليسوا مجرد أيد عاملة، بل هم قلب الجمعية النابض وروحها المتجددة. لذلك، لا تكتفي بدعوتهم للمشاركة، بل نطمح بالاستثمار فيهم وتزويدهم بالمهارات والمعارف التي تجعل منهم قادة فاعلين في مجتمعهم. هذا المحور هو المحرك الذي يغذي جميع محاور عملنا الأخرى وينفض استمراريتها وتطورها.
                                </p>
                            </div>
                        </motion.div>

                        {/* Programs Section - Cards */}
                        <div className="grid md:grid-cols-2 gap-8 mt-12">
                            {/* Program 1 - Training Volunteers */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-[#0A3D46] rounded-3xl p-8 shadow-xl border border-[#2AD1E3] group hover:scale-[1.02] transition-transform duration-300"
                            >
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="bg-white/10 p-3 rounded-2xl">
                                            <UserPlus className="w-8 h-8 text-[#FF914D]" />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                                            تكوين المتطوعين وتنمية المهارات
                                        </h3>
                                    </div>
                                    <p className="text-lg text-gray-200 leading-relaxed flex-grow">
                                        نحرص على أن يكون كل متطوع في جمعية الهادف سفيرًا لقضيتنا ومؤهلاً لأداء مهامه بكفاءة وروح مسؤولية عالية.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Program 2 - Community Leadership */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-[#0A3D46] rounded-3xl p-8 shadow-xl border border-[#2AD1E3] group hover:scale-[1.02] transition-transform duration-300"
                            >
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="bg-white/10 p-3 rounded-2xl">
                                            <Users className="w-8 h-8 text-[#FF914D]" />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                                            تطوير الريادة الجمعوية
                                        </h3>
                                    </div>
                                    <p className="text-lg text-gray-200 leading-relaxed flex-grow">
                                        نسعى لتمكين الشباب الطموح، ليصبحوا قادرين على إطلاق مبادراتهم الخاصة وإدارتها بثقة وكفاءة في المستقبل.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
                {/* Social Development Axis Section */}
                <section className="py-20 px-4 bg-[#0A3D46] relative overflow-hidden">
                    {/* Grid Pattern Background - White opacity */}
                    <div className="absolute inset-0 opacity-[0.05]" style={{
                        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}></div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-16 text-center"
                        >
                            <div className="inline-block p-4 rounded-full bg-white/5 mb-6">
                                <Users className="w-16 h-16 text-[#FF914D]" strokeWidth={1.5} />
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-[#FF914D] mb-6">
                                محور التنمية الاجتماعية
                            </h2>
                            <p className="text-2xl md:text-3xl text-white font-semibold mb-8">
                                تضامننا قوة... بها نرسم البسمة ونخفف المعاناة
                            </p>
                            <div className="max-w-4xl mx-auto">
                                <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                                    لأن التنمية الحقيقية لا تكتمل دون تحقيق التضامن الاجتماعي، نضع العمل الاجتماعي والإنساني في مقدمة أولوياتنا في جمعية الهادف. نؤمن بأن واجبنا يمتد إلى الوقوف بجانب الفئات الأكثر حاجة في مجتمعنا، ومد يد العون لهم، وإرساء ثقافة العطاء والتضامن بين جميع مكونات المنطقة.
                                </p>
                            </div>
                        </motion.div>

                        {/* Programs Section */}
                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                            {/* Program 1 - Charitable Convoys */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-white rounded-3xl p-8 shadow-xl border-t-8 border-[#FF914D] hover:scale-[1.02] transition-transform duration-300"
                            >
                                <div className="flex flex-col items-center text-center h-full">
                                    <div className="bg-[#0A3D46]/10 p-4 rounded-full mb-6">
                                        <Truck className="w-12 h-12 text-[#0A3D46]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#0A3D46] mb-4">
                                        القوافل الخيرية والتضامنية
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed flex-grow">
                                        نسعى للوصول إلى المناطق النائية والأسر التي تحتاج إلى دعم عاجل من خلال تنظيم قوافل إنسانية منتظمة.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Program 2 - Support for Needy Families */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white rounded-3xl p-8 shadow-xl border-t-8 border-[#2AD1E3] hover:scale-[1.02] transition-transform duration-300"
                            >
                                <div className="flex flex-col items-center text-center h-full">
                                    <div className="bg-[#0A3D46]/10 p-4 rounded-full mb-6">
                                        <HeartHandshake className="w-12 h-12 text-[#0A3D46]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#0A3D46] mb-4">
                                        دعم الأسر المعوزة
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed flex-grow">
                                        نعمل على تقديم دعم مستمر ومنظم للأسر محدودة الدخل والأيتام لضمان حياة كريمة لهم.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Program 3 - Seasonal Humanitarian Initiatives */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="bg-white rounded-3xl p-8 shadow-xl border-t-8 border-[#FF914D] hover:scale-[1.02] transition-transform duration-300"
                            >
                                <div className="flex flex-col items-center text-center h-full">
                                    <div className="bg-[#0A3D46]/10 p-4 rounded-full mb-6">
                                        <Gift className="w-12 h-12 text-[#0A3D46]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#0A3D46] mb-4">
                                        مبادرات إنسانية موسمية
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed flex-grow">
                                        نستجيب لاحتياجات مجتمعنا ونطلق حملات ومبادرات إنسانية خاصة حسب الموسم والحاجات الطارئة.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Sport and Leisure Axis Section */}
                <section className="py-20 px-4 bg-white relative overflow-hidden">
                    {/* Grid Pattern Background - Dark opacity */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: 'linear-gradient(#0A3D46 1px, transparent 1px), linear-gradient(90deg, #0A3D46 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}></div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-16 text-center"
                        >
                            <div className="inline-block p-4 rounded-full bg-[#0A3D46]/5 mb-6">
                                <Dumbbell className="w-16 h-16 text-[#FF914D]" strokeWidth={1.5} />
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-[#FF914D] mb-6">
                                محور الرياضة والترفيه
                            </h2>
                            <p className="text-2xl md:text-3xl text-[#0A3D46] font-semibold mb-8">
                                بالرياضة نصنع الأبطال... ونبني مجتمعاً حيوياً وإيجابياً
                            </p>
                            <div className="max-w-4xl mx-auto">
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                    نؤمن في جمعية الهادف بأن الرياضة ليست مجرد نشاط بدني، بل هي مدرسة حياة حقيقية يتعلم فيها الشباب قيماً أساسية كالصبر، الاحترام، روح الفريق، والمنافسة الشريفة. من خلال محور الرياضة والترفيه، نسعى إلى خلق فضاءات رياضية وترفيهية تسمح للشباب بممارسة هواياتهم، اكتشاف مواهبهم، وتطوير شخصياتهم في بيئة صحية ومحفزة.
                                </p>
                            </div>
                        </motion.div>

                        {/* Visual & Programs Split */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
                            {/* Left Side - Programs (Cards) */}
                            <div className="space-y-6 order-2 lg:order-1">
                                {/* Program 1 - Leagues */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#FF914D] hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-[#0A3D46] p-3 rounded-xl shrink-0 group-hover:bg-[#FF914D] transition-colors duration-300">
                                            <Trophy className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-[#0A3D46] mb-2">
                                                الدوريات الرياضية المنظمة
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                ننظم دوريات رياضية منتظمة في مختلف الرياضات، بهدف خلق منافسة نبيلة تسمح للشباب بإظهار مواهبهم، تطوير مهاراتهم، واكتساب قيم العمل الجماعي والانضباط.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Program 2 - Recreation Days */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#FF914D] hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-[#0A3D46] p-3 rounded-xl shrink-0 group-hover:bg-[#FF914D] transition-colors duration-300">
                                            <Gamepad2 className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-[#0A3D46] mb-2">
                                                الأيام الترفيهية المفتوحة
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                ننظم أياماً ترفيهية مفتوحة للأطفال والشباب، مليئة بالأنشطة والألعاب التي تجمع بين المتعة والتعلم. نؤمن بأن اللعب هو وسيلة طبيعية لتطوير المهارات الاجتماعية والإبداعية.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Program 3 - Sport Culture */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#FF914D] hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-[#0A3D46] p-3 rounded-xl shrink-0 group-hover:bg-[#FF914D] transition-colors duration-300">
                                            <Footprints className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-[#0A3D46] mb-2">
                                                نشر الثقافة الرياضية
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                نسعى إلى نشر ثقافة رياضية إيجابية، من خلال ورشات توعوية وأنشطة تبرز أهمية الرياضة كأسلوب حياة صحي ومصدر للطاقة الإيجابية.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Side - Dynamic Composition */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative flex justify-center items-center h-96 order-1 lg:order-2"
                            >
                                {/* Central Circle */}
                                <div className="absolute w-64 h-64 bg-[#0A3D46] rounded-full opacity-5 animate-pulse"></div>
                                <div className="absolute w-48 h-48 bg-[#0A3D46] rounded-full opacity-10"></div>

                                {/* Main Visual */}
                                <div className="relative z-10 bg-white p-8 rounded-full shadow-2xl border-4 border-[#FF914D]">
                                    <Dumbbell className="w-20 h-20 text-[#0A3D46]" />
                                </div>

                                {/* Floating Icons */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
                                >
                                    <Goal className="w-8 h-8 text-[#FF914D]" />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    className="absolute bottom-10 left-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
                                >
                                    <PartyPopper className="w-8 h-8 text-[#FF914D]" />
                                </motion.div>

                                <motion.div
                                    animate={{ x: [0, 10, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    className="absolute top-20 left-0 bg-white p-3 rounded-2xl shadow-xl border border-gray-100"
                                >
                                    <Trophy className="w-6 h-6 text-[#0A3D46]" />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Looking Forward Footer Section */}
                <section className="py-20 px-4 bg-[#f8fafc] border-t border-gray-200">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0A3D46] mb-6">
                                نحو تنمية شاملة ومستدامة
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                                من خلال هذه المحاور الستة، نسعى إلى بناء مجتمع متماسك، واعٍ، ومبدع. نؤمن بأن التنمية الحقيقية تبدأ من الشباب، وأن كل مجال من هذه المجالات يساهم في تشكيل مستقبل أفضل لمنطقتنا ووطننا.
                            </p>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Axes
