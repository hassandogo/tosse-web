import { AppLinks } from "./app-link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const footerApplicationLinks: AppLinks[] = [
  {
    label: "Comment ça fonctionne",
    baseUrl: "/#functioning",
    type: "internal",
  },
  {
    label: "Crédit disponible",
    baseUrl: "/#availability",
    type: "internal",
  },
];
const footerUserLinks: AppLinks[] = [
  {
    label: "Tigo: +235 95 16 10 30",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Aitel: +235 66 46 24 28",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Acheter du crédit",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Acheter des forfaits",
    baseUrl: "/forfaits",
    type: "internal",
  },
];
const footerInformationLinks: AppLinks[] = [
  {
    label: "FAQ",
    baseUrl: "/faqs",
    type: "internal",
  },
  {
    label: "Contact",
    baseUrl: "/contact",
    type: "internal",
  },
  {
    label: "Politique de confidentialité",
    baseUrl: "/confiddentiality",
    type: "internal",
  },
  {
    label: "Termes et conditions",
    baseUrl: "/conditions",
    type: "internal",
  },
];
export const footerSocialNavigationLinks: AppLinks[] = [
  {
    label: "Facebook",
    baseUrl: "/#",
    type: "external",
    icon: <FaFacebook />
  },
  {
    label: "Twitter",
    baseUrl: "/#",
    type: "external",
    icon: <FaTwitter />
  },
  {
    label: "Instagram",
    baseUrl: "/#",
    type: "external",
    icon: <FaInstagram />
  },
];



export const footerLinks = [
  {
    label: "TOSSE",
    links: footerApplicationLinks,
  },
  {
    label: "Commencer",
    links: footerUserLinks,
  },
  {
    label: "ASSISTANCE",
    links: footerInformationLinks,
  },
  {
    label: "Suivez-nous",
    links: footerSocialNavigationLinks,
  },
];
