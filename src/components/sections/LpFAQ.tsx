import { AnimateInView } from "../AnimateInView";

export function LpFAQ() {
    const faqs = [
        {
            question: "O kit vem com as duas lanternas (direita e esquerda)?",
            answer: "Sim. O anúncio é para um par — lado direito e lado esquerdo.",
        },
        {
            question: "As lâmpadas são de LED mesmo ou são incandescentes?",
            answer: "São totalmente de LED, com alta durabilidade e baixo consumo de energia.",
        },
        {
            question: "Ilumina bem à noite?",
            answer: "Sim, o LED Diamond II tem excelente brilho e visibilidade, mesmo à distância.",
        },
        {
            question: "É bivolt (12V e 24V)?",
            answer: "Sim, funciona tanto em sistemas 12V quanto 24V automaticamente.",
        },
        {
            question: "Já vem pronta pra instalar ou precisa adaptar chicote?",
            answer: "Está pronta para instalar. Só conectar no chicote da carreta.",
        },
        {
            question: "Vem com conectores plug and play?",
            answer: "Sim, possui encaixe padrão plug and play, o que facilita a instalação.",
        },
        {
            question: "A lente é de acrílico ou policarbonato?",
            answer: "A lente é de policarbonato, mais resistente a impactos e raios UV.",
        },
        {
            question: "É resistente à água e poeira?",
            answer: "Sim, possui vedação contra água e poeira (nível IP67), ideal para estrada.",
        },
        {
            question: "Pode ser usada em carreta trucada ou bitrem?",
            answer: "Pode sim, desde que use o mesmo padrão de ligação elétrica.",
        },
        {
            question: "A carcaça é de metal ou plástico?",
            answer: "A carcaça é de plástico ABS reforçado, leve e resistente.",
        },
        {
            question: "Enferruja com o tempo?",
            answer: "Não, pois não possui partes metálicas expostas.",
        },
        {
            question: "Tem certificado do Inmetro?",
            answer: "Sim, o produto segue os padrões exigidos pelo Inmetro.",
        },
        {
            question: "Qual a diferença da versão Diamond pra outra comum?",
            answer: "A Diamond II tem acabamento mais moderno, melhor vedação e LED com brilho mais intenso.",
        },
        {
            question: "É original Guerra ou paralela?",
            answer: "É modelo compatível (paralela premium), ideal para reposição.",
        },
        {
            question: "Qual a marca do LED?",
            answer: "Usa tecnologia de LED de alta performance, com longa vida útil.",
        },
        {
            question: "Tem garantia? De quanto tempo?",
            answer: "Sim, 3 meses de garantia contra defeitos de fabricação.",
        },
        {
            question: "Se queimar um LED, dá pra trocar só a placa?",
            answer: "Não. Por ser vedada, a substituição é feita trocando a lanterna completa.",
        },
        {
            question: "Vem com suporte de fixação ou precisa comprar separado?",
            answer: "Não acompanha suporte, vai apenas o corpo das lanternas.",
        },
        {
            question: "Vem com parafusos e porcas?",
            answer: "Não acompanha parafusos, pois o tipo pode variar conforme a carreta.",
        },
        {
            question: "O frete é grátis pra minha região?",
            answer: "Depende da localização. O site calcula automaticamente no carrinho de compras.",
        },
        {
            question: "Posso retirar em loja física?",
            answer: "Se estiver comprando pela Multivario, normalmente o envio é pelos Correios ou transportadora. Consulte a opção de retirada.",
        },
        {
            question: "A luz de seta e freio são separadas?",
            answer: "Sim, o conjunto tem funções individuais: freio, seta e lanterna.",
        },
        {
            question: "Ela tem luz de ré integrada?",
            answer: "Não, esse modelo não inclui luz de ré.",
        },
        {
            question: "Ilumina bem mesmo com eletrônica de 24V?",
            answer: "Sim, o brilho é estável e forte tanto em 12V quanto 24V.",
        },
        {
            question: "Tem consumo baixo (economiza energia da bateria)?",
            answer: "Sim, o LED consome bem menos que lâmpadas convencionais.",
        },
        {
            question: "A lente desbota com o sol?",
            answer: "Não. A lente tem proteção UV para evitar amarelar.",
        },
        {
            question: "Quanto mede de largura e altura?",
            answer: "Cada lanterna mede aproximadamente 39 cm de largura por 13 cm de altura.",
        },
        {
            question: "Se entrar água, tem assistência ou troca?",
            answer: "Sim, dentro do prazo de garantia o produto é substituído se for defeito de vedação.",
        },
        {
            question: "Vem com chicote elétrico incluso?",
            answer: "Não, o chicote é vendido separadamente.",
        },
        {
            question: "É fácil de instalar sozinho?",
            answer: "Sim, basta conectar os fios e fixar no suporte original.",
        },
        {
            question: "Vocês têm vídeo mostrando a instalação e funcionamento?",
            answer: "Sim, alguns vendedores disponibilizam vídeo no site ou no YouTube.",
        },
        {
            question: "A entrega é rápida pro Nordeste?",
            answer: "Sim, o envio é imediato após a confirmação do pagamento. Prazo depende do CEP.",
        },
        {
            question: "Posso pagar por Pix?",
            answer: "Sim, aceitamos Pix, cartão e boleto.",
        },
        {
            question: "Vocês emitem nota fiscal?",
            answer: "Sim, todos os produtos acompanham nota fiscal.",
        },
        {
            question: "Funciona em carretas de alumínio também?",
            answer: "Sim, sem problema. Basta aterrar o negativo corretamente.",
        },
        {
            question: "Tem opção de lente fumê ou clara?",
            answer: "Esse modelo é tradicional com lente vermelha e âmbar, mas há versões fumê sob consulta.",
        },
    ];

    return (
        <section className="py-24 bg-[#080808] border-t border-white/5">
            <div className="container mx-auto px-6 max-w-4xl">
                <AnimateInView className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest text-sm uppercase block mb-2">
                        SUPORTE TÉCNICO
                    </span>
                    <h2 className="text-5xl text-white font-bold">
                        DÚVIDAS <span className="text-primary">FREQUENTES</span>
                    </h2>
                </AnimateInView>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AnimateInView key={index} delay={0.05 + (index % 5) * 0.05}>
                            <details className="group bg-background-dark border border-white/10 rounded-lg overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors">
                                    <h4 className="text-xl pr-8">{faq.question}</h4>
                                    <span className="material-icons text-primary group-open:rotate-180 transition-transform flex-shrink-0">
                                        expand_more
                                    </span>
                                </summary>
                                <div className="p-6 pt-0 text-gray-400 border-t border-white/5">
                                    <p className="leading-relaxed">{faq.answer}</p>
                                </div>
                            </details>
                        </AnimateInView>
                    ))}
                </div>
            </div>
        </section>
    );
}
