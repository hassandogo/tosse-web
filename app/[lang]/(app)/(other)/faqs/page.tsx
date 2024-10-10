import { AppContainer } from "@/components/global/appContainer";
import { Spacer } from "@/components/global/spacer";
import { faqsEn, faqsAr, faqsFr } from "@/dossier/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { TypographyH1, TypographyH3, TypographyP } from "@/components/ui/typographies";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";


export default async function Faqs({params: { lang }}:{
  params: { lang: Locale}
}) {
 const dictionary = await getDictionary(lang)
 if(!dictionary){
  <div>Loading</div>
 }
 const faqs = dictionary.faqs === "faqsEn"? faqsEn : dictionary.faqs === "faqsFr"? faqsFr : faqsAr
 
  return (
    <section>
      <Spacer small />
      <AppContainer>
        <div className="justify-center flex items-center flex-col gap-4">
          <div className="text-center space-y-2">
            <TypographyH1>
              {faqs.title}
            </TypographyH1>
            <TypographyP className="text-[2.5rem] font-normal leading-[3rem]">
              {faqs.subtitle}
            </TypographyP>
          </div>
          {faqs.description &&
            faqs.description.length > 0 &&
            faqs.description.map((faq, index) => (
              <div key={index} className="w-[80%] space-y-3 py-4">
                <Spacer tooSmall />
                <TypographyH3 className=" text-[2rem] text-primary text-center">
                  {faq.theme.title}
                </TypographyH3>
                <div className="">
                  <Spacer small />
                  <Accordion type="single" collapsible className="">
                    {faq.theme.content.map((quest, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-2xl font-normal leading-9 text-left">
                          {quest.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-[1rem] font-normal leading-[2rem] text-left ml-8">
                          {quest.anwser}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            ))}
        </div>
        <Spacer tooSmall />
        <TypographyP className="text-[1.5rem] font-normal leading-[2rem] text-center">
          {faqs.contactez}{" "}
          <Link href="/contact" className="text-primary">
            {faqs.link}
          </Link>{" "}
        </TypographyP>
        <Spacer tooSmall />
      </AppContainer>
      <Spacer tooSmall />
    </section>
  );
};

