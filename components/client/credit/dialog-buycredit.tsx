import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TypographyH3 } from "@/components/ui/typographies";
import { CreditDetailsForm } from "./credit-details-form";
import { FC } from "react";
import clsx from "clsx";

type BuyCreditProps = {
  className?: string;
};

export const DialogBuyCredit: FC<BuyCreditProps> = ({ className }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={clsx("drop-shadow-sm", className)}>
          Acheter du crédit
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl mx-auto">
        <Card className="border-none shadow-none">
          <CardHeader>
            <TypographyH3 className="text-center">
              Détails du transfert de crédit
            </TypographyH3>
          </CardHeader>
          <CardContent>
            <CreditDetailsForm />
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
