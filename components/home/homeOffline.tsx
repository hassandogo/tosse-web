import { Download, Save } from "lucide-react";
import { Spacer } from "../global/spacer";
import { TypographyH2, TypographyP } from "../ui/typographies";
import Link from "next/link";
import { type getDictionary } from "@/get-dictionary";
import { FC } from "react";


interface homeOfflineProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["home-offline"];
}

export const HomeOffline: FC<homeOfflineProps> = ({ dictionary }) => {
  return (
    <div className="bg-[#303030] text-primary-foreground items-center justify-center p-10 gap-10" id="offline">
      <TypographyH2 className="mb-6 text-2xl sm:text-4xl lg:text-6xl font-semibold leading-[4.5rem] text-center">
        {dictionary.title}
      </TypographyH2>
      <TypographyP className="italic w-[100%] font-semibold text-base md:text-lg leading-[1.8rem] text-center">
       <span className="not-italic text-lg font-normal">{dictionary.subtitle}</span>  <br /> {dictionary["subtitle-1"]}
        <br /> {dictionary["subtitle-2"]}
      </TypographyP>
      <TypographyP className="w-[100%] text-base font-normal leading-[1.8rem] text-center text-gray-400">
       {dictionary["subtitle-3"]}
      </TypographyP>
      <TypographyP className="mt-5 text-lg font-normal leading-[1.8rem] text-center">
        {dictionary.contact}
      </TypographyP>
      <div className="w-[100%] text-lg font-normal leading-[1.8rem] text-center pt-0 p-5">
        <div className="flex justify-center gap-5 p-3 items-center">
          <Link href="#/" target="_blank" className="flex items-center gap-2">
            <Download />
            <TypographyP>
              Moov Africa:
              <span className="text-gray-400 hover:text-blue-600 border-b border-blue-600"> 95161030 </span>
            </TypographyP>
          </Link>
        </div>
        <div className="flex justify-center gap-5 items-center">
          <Link href="#/" target="_blank" className="flex items-center gap-2">
            <Download />
            <TypographyP>
              Airtel: <span className="text-gray-400 hover:text-red-600 border-b border-red-600"> 66462428 </span>
            </TypographyP>
          </Link>
        </div>
      </div>
      <TypographyP className="text-[0.5rem] lg:text-base  font-normal leading-6 text-center text-primary flex justify-center sm:gap-3">
        <Save className=" border-primary w-8 h-8 mr-1" />
        {dictionary.cliquez}
      </TypographyP>
    </div>
  );
};

export default HomeOffline;
