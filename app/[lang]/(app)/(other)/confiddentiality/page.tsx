import { AppContainer } from "@/components/global/appContainer";
import { Spacer } from "@/components/global/spacer";
import { TypographyH1, TypographyP } from "@/components/ui/typographies";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Link from "next/link";


export default async function Confidentiality({ params: { lang } }: {
  params: { lang: Locale }

}) {
  const dictionary = await getDictionary(lang)
  if (!dictionary) {
    <div>Loading</div>
  }
  const confidentiality = dictionary["home-confidentiality"]
  return (
    <section>
      <Spacer small />
      <AppContainer>
        <div className="space-4">
          <TypographyH1 className="font-bold">
            {confidentiality.title}
            <div className="bg-primary h-1.5 w-[5rem] my-4"></div>
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyP>
            {confidentiality["paragraph-1"]}{" "}
            <Link href="/conditions" className="text-primary">
              {confidentiality.link}
            </Link>{" "}
          </TypographyP>
        </div>
        <Spacer tooSmall />
        <div className="space-4">
          <TypographyH1 className="font-bold">
            {confidentiality["title-2"]}
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyP>
            {confidentiality["paragraph-3"]}
          </TypographyP>
        </div>
        <Spacer tooSmall />
        <div className="space-4">
          <TypographyH1 className="font-bold">
            {confidentiality["title-3"]}
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyP>
            {confidentiality["paragraph-4"]}
          </TypographyP>
        </div>
        <Spacer tooSmall />
        <div className="space-4">
          <TypographyH1 className="font-bold">
            {confidentiality["title-4"]}
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyP>
            {confidentiality["paragraph-5"]}
          </TypographyP>
        </div>
        <Spacer tooSmall />
        <div className="space-4">
          <TypographyH1 className="font-bold">
            {confidentiality["title-5"]}
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyP>
            {confidentiality["paragraph-6"]}
          </TypographyP>
        </div>
        <Spacer tooSmall />
        <div className="space-4">
          <TypographyH1 className="font-bold">
            {confidentiality["title-6"]}
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyH1 className="font-bold">
            {confidentiality["title-7"]}
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyP>
            {confidentiality["paragraph-7"]}
          </TypographyP>
        </div>
        <Spacer tooSmall />
        <div className="space-4">
          <TypographyH1 className="font-bold">
            {confidentiality["title-8"]}
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyP>
            {confidentiality["paragraph-8"]}
            <br /> {confidentiality["paragraph-8-1"]}
            <br /> {confidentiality["paragraph-8-2"]}
            <br /> {confidentiality["paragraph-8-3"]}
            <br /> {confidentiality["paragraph-8-4"]}
            <br /> {confidentiality["paragraph-8-5"]}
            <br /> {confidentiality["paragraph-8-6"]}
            <br /> {confidentiality["paragraph-8-7"]}
          </TypographyP>
        </div>
        <Spacer tooSmall />
        <div className="space-4">
          <TypographyH1 className="font-bold">
            {confidentiality["title-9"]}
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyH1 className="font-bold">
           {confidentiality["title-10"]}
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyP>
            {confidentiality["paragraph-10"]}
          </TypographyP>
        </div>
        <Spacer tooSmall />
        <div className="space-4">
          <TypographyH1 className="font-bold">
            {confidentiality["title-11"]}
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyP>
           {confidentiality["title-11"]}
          </TypographyP>
        </div>
        <Spacer tooSmall />
        <div className="space-4">
          <TypographyH1 className="font-bold">
            {confidentiality["title-12"]}
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyP>
           {confidentiality["paragraph-12"]}
          </TypographyP>
        </div>
        <Spacer tooSmall />
        <div className="space-4">
          <TypographyH1 className="font-bold">
            {confidentiality["title-13"]}
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyP>
            {confidentiality["paragraph-13"]}
          </TypographyP>
        </div>
        <Spacer tooSmall />
        <div className="space-4">
          <TypographyH1 className="font-bold">
            {confidentiality["title-14"]}
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyP>
            {confidentiality["paragraph-14"]}
          </TypographyP>
        </div>
        <Spacer tooSmall />
      </AppContainer>
      <Spacer tooSmall />
    </section>
  );
};


