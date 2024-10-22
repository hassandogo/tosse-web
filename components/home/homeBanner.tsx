import { TypographyH1, TypographyH4 } from "@/components/ui/typographies";
import { FC } from "react";
import { AppContainer } from "../global/appContainer";
import { Spacer } from "../global/spacer";
import Header from "../global/header";
import { Button } from "../ui/button";
import Link from "next/link";
import { DialogBuyCredit } from "../client/credit/dialog-buycredit";
import { type getDictionary } from "@/get-dictionary";
interface homeBannerProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["home-banner"];
}

export const HomeBanner: FC<homeBannerProps> = ({ dictionary }) => {
  return (
    <section className="home-banner relative z-0">
      <div className="bg-black/50 -z-50 absolute inset-0" />
      <Header transparentBg />
      <AppContainer className="pb-20">
        <Spacer />
        <TypographyH1 className="mx-auto xl:mx-0 max-w-3xl text-primary-foreground font-semibold">
          {dictionary.title}
        </TypographyH1>
        <Spacer tooSmall />
        <TypographyH4 className="text-md lg:text-lg mx-auto xl:mx-0 max-w-3xl text-gray-300 lg:text-primary-foreground font-semibold">
          {dictionary.subtitle}
        </TypographyH4>
        <Spacer small />
        <div className="mx-auto xl:mx-0 max-w-3xl">
          <DialogBuyCredit className="mr-4 md:text-xl" />
          <Link href="/forfaits">
            <Button
              variant={"link"}
              className="drop-shadow-sm text-primary-foreground text-lg md:text-xl border"
            >
              {dictionary.link}
            </Button>
          </Link>
        </div>
        <Spacer large />
      </AppContainer>
    </section>
  );
};
