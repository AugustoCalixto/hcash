"use client"

import { Fragment } from "react"
import { Check, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  CRM_PLAN_IDS,
  type CompareCell,
  type CrmPlanId,
  crmPricingContent,
} from "@/data/crm-pricing"
import { cn } from "@/lib/utils"

interface CrmPricingCompareDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

function CompareValue({ value }: { value: CompareCell }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-4 w-4 text-emerald-600" aria-label="Incluso" />
    ) : (
      <X className="mx-auto h-4 w-4 text-muted-foreground/50" aria-label="Não incluso" />
    )
  }

  if (Array.isArray(value)) {
    return (
      <div className="flex flex-wrap justify-center gap-1">
        {value.map((channel) => (
          <span
            key={channel}
            className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-foreground"
          >
            {channel}
          </span>
        ))}
      </div>
    )
  }

  return <span className="text-sm font-medium text-foreground">{value}</span>
}

const planHeaderClass: Record<CrmPlanId, string> = {
  essential: "text-foreground",
  pro: "text-foreground",
  plus: "text-yellow-700",
  advanced: "text-foreground",
}

export function CrmPricingCompareDialog({ open, onOpenChange }: CrmPricingCompareDialogProps) {
  const { compareGroups, compareFootnote, plans } = crmPricingContent

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[90vh] w-[calc(100%-2rem)] max-w-5xl flex-col gap-0 overflow-hidden p-0 sm:rounded-2xl">
        <DialogHeader className="shrink-0 border-b px-6 py-5 text-left">
          <DialogTitle className="text-xl font-bold">Compare os planos</DialogTitle>
        </DialogHeader>

        <div className="overflow-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead className="sticky top-0 z-10 bg-background shadow-sm">
              <tr className="border-b">
                <th className="w-[34%] px-4 py-3 text-sm font-semibold text-muted-foreground">Planos</th>
                {plans.map((plan) => (
                  <th
                    key={plan.id}
                    className={cn(
                      "px-3 py-3 text-center text-sm font-bold",
                      planHeaderClass[plan.id]
                    )}
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareGroups.map((group) => (
                <Fragment key={group.title}>
                  <tr className="bg-muted/40">
                    <td
                      colSpan={5}
                      className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-foreground"
                    >
                      {group.title}
                    </td>
                  </tr>
                  {group.rows.map((row) => (
                    <tr key={row.label} className="border-b border-border/60">
                      <td className="px-4 py-3 text-sm text-muted-foreground">{row.label}</td>
                      {CRM_PLAN_IDS.map((planId) => (
                        <td key={planId} className="px-3 py-3 text-center">
                          <CompareValue value={row.values[planId]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <p className="shrink-0 border-t px-6 py-4 text-xs leading-relaxed text-muted-foreground">
          {compareFootnote}
        </p>
      </DialogContent>
    </Dialog>
  )
}
