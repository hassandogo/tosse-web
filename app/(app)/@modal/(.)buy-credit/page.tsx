"use client"

import { useRouter } from 'next/navigation'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CreditDetailsForm } from '@/components/client/credit/credit-details-form'

export default function InterceptedBuyCredit() {
  const router = useRouter()

  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Détails du transfert de crédit</DialogTitle>
        </DialogHeader>
        <CreditDetailsForm />
      </DialogContent>
    </Dialog>
  )
}