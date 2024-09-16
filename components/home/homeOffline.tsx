import { Download, Save } from "lucide-react";
import { Spacer } from "../global/spacer";

const HomeOffline = () => {
  return (
    <div className="bg-[#303030] text-primary-foreground items-center justify-center p-10 gap-10" id="offline">
      <Spacer small />
      <h2 className="text-6xl font-normal leading-[4.5rem] text-center">
        Acheter du crédit hors ligne
      </h2>
      <p className="w-[100%] text-xl font-normal leading-[3.1rem] text-center">
        Exemples des messages: <br /> &quot;Envoyez 500 au 9XXXXXXX&quot;
        <br /> &quot;Envoyer 500 à 9XXXXXXX à partir de 9XXXXXXX&quot;
      </p>
      <p className="w-[100%] text-xl font-normal leading-[3.1rem] text-center">
        Vous n&apos;avez pas à nous dire au payeur si vous souhaitez payer
        avec le numéro qui nous envoie un message.
      </p>
      <p className="text-[1.4rem] font-normal leading-[1.6rem] text-center">
        Ci-dessous nos contacts:
      </p>
      <div className="w-[100%] text-xl font-normal leading-[3.1rem] text-center p-5">
        <div className="flex justify-center gap-5 p-3 items-center">
          <a href="#/" target="_blank" className="flex items-center gap-2">
            <Download />
            <p>
              Moov Africa:
              <span className="text-[#396BB4]"> +235 99161030</span>
            </p>
          </a>
        </div>
        <div className="flex justify-center gap-5 items-center">
          <a href="#/" target="_blank" className="flex items-center gap-2">
            <Download />
            <p>
              Airtel: <span className="text-destructive"> +235 66462428</span>
            </p>
          </a>
        </div>
      </div>
      <p className="text-xl font-normal leading-6 text-center text-primary flex justify-center sm:gap-3">
        <Save className=" border-primary w-8 h-8" />
        Cliquez sur les numéros ci-dessus pour les enregistrer dans vos
        contacts
      </p>
      <Spacer small />
    </div>
  );
};

export default HomeOffline;
