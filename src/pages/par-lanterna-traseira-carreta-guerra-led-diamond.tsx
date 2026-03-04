import { LpNavbar } from "../components/sections/LpNavbar";
import { LpHero } from "../components/sections/LpHero";
import { LpFeatures } from "../components/sections/LpFeatures";
import { LpInstallation } from "../components/sections/LpInstallation";
import { LpHowToInstall } from "../components/sections/LpHowToInstall";
import { LpCompatibility } from "../components/sections/LpCompatibility";
import { LpFAQ } from "../components/sections/LpFAQ";
import { LpTestimonials } from "../components/sections/LpTestimonials";
import { LpCTA } from "../components/sections/LpCTA";
import { LpFooter } from "../components/sections/LpFooter";

export default function LpDiamondLed() {
  return (
    <div className="flex flex-col min-h-screen">
      <LpNavbar />
      <main>
        <LpHero />
        <LpFeatures />
        <LpInstallation />
        <LpHowToInstall />
        <LpCompatibility />
        <LpFAQ />
        <LpTestimonials />
        <LpCTA />
      </main>
      <LpFooter />
    </div>
  );
}
