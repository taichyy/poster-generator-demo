import Hero from "@/components/hero"
import Offer from "@/components/Offer";
import Footer from "@/components/footer";
import WhyChoose from "@/components/why-choose/why-choose";
import AnalyticsFeature from "@/components/analytics-feature";
import ResponsiveNav from "@/components/nav-bar/responsive-nav/responsive-nav";

const HomePage = () => {
    return (
        <div className="flex flex-col h-screen">
            <ResponsiveNav />
            <Hero />
            <WhyChoose />
            <AnalyticsFeature />
            <Offer />
            <Footer />
        </div>
    )
}

export default HomePage