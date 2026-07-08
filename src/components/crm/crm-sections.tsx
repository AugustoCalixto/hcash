import { CrmBenefits } from "@/components/crm/crm-benefits"
import { CrmCta } from "@/components/crm/crm-cta"
import { CrmFeatures } from "@/components/crm/crm-features"
import { CrmHero } from "@/components/crm/crm-hero"
import { CrmHowItWorks } from "@/components/crm/crm-how-it-works"
import { CrmPricing } from "@/components/crm/crm-pricing"

export function CrmPageContent() {
  return (
    <>
      <CrmHero />
      <CrmHowItWorks />
      <CrmFeatures />
      <CrmPricing />
      <CrmBenefits />
      <CrmCta />
    </>
  )
}
