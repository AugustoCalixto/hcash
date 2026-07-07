import AboutContentSection from "@/components/about-content";
import AboutSection from "@/components/about-section";
import { ContentImageBlock } from "@/components/content-image-block";

export default function SobrePage() {
    return (
        <div className="container mx-auto max-w-[1350px] px-4">
            <AboutSection />
            <ContentImageBlock
                content={
                    <div className="space-y-6">
                        <p className="text-base md:text-lg">
                            Apesar de sua expansão, a Herocash Brasil continua a oferecer um atendimento de alta qualidade,
                            reafirmando seu compromisso com os clientes. Seu sucesso é impulsionado também por parcerias estratégicas
                            com afiliados e empresas, consolidando sua posição como uma referência no setor.
                        </p>
                        <p className="text-base md:text-lg">
                            A Herocash Brasil mantém uma presença sólida nos principais canais de comunicação e é amplamente
                            recomendada por especialistas do mercado.
                        </p>
                        <p className="text-base md:text-lg">
                            Com foco em excelência e inovação, a Herocash Brasil segue transformando o mercado de pagamentos no país!
                        </p>
                    </div>
                }
                image={{
                    src: "/images/payment.png",
                    alt: "Máquina de pagamento Herocash",
                    label: "IMG 18",
                }}
                direction="content-image"
            />
            <AboutContentSection />
        </div>
    );
}
