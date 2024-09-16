import { AppContainer } from "@/components/global/appContainer";
import Header from "@/components/global/header";
import { Spacer } from "@/components/global/spacer";
import { faqs } from "@/dossier/faqs";
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
      <AppContainer>
        <div className="justify-center flex items-center flex-col gap-4 border">
          <div className="text-center space-y-2">
            <h1 className="text-[3.125rem] font-bold leading-[3.75rem] text-[#1c2e3d] mb-[1.5rem]">
              Questions fréquemment posées
            </h1>
            <p className="text-[2.5rem] font-normal leading-[3rem]">
              Nouveau sur Tosse ? Commençons par les bases.
            </p>
          </div>
          {faqs &&
            faqs.length > 0 &&
            faqs.map((faq) => (
              <div className="w-[70%] space-y-3 py-4">
                <h3 className=" text-[2.813rem] font-normal  leading-[3.375rem] tracking-widest text-primary text-center">
                  {faq.theme.title}
                </h3>
                <div className="">
                  <Accordion type="single" collapsible>
                    {faq.theme.content.map((quest, index) => (
                      <AccordionItem value={`item-${index}`}>
                        <AccordionTrigger className="text-3xl font-normal leading-9 text-left">
                      {quest.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-[1.563rem] font-normal leading-[2.813rem] text-left">
                       {quest.anwser}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            ))}
          {/* <div className="w-[70%] space-y-3 py-4">
            <h3 className=" text-[2.813rem] font-normal leading-[3.375rem] tracking-widest text-primary text-center">
              Transferts de credit
            </h3>
            <div className="">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-3xl font-normal leading-9 text-left">
                    Quels réseaux sont pris en charge?
                  </AccordionTrigger>
                  <AccordionContent className="text-[1.563rem] font-normal leading-[2.813rem] text-left pl-8">
                    Nous soutenons actuellement{" "}
                    <span className="text-[#396BB4]">Moov Africa(TIGO)</span> ,{" "}
                    <span className="text-[#EB1C24]">Airtel</span> et{" "}
                    <span className="text-[#00FF00]">Salam</span>. Nous essayons
                    de prendre en charge tous les réseaux disponibles à
                    l&apos;avenir.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-3xl font-normal leading-9 text-left">
                    Quels sont les numéros de téléphone de Tosse?
                  </AccordionTrigger>
                  <AccordionContent className="text-[1.563rem] font-normal leading-[2.813rem] text-left">
                    Moov Africa(Tigo):{" "}
                    <span className="text-[#396BB4]">95 16 10 30</span>
                    <br />
                    Airtel: <span className="text-[#EB1C24]">66 46 24 28</span>
                    <br />
                    Pour des raisons de sécurité et de confidentialité, seul le
                    numéro qui nous contacte peut effectuer le paiement. Nous
                    préférons donc que vous nous contactiez avec le numéro de
                    paiement.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-3xl font-normal leading-9 text-left">
                    Pouvez-vous fournir un exemple de message texte à envoyer?
                  </AccordionTrigger>
                  <AccordionContent className="text-[1.563rem] font-normal leading-[2.813rem] text-left">
                    Envoyer 500 à 9XXXXXXX
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-3xl font-normal leading-9 text-left">
                    Y a-t-il un avantage à utiliser ce service au sein du même
                    réseau?
                  </AccordionTrigger>
                  <AccordionContent className="text-[1.563rem] font-normal leading-[2.813rem] text-left">
                    L&apos;avantage dans ce scénario est la rapidité et la
                    commodité.
                    <br />
                    Par exemple, si vous voulez vous acheter du crédit pour
                    500frs, vous pouvez simplement envoyer un SMS avec du
                    contenu, &quot;1000&quot;; au lieu de suivre les étapes
                    d&apos;achat de crédit de votre opérateur réseau.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-3xl font-normal leading-9 text-left">
                    Combien de temps faudrait-il pour recevoir du credit que
                    vous achetez?
                  </AccordionTrigger>
                  <AccordionContent className="text-[1.563rem] font-normal leading-[2.813rem] text-left">
                    C&apos;est presque instantané lorsque les conditions du
                    réseau sont bonnes. Nous traitons votre transaction
                    immédiatement après réception du paiement. <br />
                    Mais cela peut prendre jusqu&apos;à 5 minutes dans de
                    mauvaises conditions de réseau. Nous allons réessayer
                    jusqu&apos;à ce que ça aille. Mais si cela prend trop de
                    temps et que nous ne sommes pas en mesure d&apos;effectuer
                    la transaction, nous effectuerons un remboursement à 100%.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-3xl font-normal leading-9 text-left">
                    Quels pays sont pris en charge?
                  </AccordionTrigger>
                  <AccordionContent className="text-[1.563rem] font-normal leading-[2.813rem] text-left">
                    Actuellement, ce service ne fonctionne qu&apos;au Tchad mais
                    nous espérons soutenir plus de pays le long de la ligne.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="w-[70%] space-y-3 py-4">
            <h3 className=" text-[2.813rem] font-normal leading-[3.375rem] tracking-widest text-primary text-center">
              Paiements
            </h3>
            <div className="">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-3xl font-normal leading-9 text-left">
                    Quelles méthodes de paiements sont disponibles?
                  </AccordionTrigger>
                  <AccordionContent className="text-[1.563rem] font-normal leading-[2.813rem] text-left">
                    Tous les paiements mobile money sont pris en charge (
                    <span className="text-[#396BB4]">
                      Moov Africa(Tigo) Money
                    </span>
                    et <span className="text-[#EB1C24]">Airtel Money</span>).
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-3xl font-normal leading-9 text-left">
                    Les paiements fonctionnent-ils complètement hors ligne?
                  </AccordionTrigger>
                  <AccordionContent className="text-[1.563rem] font-normal leading-[2.813rem] text-left">
                    A fairre
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-3xl font-normal leading-9 text-left">
                    Existe-t-il une politique de remboursement?
                  </AccordionTrigger>
                  <AccordionContent className="text-[1.563rem] font-normal leading-[2.813rem] text-left">
                    Nous vous rembourserions 100% de votre argent si nous ne
                    sommes pas en mesure de répondre à votre demande. Si vous
                    souhaitez annuler la demande, nous ajouterons des frais de
                    remboursement de 3% du montant.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div> */}
        </div>
      </AppContainer>
    </section>
  );
};

export default Faqs;
