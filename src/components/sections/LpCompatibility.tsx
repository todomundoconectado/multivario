import { useState, useMemo } from "react";
import { AnimateInView } from "../AnimateInView";
import { motion } from "framer-motion";

const COMPATIBILITY_DATA = [
    {
        brand: "MERCEDES-BENZ",
        models: [
            "Actros", "Atego", "Axor", "Accelo", "Atron", "L608", "L709", "L710",
            "L1113", "L1114", "L1118", "L1214", "L1313", "L1318", "L1418", "L1513",
            "L1516", "L1518", "L1520", "L1525", "L1620", "L1621", "L1625", "L1630",
            "L1632", "L1634", "L1718", "L1720", "L1721", "L1723", "L1725", "L1730",
            "L1734", "L1935", "L1938", "LS1313", "LS1316", "LS1519", "LS1525",
            "LS1630", "LS1634", "LS1935", "LS1938",
        ],
    },
    {
        brand: "VOLKSWAGEN",
        models: [
            "Delivery Express", "Delivery 6.160", "Delivery 9.170", "Delivery 11.180",
            "Delivery 13.180", "Delivery 11.180 4x4", "Worker 8.120", "Worker 8.150",
            "Worker 9.150", "Worker 13.180", "Worker 15.180", "Worker 17.180",
            "Worker 17.220", "Worker 23.220", "Worker 26.220", "Constellation 13.180",
            "Constellation 15.190", "Constellation 17.190", "Constellation 17.230",
            "Constellation 17.260", "Constellation 19.320", "Constellation 24.250",
            "Constellation 24.260", "Constellation 24.280", "Constellation 25.360",
            "Constellation 26.260", "Constellation 26.280", "Constellation 31.260",
            "Constellation 31.280", "Constellation 31.330", "Constellation 31.390",
            "Meteor 28.460", "Meteor 29.520",
        ],
    },
    {
        brand: "VOLVO",
        models: [
            "FH", "FH12", "FH13", "FH16", "FM", "FMX", "VM 210", "VM 220", "VM 260",
            "VM 270", "VM 310", "VM 330",
        ],
    },
    {
        brand: "SCANIA",
        models: [
            "P94", "P114", "P124", "P230", "P250", "P270", "P310", "P340", "G270",
            "G310", "G360", "G380", "R420", "R440", "R450", "R480", "R500", "R540",
            "S500", "S540",
        ],
    },
    {
        brand: "IVECO",
        models: [
            "Daily 35S14", "Daily 45S17", "Daily 55C17", "Daily 70C17", "Tector 9-190",
            "Tector 11-190", "Tector 17-280", "Tector 24-280", "Tector 26-280",
            "Stralis", "Hi-Way", "Cursor",
        ],
    },
    {
        brand: "FORD",
        models: [
            "Cargo 712", "Cargo 815", "Cargo 816", "Cargo 1119", "Cargo 1317",
            "Cargo 1319", "Cargo 1419", "Cargo 1517", "Cargo 1519", "Cargo 1717",
            "Cargo 1719", "Cargo 1723", "Cargo 1933", "Cargo 2429", "Cargo 2623",
            "Cargo 2629", "Cargo 2631", "Cargo 3133",
        ],
    },
];

