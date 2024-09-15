import Image from "next/image";

const HomeDownload = () => {
  return (
    <>
      <div className="grid gap-3 md:grid-cols-2 mx-auto bg-[#F4F4F4]">
        <div className="my-[4rem]">
          <div>
            <div className="ellipse  relative max-w-[42rem]">
              <Image
                width={500}
                height={500}
                alt="un client d'operateur"
                src="/Ellipse.png"
                className="w-[95%] h-full"
              />
              <div className="absolute top-0 right-0">
                <Image src="/phone.png" alt="Phone" width={200} height={200} />
              </div>
            </div>
          </div>
        </div>
        <div className="my-auto text-center">
          <h4 className="text-3xl md:text-4xl lg:text-6xl font-normal leading-[3rem] md:leading-[5.625rem] md:text-left text-black">
            Téléchargez l&apos;application TOSSE maintenant
          </h4>
          <div className="w-20 bg-[#FF9D00] h-3 mx-auto md:mx-0"></div>
            <p className="text-[1.375rem] font-normal leading-[2rem] md:leading-[1.65rem] md:text-left p-3">
              Vous pouvez effectuer l&apos;achat via notre application.
            </p>

          <div className="gap-[1.875rem] px-2.5 flex p-4 items-center justify-center md:justify-start">
            <Image
              src="/telecharger_play.png"
              alt="télécharger l'application"
              width={200}
              height={200}
            />
            <Image
              src="/telecharger_story.png"
              alt="télécharger l'application"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeDownload;
