import { AppContainer } from "@/components/global/appContainer";
import { TypographyP } from "@/components/ui/typographies";
import { ActiveLink } from "@/dossier/active-link";
import { footerLinks } from "@/dossier/app-links";
import { FooterLinks } from "@/dossier/app-link";
import { v4 as uuidv4 } from "uuid";
import { LinkTypes } from "@/lib/link-type";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavigationList = footerLinks.map((colomnLinks) => (
    <FooterLink key={uuidv4()} data={colomnLinks} />
  ));

  return (
    <section className="bg-[#303030] py-[2rem]">
      <AppContainer className="flex justify-center items-center">
        <div className="flex lg:gap-20 gap-4">{footerNavigationList}</div>
      </AppContainer>
      <AppContainer className="pt-4 pb-5 space-y-5">
        <hr className="text-gray-400" />
        <div className="flex items-center justify-between">
          <TypographyP className="text-gray-500">
            {`Copyright © ${currentYear} `}
            <a href="https://tossemoro@gmail.com" target="_blank" className="underline">
              TOSSE
            </a>
            {` Allrightsreserved. `}
          </TypographyP>
          <div className=""></div>
        </div>
      </AppContainer>
    </section>
  );
};
interface footerLinkProps {
  data: FooterLinks;
}
export default Footer;
const FooterLink = ({ data }: footerLinkProps) => {
  const linkList = data.links.map((link) => (
    <div key={uuidv4()}>
      {link.type === LinkTypes.INTERNAL && (
        <ActiveLink key={uuidv4()} href={link.baseUrl}>
          {link.label}
        </ActiveLink>
      )}
      {link.type === LinkTypes.EXTERNAL && (
        <a href={link.baseUrl} target="_blank">
          {link.label}
        </a>
      )}
    </div>
  ));

  return (
    <div className="lg:min-w-[11.875rem]">
      <div className="pb-5 text-white">
        <TypographyP className="text-2xl">{data.label}</TypographyP>
      </div>
      <div className="space-y-4 text-gray-400">{linkList}</div>
    </div>
  );
};
