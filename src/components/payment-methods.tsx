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
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-secondary/30 rounded-[3rem] p-10 flex flex-col items-center gap-10 border border-black/5">
          <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
            ACEITAMOS TODAS AS PRINCIPAIS BANDEIRAS
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center justify-center transition-transform hover:scale-110">
                <Image
                  src={method.icon || "/placeholder.svg"}
                  alt={method.name}
                  width={48}
                  height={48}
                  className="object-contain max-h-8 w-auto min-w-[30px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



