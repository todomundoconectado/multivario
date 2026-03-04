import { AnimateInView } from "../AnimateInView";

export function LpTestimonials() {
    const testimonialImages = [
        "/images/diamond_led/depoimentos/1dep.webp",
        "/images/diamond_led/depoimentos/2dep.webp",
        "/images/diamond_led/depoimentos/3dep.webp",
        "/images/diamond_led/depoimentos/4dep.webp",
    ];

    return (
        <section className="py-24 bg-background-dark">
            <div className="container mx-auto px-6">
                <AnimateInView className="text-center mb-16">
                    <span className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-3 block">
                        APROVADO NA ESTRADA
                    </span>
                    <h2 className="text-5xl md:text-6xl text-white font-bold">
                        O QUE DIZEM OS <span className="text-primary">MOTORISTAS</span>
                    </h2>
                </AnimateInView>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {testimonialImages.map((image, index) => (
                        <AnimateInView
                            key={index}
                            delay={0.1 + index * 0.1}
                            className="rounded-xl overflow-hidden shadow-2xl border border-white/5 bg-white/5"
                        >
                            <img
                                alt={`Depoimento ${index + 1}`}
                                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                                src={image}
                            />
                        </AnimateInView>
                    ))}
                </div>
            </div>
        </section>
    );
}
