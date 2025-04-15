import AboutSection from "@/components/about-section";
import BenefitsSection from "@/components/benefits-section";
import SalesCalculator from "@/components/calculator";
import FeaturesSection from "@/components/features-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import MosaicGrid from "@/components/mosaic-grid";
import PaymentMethods from "@/components/payment-methods";
import PricingPlans from "@/components/pricing-plans";
import ProductComparison from "@/components/product-comparison";
import ProductShowcase from "@/components/product-showcase-fixed";
import StatsSection from "@/components/stats-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function Home() {
    return (
        <>
            <div className="container mx-auto max-w-[1350px]">
                <HeroSection />
                <PaymentMethods />
                <BenefitsSection />
                <StatsSection />
                <PricingPlans />
                <SalesCalculator />
                <ProductComparison />
                <TestimonialsSection />
                <MosaicGrid />
                <FeaturesSection />
                <AboutSection />
                <Footer />
            </div>
        </>
    );
}