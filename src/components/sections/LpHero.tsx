import { motion } from "framer-motion";
import { AnimateInView } from "../AnimateInView";

export function LpHero() {
    return (
        <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-dark">
            <div className="absolute inset-0 z-0">
                <img
                    alt="Dark atmospheric road at night"
                    className="w-full h-full object-cover opacity-40"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRQUCsJ_mfzv2OnJFSL4nFPl4jz5g4uW1kaKi3Jd4P9EQ8ELgwiQysiipaNbPagd4BFSkXsjp8aXJxeHzP29c5HzOTAwfjMk8pBva5xczC9o_ICzmQpSU2va0ox3pTGpc_rqHMhP47fkjOsJbx63Y1vtVkPvrkiftHfVQiu4MLaotiJor7kDsSjFaSwybSaVms1oqf-G1UbK94SdJGy1O39YH96Ws7tkn6mtJxYht1tJmvt-tWv03Xev8cicI9ob2jFTgHDEDhlGg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
            </div>
            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-32 lg:mt-16">
                <AnimateInView className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className="h-1 w-12 bg-primary"></div>
                        <span className="text-gray-400 font-bold tracking-[0.2em] text-sm uppercase">
                            Performance e Durabilidade
                        </span>
                    </div>
                    <h1 className="text-7xl md:text-9xl font-bold leading-none text-white">
                        DIAMOND <br />
                        <span className="text-primary text-glow">LED</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-lg font-light leading-relaxed">
                        Design agressivo e durabilidade extrema. A evolução da iluminação
                        para veículos pesados. Compatível com Ford, VW e Guerra.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-primary hover:bg-orange-600 text-white font-display text-2xl font-bold py-3 px-8 rounded shadow-lg glow-orange transition-colors"
                        >
                            COMPRAR AGORA
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="border-2 border-white/20 hover:border-white/50 text-white font-display text-2xl font-bold py-3 px-8 rounded backdrop-blur-sm transition-colors"
                        >
                            VER DETALHES
                        </motion.button>
                    </div>
                </AnimateInView>
                <AnimateInView delay={0.15} className="relative flex justify-center lg:justify-end w-full">
                    <div className="absolute top-0 right-4 lg:-right-4 z-20 bg-primary text-white p-6 transform rotate-3 shadow-xl">
                        <div className="font-display font-bold text-5xl leading-none">
                            12/24V
                        </div>
                        <div className="font-display font-bold text-2xl tracking-[0.3em] text-center mt-1">
                            BIVOLT
                        </div>
                    </div>
                    <div className="relative w-full max-w-lg lg:max-w-2xl mt-12 lg:mt-0 flex justify-center items-center group">
                        <img
                            alt="Lanterna Diamond LED Multivario"
                            className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(255,102,0,0.2)] transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-4"
                            src="/images/diamond_led/diamond_led_multivario.webp"
                        />
                    </div>
                </AnimateInView>
            </div>
        </header>
    );
}
