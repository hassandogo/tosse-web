import { CreditDetailsForm } from "@/components/client/credit/credit-details-form";
import { Spacer } from "@/components/global/spacer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TypographyH3 } from "@/components/ui/typographies";

export default function BuyCredit() {
  return (
    <section>
      <Spacer />
      <Card className="border max-w-5xl mx-auto">
        <CardHeader>
          <TypographyH3 className="text-center">
            Détails du transfert de crédit
          </TypographyH3>
        </CardHeader>
        <CardContent>
          <CreditDetailsForm />
        </CardContent>
      </Card>
      <Spacer />
    </section>
  );
}
