import Image from "next/image";
import { Spacer } from "../global/spacer";
import { TypographyH4 } from "../ui/typographies";
import { type getDictionary } from "@/get-dictionary";
import { FC } from "react";
interface homeAvailabilityProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["home-availability"];
}

export const HomeAvailability: FC<homeAvailabilityProps> = ({ dictionary }) => {
  
  return (
    <div className="gap-2 bg-primary-foreground pt-5" id="availability">
      <Spacer tooSmall />
      <div className="p-2">
        <TypographyH4 className="text-2xl sm:text-4xl lg:text-6xl font-semibold leading-[55px] text-center text-black mb-[2rem]">
          {dictionary.title}
          <div className="bg-primary h-1.5 w-[5rem] mx-auto my-4"></div>
        </TypographyH4>
      </div>
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center xsm:items-start xsm:flex-row justify-center gap-5 sm:gap-16 p-4">
        <div className="w-28 sm:w-64">
          <Image src="/logos/logo_moov_africa.png" alt="logo de l'opérateur Moove Africa" width={300} height={300} className="shadow-xl" />
        </div>
        <div className="w-28 sm:w-64">
          <Image src="/logos/logo_airtel.jpg" alt="logo de l'opérateur Airtel" width={300} height={300} className="shadow-xl" />
        </div>
        <div className="w-28 sm:w-64">
          <Image src="/logos/logo_salam-removebg.png" alt="logo de l'opérateur Salam" width={300} height={300} className="shadow-xl" />
        </div>
      </div>
      <Spacer tooSmall />
    </div>
  );
};
export default HomeAvailability;
