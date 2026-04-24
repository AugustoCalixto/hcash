import AboutSection from "@/components/about-section";
import BenefitsSection from "@/components/benefits-section";
import SalesCalculator from "@/components/calculator";
import FeaturesSection from "@/components/features-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import MosaicGrid from "@/components/mosaic-grid";
import PaymentMethods from "@/components/payment-methods";
import PricingPlans from "@/components/pricing-plans";
import PricingTable from "@/components/pricing-table";
import ProductComparison from "@/components/product-comparison";
import StatsSection from "@/components/stats-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function Home() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <StatsSection />
            <PaymentMethods />
            <ProductComparison />
            <SalesCalculator />
            <PricingPlans />
            <PricingTable />
            <BenefitsSection />
            <FeaturesSection />
            <AboutSection />
            <TestimonialsSection />
            <MosaicGrid />
            <Footer />
        </main>
    );
}