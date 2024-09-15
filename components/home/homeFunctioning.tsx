import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CreditCard, MessageSquare, Smile } from "lucide-react";

const HomeFunctioning = () => {
  return (
    <div className="gap-2 bg--[#F7F7F7] m-[3rem]" id="functioning">
      <div className="p-2">
        <h4 className="text-6xl font-normal leading-[55px] text-center text-black relative mb-[2rem]">
          Comment ça fonctionne
          <div className="bg-[#FF9D00] h-1.5 w-[5rem] m-2 absolute left-[50%] translate-x-[-50%] bottom-[-2rem]"></div>
        </h4>
      </div>
      <div className="justify-center gap-5  grid sm:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto">
        <div className="flex flex-col gap-3 justify-center items-center pb-2">
          <h4 className="text-3xl font-normal leading-[3rem] text-center text-black">
            1. Initier la transaction
          </h4>
          <p className="text-xl font-normal leading-[3rem] text-center text-black">
            Envoyez-nous par SMS les détails de votre transaction.
          </p>
          <Link
            className="text-xl font-normal leading-[3rem] text-[#FF9D00] text-left"
            href="/#offline"
          >
            Comment ça marche
          </Link>
          OU
          <Button className="bg-[#FF9D00]">Acheter de crédit</Button>
          <MessageSquare className="inline-block h-[3rem] w-[3rem] font-light" />
        </div>
        <div className="flex flex-col gap-3 items-center">
          <h4 className="text-3xl font-normal text-center text-black leading-[3rem]">
            2. Terminer le paiement
          </h4>
          <p className="text-xl font-normal text-center leading-[3rem] text-[#000000]">
          Un paiement sera initie une fois que vous faites une demande
          </p>
          <p className="text-[#000000]">Il n&apos;y a pas de frais supplémentaires ou cachés!</p>
          
          <CreditCard className="incline-block h-[3rem] w-[3rem] font-light" />
        </div>
        <div className="flex flex-col gap-3 items-center w-[100%] lg:col-span-2">
          <h4 className="text-3xl font-normal text-center text-black leading-[3rem]">
            3. Recevez du crédit
          </h4>
          <p className="text-xl font-normal text-center leading-[3rem] text-[#000000]">
          C&apos;est tout! Asseyez-vous, détendez-vous et recevez votre crédit.
          </p>    

          <Smile  className="incline-block h-[3rem] w-[3rem] font-light" />
        </div>
      
      </div>
    </div>
  );
};
export default HomeFunctioning;
