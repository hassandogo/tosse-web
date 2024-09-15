import Image from "next/image";

const HomeAvailability = () => {
  return (
    <>
      <div className="gap-2 bg-[#F7F7F7] pt-5">
        <div className="p-2">
          <h4 className="text-6xl font-normal leading-[55px] text-center text-black relative mb-[2rem]">
            Crédit disponible
            <div className="bg-[#FF9D00] h-1.5 w-[5rem] m-2 absolute left-[50%] translate-x-[-50%] bottom-[-2rem]"></div>
          </h4>
        </div>
        <div className="justify-center gap-5  grid sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          <div className="flex flex-col gap-3 justify-center items-center pb-2">
            <Image src="/logo_moov_africa.png" alt="logo de l'opérateur Moove Africa" width={300} height={50} />
          </div>
          <div className="flex flex-col gap-3 items-center">
            <Image src="/logo_airtel.jpg" alt="logo de l'opérateur Airtel" width={300} height={50} />
          </div>
          <div className="flex flex-col gap-3 items-center">
            <Image src="/logo_salam.jpg" alt="logo de l'opérateur Salam" width={420} height={50} />
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeAvailability;
