import Image from "next/image";
import { Spacer } from "../global/spacer";
import { TypographyH4, TypographyP } from "../ui/typographies";
import Link from "next/link";
import { type getDictionary } from "@/get-dictionary";
import { FC } from "react";
interface homeDownloadProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["home-download"];
}

const HomeDownload: FC<homeDownloadProps> = ({ dictionary }) => {
  return (
    <section className=" bg-muted">
      <Spacer small />
      <div className="overflow-x-hidden grid gap-3 grid-cols-1 md:gap-6 md:grid-cols-2 mx-auto">
        <div className="my-[4rem] order-last md:order-none">
          <div>
            <div className="ellipse w-full  relative max-w-[20rem] sm:max-w-[32rem] md:max-w-[42rem] ">
              <Image
                width={500}
                height={500}
                alt="un client d'operateur"
                src="/images/dowload_user.png"
                className="md:w-[95%] h-full"
              />
              <div className="absolute -top-6 sm:-top-16 -right-8 sm:-right-8 md:-top-16 md:-right-4 lg:-top-20 h-28 w-24 sm:h-36  sm:w-36 md:h-40 md:w-40 lg:h-52 lg:w-52">
                <Image src="/images/phone.png" alt="Phone" width={300} height={300} />
              </div>
            </div>
          </div>
        </div>
        <div className="my-auto text-center md:text-left">
          <TypographyH4 className="text-2xl sm:text-4xl lg:text-6xl font-semibold leading-[2rem] sm:leading-[3rem] text-black mb-[2rem]">
            {dictionary.title} <br />
            <span className="my-2 inline-block">
            {dictionary.title_alt}
            </span>
            <div className="bg-primary h-1.5 w-[5rem] mx-auto md:mx-0 my-4"></div>
          </TypographyH4>
          <TypographyP className="mx-auto md:mx-0 max-w-[450px] text-lg md:text-xl font-normal leading-[2rem] text-black">
            {dictionary.subtitle}
          </TypographyP>
          <div className="gap-6 md:gap-[1.875rem] px-2.5 flex md:flex-row p-4 items-center justify-center md:justify-start">
            <Link href="#/" target="_blank">
              <Image
                src="/images/telecharger_play.png"
                alt="télécharger l'application"
                width={200}
                height={200}
                className="h-14 md:h-[4.5rem]  w-36 md:w-52 "
              />
            </Link>
            <Link href="#/" target="_blank">
              <Image
                src="/images/telecharger_story.png"
                alt="télécharger l'application"
                width={200}
                height={200}
                className="h-14 md:h-[4.5rem]  w-36 md:w-52 "
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDownload;
