'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const navItems = [
    { name: 'Maquininhas', href: '/#maquininhas' },
    { name: 'Planos', href: '/#planos' },
    { name: 'Simulador', href: '/#simulador' },
    { name: 'Sobre nós', href: '/sobre' },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-white py-4 sticky top-0 z-50">
            <div className="container mx-auto px-4 ">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <div className="flex items-center">
                        <Link href="/" className="text-yellow-400 font-bold text-2xl">

                            <Image
                                src="/images/logo-full.png"
                                width="320"
                                alt="Hero Cash Brasil"
                                height="320"
                                className="w-1/2"
                            />
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-black hover:text-yellow-400 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link href="https://cliente.herocashbrasil.com.br/">
                            <Button variant="outline" className="text-black border-white bg-yellow-400 hover:bg-yellow-600 hover:text-gray-900">
                                Area do cliente
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-black focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden mt-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block py-2 text-black hover:text-yellow-400 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link href="https://cliente.herocashbrasil.com.br/">
                            <Button variant="outline" className="text-black border-white bg-yellow-400 hover:bg-yellow-600 hover:text-gray-900">
                                Area do cliente
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

