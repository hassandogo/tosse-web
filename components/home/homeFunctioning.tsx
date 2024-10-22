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
    <div className="gap-2 bg-muted px-4" id="functioning">
      <Spacer small />
      <div>
        <TypographyH4 className="text-2xl sm:text-4xl lg:text-6xl font-semibold leading-[2rem] sm:leading-[3rem] text-center text-black mb-[2rem]">
          {dictionary.title}
          <div className="bg-primary h-1.5 w-[5rem] mx-auto my-4"></div>
        </TypographyH4>
      </div>
      <div className="justify-center gap-5  grid sm:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto">
        <div className="flex flex-col gap-3 justify-center items-center pb-2">
          <TypographyH4 className="text-2xl font-medium leading-[3rem] text-center text-black">
            {dictionary["sous-title"]}
          </TypographyH4>
          <TypographyP className="max-w-[450px] text-lg font-normal leading-[2rem] text-center text-gray-400">
            {dictionary["sous-1-title"]}
          </TypographyP>
          <Link
            className="text-lg font-medium  leading-[2rem] text-primary text-left"
            href="/#offline"
          >
            {dictionary["sous-2-title"]}
          </Link>
          <span className="text-base">

          {dictionary["sous-3-title"]}
          </span>
          <DialogBuyCredit />
          <MessageSquare className="inline-block h-[3rem] w-[3rem] font-light" />
        </div>
        <div className="flex flex-col gap-3 items-center">
          <TypographyH4 className="text-2xl font-medium text-center text-black leading-[3rem]">
           {dictionary["title-2"]}
          </TypographyH4>
          <TypographyP className="max-w-[450px] text-lg font-normal text-center leading-[2rem] text-gray-400">
            {dictionary["sous-5-title"]}
          </TypographyP>
          <TypographyP className="text-gray-400 text-lg text-center">
            {dictionary["sous-6-title"]}
          </TypographyP>

          <CreditCard className="incline-block h-[3rem] w-[3rem] font-light" />
        </div>
        <div className="flex flex-col gap-3 items-center w-[100%] lg:col-span-2">
          <TypographyH4 className="text-2xl font-medium text-center text-black leading-[2rem]">
            {dictionary["title-3"]}
          </TypographyH4>
          <TypographyP className="max-w-[450px] text-lg font-normal text-center leading-[2rem] text-gray-400">
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
