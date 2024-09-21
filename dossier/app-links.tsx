import { AppLinks } from "./app-link";

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
    baseUrl: "/#",
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
  },
  {
    label: "Twitter",
    baseUrl: "/#",
    type: "external",
  },
  {
    label: "Instagram",
    baseUrl: "/#",
    type: "external",
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
