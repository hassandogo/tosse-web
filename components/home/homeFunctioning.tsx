import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CreditCard, MessageSquare, Smile } from "lucide-react";
import { Spacer } from "../global/spacer";
import { TypographyH4, TypographyP } from "../ui/typographies";

const HomeFunctioning = () => {
  return (
    <div className="gap-2 bg-muted" id="functioning">
      <Spacer small />
      <div className="p-2">
        <TypographyH4 className="text-6xl font-normal leading-[55px] text-center text-black relative mb-[2rem]">
          Comment ça fonctionne
          <div className="bg-primary h-1.5 w-[5rem] m-2 absolute left-[50%] translate-x-[-50%] bottom-[-2rem]"></div>
        </TypographyH4>
      </div>
      <div className="justify-center gap-5  grid sm:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto">
        <div className="flex flex-col gap-3 justify-center items-center pb-2">
          <TypographyH4 className="text-3xl font-normal leading-[3rem] text-center text-black">
            1. Initier la transaction
          </TypographyH4>
          <TypographyP className="text-xl font-normal leading-[3rem] text-center text-black">
            Envoyez-nous par SMS les détails de votre transaction.
          </TypographyP>
          <Link
            className="text-xl font-normal leading-[3rem] text-primarybg-primary text-left"
            href="/#offline"
          >
            Comment ça marche
          </Link>
          OU
          <Button className="bg-primary">Acheter de crédit</Button>
          <MessageSquare className="inline-block h-[3rem] w-[3rem] font-light" />
        </div>
        <div className="flex flex-col gap-3 items-center">
          <TypographyH4 className="text-3xl font-normal text-center text-black leading-[3rem]">
            2. Terminer le paiement
          </TypographyH4>
          <TypographyP className="text-xl font-normal text-center leading-[3rem] text-[#000000]">
            Un paiement sera initie une fois que vous faites une demande
          </TypographyP>
          <TypographyP className="text-[#000000]">
            Il n&apos;y a pas de frais supplémentaires ou cachés!
          </TypographyP>

          <CreditCard className="incline-block h-[3rem] w-[3rem] font-light" />
        </div>
        <div className="flex flex-col gap-3 items-center w-[100%] lg:col-span-2">
          <TypographyH4 className="text-3xl font-normal text-center text-black leading-[3rem]">
            3. Recevez du crédit
          </TypographyH4>
          <TypographyP className="text-xl font-normal text-center leading-[3rem] text-[#000000]">
            C&apos;est tout! Asseyez-vous, détendez-vous et recevez votre
            crédit.
          </TypographyP>

          <Smile className="incline-block h-[3rem] w-[3rem] font-light" />
        </div>
      </div>
      <Spacer small />
    </div>
  );
};
export default HomeFunctioning;
