import { AnimateInView } from "../AnimateInView";

export function LpCTA() {
    return (
        <section className="py-20 bg-background-light border-t border-gray-200">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
                <AnimateInView className="lg:w-1/2">
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">
                        FICOU ALGUMA{" "}
                        <span className="text-primary border-b-4 border-primary">DÚVIDA?</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-lg">
                        Nossa equipe técnica especializada está pronta para auxiliar na
                        escolha e instalação do seu kit Diamond.
                    </p>
                    <a
                        className="bg-background-dark hover:bg-[#222222] border-l-4 border-green-500 rounded p-4 flex items-center justify-between shadow-sm transition-all group max-w-md"
                        href="#"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-green-900/30 flex items-center justify-center">
                                <i className="material-icons text-green-400">chat</i>
                            </div>
                            <div>
                                <div className="font-bold text-white font-display text-xl uppercase">
                                    Fale no Whatsapp
                                </div>
                                <div className="text-xs text-gray-400">
                                    Resposta em até 5 minutos
                                </div>
                            </div>
                        </div>
                        <i className="material-icons text-gray-400 group-hover:translate-x-1 transition-transform">
                            arrow_forward
                        </i>
                    </a>
                </AnimateInView>
                <AnimateInView delay={0.2} className="lg:w-1/2 flex justify-center lg:justify-end">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center p-8 relative bg-white shadow-xl">
                        <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                        <div className="text-7xl font-bold text-primary font-display leading-none tracking-tighter">
                            3MESES
                        </div>
                        <div className="text-2xl font-bold text-gray-900 font-display uppercase tracking-widest mt-2 mb-2">
                            GARANTIA TOTAL
                        </div>
                        <p className="text-sm text-gray-600">
                            Contra defeitos de fabricação e infiltração.
                        </p>
                    </div>
                </AnimateInView>
            </div>
        </section>
    );
}
