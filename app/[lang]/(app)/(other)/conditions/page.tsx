import { AppContainer } from "@/components/global/appContainer";
import { Spacer } from "@/components/global/spacer";
import { TypographyH1, TypographyP } from "@/components/ui/typographies";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import Link from "next/link";


export default async function Condition({ params: { lang } }: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)
  if (!dictionary) {
    <div>Loading</div>
  }
  const condition = dictionary["home-condition"]
  return (
    <section>
      <Spacer small />
      <AppContainer>
        <div className="space-4">
          <TypographyH1 className="font-bold">
            {condition.title}
            <div className="bg-primary h-1.5 w-[5rem] my-4"></div>
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyP>
            {condition.paragraph}<br />
            {condition["paragraph-1"]}
            <br />
            {condition["paragraph-2"]}
          </TypographyP>
        </div>
        <Spacer tooSmall />
        <div className="space-4">
          <TypographyH1 className="font-bold">
            {condition["title-1"]}
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyP>
            {condition["paragraphe-3"]}
          </TypographyP>
        </div>
        <Spacer tooSmall />
        <div className="space-4">
          <TypographyH1 className="font-bold">
            {condition["title-2"]}
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyP>
            {condition["paragraphe-4"]}
          </TypographyP>
          <Spacer tooSmall />
          <ul>
            {condition["subparagraphe"]}
            <Spacer tooSmall />
            <li>{condition["subparagraphe-3"]}</li>
            <li>{condition["subparagraphe-4"]}</li>
            <li>{condition["subparagraphe-5"]}</li>
            <li>{condition["subparagraphe-6"]}</li>
          </ul>
          <Spacer tooSmall />
          <TypographyP>
            {condition["title-3"]}
          </TypographyP>
          <TypographyP>
            {condition["paragraphe-5"]}
          </TypographyP>
          <TypographyP>
            {condition["paragraphe-6"]}
          </TypographyP>
        </div>
        <Spacer tooSmall />
        <div className="space-4">
          <TypographyH1 className="font-bold">
            {condition["title-4"]}
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyP>
            {condition["paragraphe-7"]}
          </TypographyP>
          <Spacer tooSmall />
          <ul>
            {condition["subparagraphe-1"]}
            <Spacer tooSmall />
            <li>{condition["subparagraphe-7"]}</li>
            <li> {condition["subparagraphe-8"]} </li>
            <li> {condition["subparagraphe-9"]} </li>
            <li>
              {condition["subparagraphe-10"]}
            </li>
            <li>
              {condition["subparagraphe-11"]}
            </li>
          </ul>
          <Spacer tooSmall />
          <TypographyP>
            {condition["paragraphe-8"]}
          </TypographyP>
        </div>
        <Spacer tooSmall />
        <div className="space-4">
          <TypographyH1 className="font-bold">
            {condition["title-5"]}
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyP>
           {condition["paragraphe-9"]}
          </TypographyP>
        </div>
        <Spacer tooSmall />
        <div className="space-4">
          <TypographyH1 className="font-bold">
            {condition["paragraphe-10"]}
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyP>
            {condition["paragraphe-11"]}
          </TypographyP>
        </div>
        <Spacer tooSmall />
        <div className="space-4">
          <TypographyH1 className="font-bold">
            {condition["paragraphe-12"]}
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyP>
           {condition["paragraphe-13"]} {" "}
            <Link href="/confiddentiality" className="text-primary">
              {condition["paragraphe-14"]}
            </Link>
          </TypographyP>
        </div>
        <Spacer tooSmall />
        <div className="space-4">
          <TypographyH1 className="font-bold">
            {condition["title-6"]}
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyP>
           {condition["paragraphe-15"]}
          </TypographyP>
        </div>
        <Spacer tooSmall />
        <div className="space-4">
          <TypographyH1 className="font-bold">
            {condition["title-7"]}
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyP>
            {condition["paragraphe-16"]}
          </TypographyP>
          <TypographyP>
            {condition["paragraphe-17"]}
          </TypographyP>
        </div>
        <Spacer tooSmall />
        <div className="space-4">
          <TypographyH1 className="font-bold">
            {condition["title-8"]}
          </TypographyH1>
          <Spacer tooSmall />
          <TypographyP>
            {condition["paragraphe-18"]}
          </TypographyP>
          <Spacer tooSmall />
          <ul>
            <li>
              {condition["paragraphe-19"]}
            </li>
            <li>
              {condition["paragraphe-20"]}
            </li>
            <li>
              {condition["paragraphe-21"]}
            </li>
            <li>
              {condition["paragraphe-22"]}
            </li>
          </ul>
          <Spacer tooSmall />
          <TypographyP>
           {condition["paragraphe-23"]}<br /> {condition["paragraphe-24"]}
          
            <br />{condition["paragraphe-25"]}
            {condition["paragraphe-26"]}
          </TypographyP>
          <TypographyP>
           {condition["paragraphe-27"]}
          </TypographyP>
        </div>
        <Spacer tooSmall />
      </AppContainer>
      <Spacer small />
    </section>
  );
};

