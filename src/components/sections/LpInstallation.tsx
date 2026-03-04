import { AnimateInView } from "../AnimateInView";

export function LpInstallation() {
    return (
        <section className="py-24 bg-background-light border-y border-gray-200">
            <div className="container mx-auto px-6">
                <AnimateInView className="mb-16">
                    <span className="text-primary font-bold tracking-widest text-sm uppercase block mb-2">
                        SIMPLES E RÁPIDO
                    </span>
                    <h2 className="text-6xl text-gray-900 font-bold leading-none">
                        INSTALAÇÃO <br />
                        <span className="text-gray-400">PLUG &amp; PLAY</span>
                    </h2>
                </AnimateInView>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <AnimateInView delay={0.1} className="lg:col-span-2 bg-white rounded-xl shadow-md border border-gray-200 p-8 relative overflow-hidden h-full">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary transform translate-x-12 -translate-y-12 rotate-45"></div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold font-display text-xl">
                                5
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900">
                                VIAS DE CONEXÃO
                            </h3>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-12 py-8 bg-gray-50 rounded-lg border border-gray-200">
                            <div className="flex gap-1">
                                <div className="w-4 h-12 bg-gray-300 rounded-sm"></div>
                                <div className="w-4 h-12 bg-gray-300 rounded-sm"></div>
                                <div className="w-4 h-12 bg-primary shadow-[0_0_15px_rgba(255,102,0,0.6)] rounded-sm"></div>
                                <div className="w-4 h-12 bg-gray-300 rounded-sm"></div>
                                <div className="w-4 h-12 bg-gray-300 rounded-sm"></div>
                            </div>
                            <ul className="space-y-3 text-sm font-medium">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="w-2 h-2 rounded-full bg-yellow-400"></span>{" "}
                                    Pisca
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="w-2 h-2 rounded-full bg-red-600"></span>{" "}
                                    Freio
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="w-2 h-2 rounded-full bg-red-400"></span>{" "}
                                    Lanterna
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="w-2 h-2 rounded-full border border-gray-400"></span>{" "}
                                    Ré
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="w-2 h-2 rounded-full bg-white border border-gray-300"></span>{" "}
                                    Terra
                                </li>
                            </ul>
                        </div>
                        <p className="mt-8 text-sm text-gray-600 leading-relaxed max-w-2xl">
                            Conector padrão automotivo de 5 vias. Compatível com chicotes
                            originais da maioria das montadoras sem necessidade de adaptação
                            ou corte de fios.
                        </p>
                    </AnimateInView>
                    <AnimateInView delay={0.2} className="bg-primary text-white rounded-xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div>
                            <div className="font-display font-bold text-7xl opacity-90">
                                15
                            </div>
                            <h3 className="font-display font-bold text-3xl uppercase tracking-wider mb-4">
                                MINUTOS
                            </h3>
                            <p className="text-white/80 font-medium">
                                Tempo médio de instalação completa do par.
                            </p>
                        </div>
                        <div className="mt-12 pt-8 border-t border-white/20 flex items-center gap-4">
                            <span className="material-icons text-3xl">build</span>
                            <span className="font-display font-bold text-xl tracking-wide uppercase">
                                FERRAMENTAS BÁSICAS
                            </span>
                        </div>
                    </AnimateInView>
                </div>
            </div>
        </section>
    );
}
