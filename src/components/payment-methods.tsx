import Image from "next/image"

export default function PaymentMethods() {
  const paymentMethods = [
    { name: "Mastercard", icon: "/images/credit-cards/MASTERCARD.webp" },
    { name: "American Express", icon: "/images/credit-cards/amex-american-express-logo.png" },
    { name: "Inter", icon: "/images/credit-cards/inter.png" },
    { name: "Nu", icon: "/images/credit-cards/nu.png" },
    { name: "Visa", icon: "/images/credit-cards/VISA.png" },
    { name: "Elo", icon: "/images/credit-cards/ELO.webp" },
    { name: "Apple Pay", icon: "/images/credit-cards/applepay.png" },
    { name: "Google Pay", icon: "/images/credit-cards/google.png" },
    { name: "Pix", icon: "/images/credit-cards/pix.png" },
  ]

  return (
    <section className="py-8 border-t border-b border-gray-200">
      <div className="text-center mb-6">
        <h3 className="text-lg font-light">Aceite todas as principais formas de pagamento</h3>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
        {paymentMethods.map((method, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image
              src={method.icon || "/placeholder.svg"}
              alt={method.name}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