export function LpCompatibility() {
    const [search, setSearch] = useState("");
    const [selectedModel, setSelectedModel] = useState<string | null>(null);

    const filteredData = useMemo(() => {
        if (!search.trim()) return COMPATIBILITY_DATA;

        const lowerSearch = search.toLowerCase();

        return COMPATIBILITY_DATA.map((brandGroup) => {
            // Se a marca der match, mostra todos os modelos da marca
            if (brandGroup.brand.toLowerCase().includes(lowerSearch)) {
                return brandGroup;
            }

            // Senão filtra apenas os modelos que dão match
            const filteredModels = brandGroup.models.filter((model) =>
                model.toLowerCase().includes(lowerSearch)
            );

            return {
                ...brandGroup,
                models: filteredModels,
            };
        }).filter((group) => group.models.length > 0);
    }, [search]);

    return (
        <section className="py-24 bg-background-light border-y border-gray-200">
            <div className="container mx-auto px-6">
                <AnimateInView className="text-center mb-16 max-w-4xl mx-auto space-y-8">
                    <div>
                        <span className="text-primary font-bold tracking-widest text-sm uppercase block mb-2">
                            AMPLA COBERTURA
                        </span>
                        <h2 className="text-5xl text-gray-900 font-bold mb-6">
                            COMPATIBILIDADE DA LANTERNA TRASEIRA LED DIAMOND 12/24V
                        </h2>
                    </div>

                    {/* Novo texto de compatibilidade entre as seções */}
                    <div className="prose prose-lg prose-gray mx-auto text-left space-y-4">
                        <p>
                            A <strong>Lanterna Traseira LED Diamond</strong> foi desenvolvida com <strong>padrão universal</strong>, permitindo sua instalação em diversos tipos de veículos pesados e implementos rodoviários. Por ser <strong>bivolt (12V e 24V)</strong> e utilizar sistema de conexão com 5 vias, ela pode ser aplicada em praticamente qualquer carreta, semirreboque, carroceria ou reboque que utilize esse padrão elétrico.
                        </p>
                        <p>
                            Isso significa que a compatibilidade <strong>não depende de um modelo específico de caminhão</strong>. A lanterna funciona em implementos acoplados a veículos de diversas marcas, desde que o sistema elétrico seja 12V ou 24V e utilize o esquema de fios padrão para freio, seta, posição e ré.
                        </p>
                        <p>
                            Esse tipo de lanterna é amplamente utilizado em carretas e implementos de marcas como <strong>Guerra, Noma, Facchini, Librelato, Pastre, Randon</strong> e outras fabricantes de implementos rodoviários.
                        </p>
                        <p>
                            Também é comum sua aplicação em caminhões e cavalos mecânicos das principais montadoras do mercado, como <strong>Mercedes-Benz, Volkswagen, Volvo, Scania, Iveco e Ford</strong>, além de trailers, carretinhas, reboques e diferentes tipos de carrocerias.
                        </p>
                        <p>
                            Graças ao seu padrão universal e ao sistema completo de sinalização em LED (freio, seta, posição e ré), a Lanterna LED Diamond oferece uma solução <strong>prática, segura e versátil</strong> para reposição ou instalação em diversos tipos de veículos e implementos utilizados no transporte rodoviário.
                        </p>
                    </div>
                </AnimateInView>

                <AnimateInView delay={0.1} className="max-w-xl mx-auto mb-16 relative">
                    <input
                        className="w-full bg-white border border-gray-300 rounded-lg shadow-sm py-4 pl-6 pr-14 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-colors text-lg"
                        placeholder="Pesquisar modelo ou marca. Ex: Volvo FH"
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="absolute right-2 top-2 bottom-2 w-12 flex items-center justify-center text-primary">
                        <span className="material-icons text-2xl">search</span>
                    </div>
                </AnimateInView>

                <div className="max-w-6xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8">
                    {filteredData.length === 0 ? (
                        <div className="text-center text-gray-500 py-8 col-span-full">
                            Nenhum modelo encontrado para "{search}". Tente usar apenas a marca.
                        </div>
                    ) : (
                        filteredData.map((group, groupIndex) => (
                            <AnimateInView
                                key={group.brand}
                                delay={0.1 + groupIndex * 0.05}
                                className="break-inside-avoid mb-8"
                            >
                                <details
                                    className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm [&_summary::-webkit-details-marker]:hidden"
                                    open={search.trim().length > 0 ? true : undefined}
                                >
                                    <summary className="font-display font-bold text-2xl text-gray-900 border-b border-gray-100 pb-3 mb-4 sticky top-0 bg-white z-10 flex justify-between items-center cursor-pointer hover:text-primary transition-colors">
                                        {group.brand}
                                        <span className="material-icons text-primary group-open:rotate-180 transition-transform flex-shrink-0">
                                            expand_more
                                        </span>
                                    </summary>
                                    <ul className="space-y-2">
                                        {group.models.map((model) => {
                                            const isSelected = selectedModel === `${group.brand}-${model}`;
                                            return (
                                                <li
                                                    key={model}
                                                    onClick={() => setSelectedModel(isSelected ? null : `${group.brand}-${model}`)}
                                                    className={`
                          flex items-center justify-between px-4 py-2 rounded-md cursor-pointer transition-all
                          ${isSelected
                                                            ? "bg-green-50 text-green-700 font-semibold ring-1 ring-green-500 shadow-sm"
                                                            : "text-gray-600 hover:bg-gray-50 hover:text-primary"}
                        `}
                                                >
                                                    <span className="text-sm md:text-base">{model}</span>
                                                    {isSelected && (
                                                        <motion.span
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            className="material-icons text-green-600 !text-xl"
                                                        >
                                                            check_circle
                                                        </motion.span>
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </details>
                            </AnimateInView>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
