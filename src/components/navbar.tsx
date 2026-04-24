'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const navItems = [
    { name: 'Maquininhas', href: '/#maquininhas' },
    { name: 'Planos', href: '/#planos' },
    { name: 'Simulador', href: '/#simulador' },
    { name: 'Sobre nós', href: '#sobre' },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
            scrolled ? "bg-white/80 backdrop-blur-xl py-3 border-b border-black/5 shadow-sm" : "bg-transparent py-5"
        )}>
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <div className="flex items-center gap-12">
                        <Link href="/" className="transition-transform hover:scale-105 active:scale-95 shrink-0">
                            <Image
                                src="/images/logo-full.png"
                                width="160"
                                alt="Hero Cash Brasil"
                                height="40"
                                className="w-auto h-8 md:h-10 transition-all"
                            />
                        </Link>
                        
                        {/* Desktop menu */}
                        <div className="hidden lg:flex items-center space-x-10">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground/50 hover:text-primary transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        <Link href="https://cliente.herocashbrasil.com.br/">
                            <Button className="bg-hero-gradient text-black font-black px-10 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all border-none uppercase tracking-widest text-xs h-12">
                                ÁREA DO CLIENTE
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground p-3 hover:bg-secondary rounded-full transition-colors flex items-center justify-center bg-white shadow-sm border border-black/5"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={cn(
                    "lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl transition-all duration-500 overflow-hidden shadow-2xl",
                    isOpen ? "max-h-[600px] border-t border-black/5 py-10" : "max-h-0"
                )}>
                    <div className="px-8 space-y-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block text-2xl font-black uppercase tracking-tighter text-foreground hover:text-primary transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-8 border-t border-black/5">
                            <Link href="https://cliente.herocashbrasil.com.br/">
                                <Button className="w-full bg-hero-gradient text-black font-black py-8 rounded-[1.5rem] border-none uppercase tracking-widest text-sm shadow-xl">
                                    ÁREA DO CLIENTE
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}



