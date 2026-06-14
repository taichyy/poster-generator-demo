import Hero from "@/components/hero";
import Offer from "@/components/Offer";
import Footer from "@/components/footer";
import WhyChoose from "@/components/why-choose/why-choose";
import AnalyticsFeature from "@/components/analytics-feature";
import ResponsiveNav from "@/components/nav-bar/responsive-nav/responsive-nav";

// Theme lock: dark (zinc-950) for nav+hero+features+CTA, then light (white) for editor section + footer
// This is intentional: one theme switch at the "analytics" section break — not random alternation

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <ResponsiveNav />
            <Hero />
            <WhyChoose />
            <AnalyticsFeature />
            <Offer />
            <Footer />
        </div>
    );
};

export default HomePage;
