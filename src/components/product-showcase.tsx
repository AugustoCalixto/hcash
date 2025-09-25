"use client"
import { productsShowcase } from "@/data/showcase";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";

export default function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState<string>("pro")

  const handleProductChange = (productId: string) => {
    setActiveProduct(productId)
  }

  function openWhatsapp(productName: string) {
    const whatsappNumber = "5585987005263"
    const message = `Olá, gostaria de saber mais sobre a maquininha ${productName}!`
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`
    if (typeof window !== 'undefined') {
      window.open(url, "_blank")
    }
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-10">
          <div className="flex space-x-4">
            {productsShowcase.map((product) => (
              <button
                key={product.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${activeProduct === product.id
                    ? `bg-${product.color} text-black`
                    : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                onClick={() => handleProductChange(product.id)}
              >
                {product.name}
              </button>
            ))}
          </div>
        </div>

        {productsShowcase.map((product, index) => (
          <div key={product.id} className={`${activeProduct === product.id ? "block" : "hidden"}`}>
            <div className={`bg-black text-white rounded-xl overflow-hidden`}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                  <div className="flex justify-center">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={`Maquininha ${product.name}`}
                      width={300}
                      height={400}
                      className="object-contain max-h-[400px]"
                    />
                  </div>
                </div>

                <div className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                  <h2 className={`text-${product.color} text-3xl font-bold mb-4`}>{product.title}</h2>
                  <p className="text-gray-300 mb-8">{product.description}</p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center">
                        <div className="bg-gray-800 p-4 rounded-diamond mb-3">{feature.icon}</div>
                        <h3 className="text-sm font-medium mb-1">{feature.title}</h3>
                        <p className="text-xs text-gray-400">{feature.description}</p>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`bg-${product.color} hover:bg-opacity-90 text-black font-medium`}
                    onClick={() => openWhatsapp(product.name)}
                  >
                    {product.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

