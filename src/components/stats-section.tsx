import { User, TrendingUp, ShieldCheck } from "lucide-react"

export default function StatsSection() {
  const stats = [
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      value: "+ de 2,5 BILHÕES",
      label: "movimentados no ano de 2024",
    },
    {
      icon: <User className="h-6 w-6 text-primary" />,
      value: "+ de 4.050",
      label: "clientes satisfeitos",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      value: "100% SEGURO",
      label: "tecnologia criptografada",
    }
  ]

  return (
    <section className="py-24 relative bg-white overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

       <div className="container mx-auto px-6 relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           {stats.map((stat, i) => (
             <div key={i} className="glass-card p-12 rounded-[3.5rem] flex flex-col items-center text-center space-y-8 transition-all hover:scale-[1.03] border-black/5 bg-white/40 shadow-xl shadow-primary/[0.03]">
               <div className="w-20 h-20 rounded-3xl bg-secondary flex items-center justify-center shadow-inner">
                 <div className="scale-125">
                   {stat.icon}
                 </div>
               </div>
               <div className="space-y-3">
                 <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-foreground leading-none">
                   {stat.value}
                 </h3>
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary italic">
                   {stat.label}
                 </p>
               </div>
             </div>
           ))}
         </div>
       </div>
    </section>
  )
}



