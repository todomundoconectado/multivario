export function LpFooter() {
    return (
        <footer className="bg-black text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <img
                        alt="Multivario Logo"
                        className="w-[680px] h-[170px] object-contain object-left"
                        src="/images/diamond_led/logotipo.webp"
                    />
                </div>
                <div className="text-gray-500 text-sm text-center md:text-right">
                    © {new Date().getFullYear()} Multivario CNPJ: 08.645.725/0001-49.
                    Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}
