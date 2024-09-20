import Image from "next/image";
import { Spacer } from "../global/spacer";
import { TypographyH4, TypographyP } from "../ui/typographies";
import Link from "next/link";

const HomeDownload = () => {
  return (
    <section className=" bg-muted">
      <Spacer small />
      <div className="grid gap-3 md:grid-cols-2 mx-auto">
        <div className="my-[4rem]">
          <div>
            <div className="ellipse  relative max-w-[42rem]">
              <Image
                width={500}
                height={500}
                alt="un client d'operateur"
                src="/images/dowload_user.png"
                className="w-[95%] h-full"
              />
              <div className="absolute top-0 right-0">
                <Image src="/images/phone.png" alt="Phone" width={200} height={200} />
              </div>
            </div>
          </div>
        </div>
        <div className="my-auto text-center">
          <TypographyH4 className="text-3xl md:text-4xl lg:text-6xl font-normal leading-[3rem] md:leading-[5.625rem] md:text-left text-black">
            Téléchargez l&apos;application TOSSE maintenant
          </TypographyH4>
          <div className="w-20 bg-primary h-3 mx-auto md:mx-0"></div>
          <TypographyP className="text-[1.375rem] font-normal leading-[2rem] md:leading-[1.65rem] md:text-left p-3">
            Vous pouvez effectuer l&apos;achat via notre application.
          </TypographyP>

          <div className="gap-[1.875rem] px-2.5 flex p-4 items-center justify-center md:justify-start">
            <Link href="#/" target="_blank">
              <Image
                src="/images/telecharger_play.png"
                alt="télécharger l'application"
                width={200}
                height={200}
              />
            </Link>
            <Link href="#/" target="_blank">
              <Image
                src="/images/telecharger_story.png"
                alt="télécharger l'application"
                width={200}
                height={200}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeDownload;
