import Header from "@/components/global/header";
import { Spacer } from "@/components/global/spacer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Faqs = () => {
  return (
    <section>
     <Header />
     <Spacer small />
    <div className="bg-[#FFFFFF] justify-center flex items-center flex-col gap-4">
      <div className="text-center space-y-2">
        <h1 className="text-[3.125rem] font-bold leading-[3.75rem] text-[#1c2e3d] mb-[1.5rem]">
          Questions fréquemment posées
        </h1>
        <p className="text-[2.5rem] font-normal leading-[3rem]">
          Nouveau sur Tosse ? Commençons par les bases.
        </p>
      </div>
      <div className="w-[70%] space-y-3 py-4">
        <h3 className=" text-[2.813rem] font-normal leading-[3.375rem] tracking-widest text-[#FF9D00] text-center">
          À propos de Tosse
        </h3>
        <div className="">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-3xl font-normal leading-9 text-left">
                Que fait Tosse?
              </AccordionTrigger>
              <AccordionContent className="text-[1.563rem] font-normal leading-[2.813rem] text-left">
                TOSSE vous offre la possibilité d&apos;acheter du credit pour
                n&apos;importe quel réseau au Tchad en utilisant votre méthode
                de paiement préférée, sans demander de frais.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-3xl font-normal leading-9 text-left">
                Est-ce vraiment gratuit ?
              </AccordionTrigger>
              <AccordionContent  className="text-[1.563rem] font-normal leading-[2.813rem] text-left">
                Oui. C&apos;est totalement gratuit. Il n&apos;y a pas de frais
                demandés pour effectuer des paiements. De plus, nous
                n&apos;ajoutons pas de frais de retrait à votre paiement. Par
                exemple, si vous voulez du credit pour 500frs, vous paierez
                exactement 500frs.
                <br />
                Nous souhaitons vous informer que votre opérateur réseau peut
                vous facturer des SMS pour des transactions hors ligne à moins
                que vous ne soyez abonné à un forfait SMS.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-3xl font-normal leading-9 text-left">
                La messagerie SMS est-elle gratuite?
              </AccordionTrigger>
              <AccordionContent  className="text-[1.563rem] font-normal leading-[2.813rem] text-left">
                Votre opérateur réseau peut vous facturer des SMS, sauf si vous
                êtes abonné à un forfait SMS.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-3xl font-normal leading-9 text-left">
                Existe-t-il une application Android ou iOS?
              </AccordionTrigger>
              <AccordionContent  className="text-[1.563rem] font-normal leading-[2.813rem] text-left">
                Non, il n&apos;y en a pas. Nous en fournirions un à
                l&apos;avenir. Pour l&apos;instant, vous ne pouvez utiliser que
                les SMS ou le site Web&apos;
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-3xl font-normal leading-9 text-left">
                Tosse vend-il aussi des données?
              </AccordionTrigger>
              <AccordionContent  className="text-[1.563rem] font-normal leading-[2.813rem] text-left">
                Nous vendons des données sur demande et le processus n&apos;est
                pas aussi rapide et automatique que le processus de transfert de
                crédit. Au cas où vous vous demandez s&apos;il y a des frais
                pour cela, c&apos;est totalement gratuit.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Faqs;
