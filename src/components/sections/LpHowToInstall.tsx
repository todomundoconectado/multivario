import { AnimateInView } from "../AnimateInView";
import { motion } from "framer-motion";

export function LpHowToInstall() {
    const steps = [
        {
            number: "1",
            title: "Preparação",
            description:
                "Desconecte a bateria do veículo e remova as lanternas antigas usando chaves compatíveis.",
        },
        {
            number: "2",
            title: "Conexão do Chicote",
            description:
                "Conecte o plugue de 5 vias da Diamond LED ao chicote original do caminhão. O encaixe é direto.",
        },
        {
            number: "3",
            title: "Fixação e Teste",
            description:
                "Aparafuse a nova lanterna no suporte, reconecte a bateria e teste todas as funções de luz.",
        },
    ];

    return (
        <section className="py-24 bg-background-light border-y border-gray-200">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <AnimateInView className="relative w-full max-w-[360px] mx-auto aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800">
                        {/* YouTube embedded shorts player with autoplay, muted to allow autoplay without interaction, loop, and hidden controls */}
                        <iframe
                            className="w-full h-full object-cover"
                            src="https://www.youtube.com/embed/u5orhfoqPPg?autoplay=1&mute=1&loop=1&playlist=u5orhfoqPPg&controls=0&showinfo=0&rel=0&modestbranding=1"
                            title="Instalação Diamond LED"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </AnimateInView>
                    <div className="space-y-8">
                        <AnimateInView delay={0.1}>
                            <span className="text-primary font-bold tracking-widest text-sm uppercase block mb-2">
                                PASSO A PASSO
                            </span>
                            <h2 className="text-5xl font-bold text-gray-900 mb-8">
                                COMO INSTALAR NA <span className="text-primary">PRÁTICA</span>
                            </h2>
                        </AnimateInView>
                        <div className="space-y-8">
                            {steps.map((step, index) => (
                                <AnimateInView
                                    key={step.number}
                                    delay={0.2 + index * 0.2}
                                    className="flex gap-6"
                                >
                                    <motion.div
                                        initial={{ backgroundColor: "#e5e7eb", color: "#FF6600" }}
                                        animate={{
                                            backgroundColor: ["#e5e7eb", "#FF6600", "#e5e7eb"],
                                            color: ["#FF6600", "#ffffff", "#FF6600"],
                                        }}
                                        transition={{
                                            duration: 6,
                                            times: [0, 0.1, 1],
                                            delay: 0.5 + index * 2.0, // Staggered by 2 seconds each
                                            repeat: Infinity,
                                            repeatDelay: 2
                                        }}
                                        className="w-12 h-12 rounded-full flex items-center justify-center font-display text-2xl font-bold shrink-0"
                                    >
                                        {step.number}
                                    </motion.div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                                            {step.title}
                                        </h4>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                </AnimateInView>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
