import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CreditCard, MessageSquare, Smile } from "lucide-react";
import { Spacer } from "../global/spacer";
import { TypographyH4, TypographyP } from "../ui/typographies";
import { DialogBuyCredit } from "../client/credit/dialog-buycredit";
import { getDictionary } from "@/get-dictionary";
import { FC } from "react";

interface HomeFunctioningProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["home-functioning"];
}

const HomeFunctioning: FC<HomeFunctioningProps> = ({dictionary}) => {
  return (
    <div className="gap-2 bg-muted" id="functioning">
      <Spacer small />
      <div className="p-2">
        <TypographyH4 className="text-6xl font-normal leading-[55px] text-center text-black relative mb-[2rem]">
          {dictionary.title}
          <div className="bg-primary h-1.5 w-[5rem] m-2 absolute left-[50%] translate-x-[-50%] bottom-[-2rem]"></div>
        </TypographyH4>
      </div>
      <div className="justify-center gap-5  grid sm:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto">
        <div className="flex flex-col gap-3 justify-center items-center pb-2">
          <TypographyH4 className="text-3xl font-normal leading-[3rem] text-center text-black">
            {dictionary["sous-title"]}
          </TypographyH4>
          <TypographyP className="text-xl font-normal leading-[3rem] text-center text-black">
            {dictionary["sous-1-title"]}
          </TypographyP>
          <Link
            className="text-xl font-normal leading-[3rem] text-primarybg-primary text-left"
            href="/#offline"
          >
            {dictionary["sous-2-title"]}
          </Link>
          {dictionary["sous-3-title"]}
          <DialogBuyCredit />
          <MessageSquare className="inline-block h-[3rem] w-[3rem] font-light" />
        </div>
        <div className="flex flex-col gap-3 items-center">
          <TypographyH4 className="text-3xl font-normal text-center text-black leading-[3rem]">
           {dictionary["title-2"]}
          </TypographyH4>
          <TypographyP className="text-xl font-normal text-center leading-[3rem] text-[#000000]">
            {dictionary["sous-5-title"]}
          </TypographyP>
          <TypographyP className="text-[#000000]">
            {dictionary["sous-6-title"]}
          </TypographyP>

          <CreditCard className="incline-block h-[3rem] w-[3rem] font-light" />
        </div>
        <div className="flex flex-col gap-3 items-center w-[100%] lg:col-span-2">
          <TypographyH4 className="text-3xl font-normal text-center text-black leading-[3rem]">
            {dictionary["title-3"]}
          </TypographyH4>
          <TypographyP className="text-xl font-normal text-center leading-[3rem] text-[#000000]">
            {dictionary["sous-7-title"]}
          </TypographyP>

          <Smile className="incline-block h-[3rem] w-[3rem] font-light" />
        </div>
      </div>
      <Spacer small />
    </div>
  );
};
export default HomeFunctioning;
