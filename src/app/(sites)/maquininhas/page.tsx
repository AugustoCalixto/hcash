import type { Metadata } from "next"
import BenefitsSection from "@/components/benefits-section"
import SalesCalculator from "@/components/calculator"
import FeaturesSection from "@/components/features-section"
import HeroSection from "@/components/hero-section"
import MosaicGrid from "@/components/mosaic-grid"
import PaymentMethods from "@/components/payment-methods"
import PricingPlans from "@/components/pricing-plans"
import PricingTable from "@/components/pricing-table"
import ProductComparison from "@/components/product-comparison"
import StatsSection from "@/components/stats-section"
import TestimonialsSection from "@/components/testimonials-section"

export const metadata: Metadata = {
  title: "Maquininhas Herocash Brasil | Taxas e Planos",
  description:
    "As melhores maquininhas de cartão com taxas competitivas, simulador de vendas e planos para o seu negócio.",
}

export default function MaquininhasPage() {
  return (
    <div className="container mx-auto max-w-[1350px] px-4">
      <HeroSection />
      <PaymentMethods />
      <BenefitsSection />
      <StatsSection />
      <PricingTable />
      <SalesCalculator />
      <PricingPlans />
      <ProductComparison />
      <TestimonialsSection />
      <MosaicGrid />
      <FeaturesSection />
    </div>
  )
}
