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
      <Spacer small />
      <TypographyH2 className="text-6xl font-normal leading-[4.5rem] text-center">
        {dictionary.title}
      </TypographyH2>
      <TypographyP className="w-[100%] text-xl font-normal leading-[3.1rem] text-center">
        {dictionary.subtitle} <br /> {dictionary["subtitle-1"]}
        <br /> {dictionary["subtitle-2"]}
      </TypographyP>
      <TypographyP className="w-[100%] text-xl font-normal leading-[3.1rem] text-center">
       {dictionary["subtitle-3"]}
      </TypographyP>
      <TypographyP className="text-[1.4rem] font-normal leading-[1.6rem] text-center">
        {dictionary.contact}
      </TypographyP>
      <div className="w-[100%] text-xl font-normal leading-[3.1rem] text-center p-5">
        <div className="flex justify-center gap-5 p-3 items-center">
          <Link href="#/" target="_blank" className="flex items-center gap-2">
            <Download />
            <TypographyP>
              Moov Africa:
              <span className="text-[#396BB4]"> +235 99161030</span>
            </TypographyP>
          </Link>
        </div>
        <div className="flex justify-center gap-5 items-center">
          <Link href="#/" target="_blank" className="flex items-center gap-2">
            <Download />
            <TypographyP>
              Airtel: <span className="text-destructive"> +235 66462428</span>
            </TypographyP>
          </Link>
        </div>
      </div>
      <TypographyP className="text-xl font-normal leading-6 text-center text-primary flex justify-center sm:gap-3">
        <Save className=" border-primary w-8 h-8" />
        {dictionary.cliquez}
      </TypographyP>
      <Spacer small />
    </div>
  );
};

export default HomeOffline;
