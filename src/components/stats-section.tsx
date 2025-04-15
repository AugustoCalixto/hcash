import { Coins, User } from "lucide-react"

export default function StatsSection() {
  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
        <div className="flex items-center gap-4">
          <div className="flex">
            <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center -mr-2">
              <Coins className="h-6 w-6 text-yellow-800" />
            </div>
            <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center -mr-2">
              <Coins className="h-6 w-6 text-yellow-800" />
            </div>
            <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center">
              <Coins className="h-6 w-6 text-yellow-800" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">+ de 2,5 BILHÕES</h3>
            <p className="text-sm text-muted-foreground">movimentados no ano de 2024</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="border-2 border-black rounded-full w-12 h-12 flex items-center justify-center">
            <User className="h-6 w-6 text-black" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">+ de 4.050</h3>
            <p className="text-sm">clientes</p>
          </div>
        </div>
      </div>
    </section>
  )
}

