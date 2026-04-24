import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="editorial-spacing bg-white pt-24 pb-12 relative overflow-hidden" id="contato">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Coluna 1 - Logo e Descrição */}
          <div className="lg:col-span-5 space-y-8">
            <div className="hover:scale-105 transition-transform duration-500 origin-left inline-block">
              <Image
                src="/images/logo-full.png"
                alt="Hero Cash Brasil Logo"
                width={220}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-sm md:text-base text-foreground/40 font-medium leading-relaxed max-w-md">
              A Hero Cash Brasil é uma fintech inovadora, dedicada a transformar a experiência de pagamento de
              empreendedores e comerciantes em todo o país. Nossa missão é tornar as transações mais simples, 
              alavancar as vendas e impulsionar o crescimento dos negócios.
            </p>
          </div>

          {/* Coluna 2 - Soluções */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Soluções</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#maquininhas" className="text-foreground/40 hover:text-primary font-bold text-[11px] transition-colors uppercase tracking-[0.2em]">
                  Maquininhas
                </Link>
              </li>
              <li>
                <Link href="#planos" className="text-foreground/40 hover:text-primary font-bold text-[11px] transition-colors uppercase tracking-[0.2em]">
                  Planos e Taxas
                </Link>
              </li>
              <li>
                <Link href="#simulador" className="text-foreground/40 hover:text-primary font-bold text-[11px] transition-colors uppercase tracking-[0.2em]">
                  Simulador
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Transparência */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Transparência</h3>
            <ul className="space-y-4">
              <li>
                <Link href="https://drive.google.com/file/d/1N4YrrVckEFmxsE-acsTb5pooArEPYy12/view?usp=sharing" className="text-foreground/40 hover:text-primary font-bold text-[11px] transition-colors uppercase tracking-[0.2em]" target="_blank">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="https://drive.google.com/file/d/1Hqx4PLbqFam9XHO5oBJIjpeZj5MmT3m-/view?usp=sharing" className="text-foreground/40 hover:text-primary font-bold text-[11px] transition-colors uppercase tracking-[0.2em]" target="_blank">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Action Row: Socials & App Stores */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-secondary/30 p-10 rounded-[3rem] border border-black/5 mb-12 gap-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          
          <div className="flex space-x-4 relative z-10">
            <Link href="https://instagram.com/herocashbrasil" target="_blank" className="p-4 bg-white shadow-sm rounded-2xl border border-black/5 hover:bg-primary hover:text-black transition-all hover:scale-110">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://facebook.com/herocashbrasil" target="_blank" className="p-4 bg-white shadow-sm rounded-2xl border border-black/5 hover:bg-primary hover:text-black transition-all hover:scale-110">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://www.tiktok.com/@herocashbrasil?_t=ZM-8zznkJvAUJP&_r=1" target="_blank" className="p-4 bg-white shadow-sm rounded-2xl border border-black/5 hover:bg-primary hover:text-black transition-all hover:scale-110">
              <Image src="/images/tiktok.svg" alt="TikTok" width={20} height={20} className="hover:filter-none" />
            </Link>
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <Link href="https://apps.apple.com/br/app/hero-cash-brasil/id6749166029" target="_blank" className="hover:scale-105 transition-transform shadow-xl rounded-xl overflow-hidden">
              <Image
                src="/images/download/app-store.png"
                alt="Download na App Store"
                width={140}
                height={45}
                className="object-contain"
              />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=app.herocash.rndlrsrt" target="_blank" className="hover:scale-105 transition-transform shadow-xl rounded-xl overflow-hidden">
              <Image
                src="/images/download/google-play.png"
                alt="Download no Google Play"
                width={140}
                height={45}
                className="object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Copyright e Informações Legais */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30">
          <p>© {currentYear} Hero Cash Brasil. Todos os direitos reservados.</p>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="hover:text-primary transition-colors cursor-pointer">Tel: (88) 99640-3238</p>
            <p className="hover:text-primary transition-colors cursor-pointer">contato@herocashbrasil.com</p>
          </div>
        </div>
      </div>
      
      {/* Footer Ambient Glow */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
    </footer>
  )
}

