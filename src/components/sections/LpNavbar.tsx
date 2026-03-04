export function LpNavbar() {
    return (
        <nav className="absolute top-0 w-full z-50 py-6">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img
                        alt="Multivario Logo"
                        className="w-[150px] sm:w-[200px] md:w-[350px] lg:w-[680px] h-auto lg:h-[170px] object-contain object-left"
                        src="/images/diamond_led/logotipo.webp"
                    />
                </div>
                <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    <span className="material-icons text-primary">chat_bubble</span>
                    <span className="text-white text-sm font-semibold tracking-wide">
                        ATENDIMENTO ONLINE
                    </span>
                </div>
            </div>
        </nav>
    );
}
