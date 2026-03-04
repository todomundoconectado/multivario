import { AnimateInView } from "../AnimateInView";

export function LpFeatures() {
    const features = [
        {
            icon: "shield",
            title: "RESISTÊNCIA ABS",
            description:
                "Carcaça reforçada em polímero de alta densidade, resistente a impactos e vibrações extremas nas estradas mais difíceis.",
        },
        {
            icon: "visibility",
            title: "LENTE ACRÍLICA",
            description:
                "Acabamento cristalino com proteção UV que não amarela com o tempo. Brilho intenso para máxima visibilidade.",
        },
        {
            icon: "water_drop",
            title: "PROTEÇÃO IP67",
            description:
                "Totalmente vedada contra poeira e imersão temporária em água. Pronta para qualquer clima e terreno.",
        },
    ];

    return (
        <section className="py-20 bg-surface-dark relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-carbon"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <AnimateInView key={index} delay={index * 0.1}>
                            <div className="bg-background-dark p-8 border-l-4 border-primary shadow-xl hover:-translate-y-2 transition-transform duration-300 group h-full">
                                <div className="w-16 h-16 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                    <span className="material-icons text-4xl text-white group-hover:text-primary transition-colors">
                                        {feature.icon}
                                    </span>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </AnimateInView>
                    ))}
                </div>
            </div>
        </section>
    );
}
