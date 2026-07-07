import Link from "next/link"
import { LogIn } from "lucide-react"
import { company } from "@/data/company"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ClientAreaButtonProps {
  className?: string
  size?: "default" | "sm" | "lg"
  onClick?: () => void
}

export function ClientAreaButton({ className, size = "sm", onClick }: ClientAreaButtonProps) {
  return (
    <Button
      asChild
      size={size}
      className={cn(
        "bg-yellow-400 hover:bg-yellow-500 text-black font-semibold shadow-sm",
        className
      )}
    >
      <Link href={company.urls.clientArea} onClick={onClick}>
        <LogIn className="h-4 w-4" />
        Área do cliente
      </Link>
    </Button>
  )
}
