import { LinkType } from "@/lib/link-type";
import { ReactNode } from "react";

export interface AppLinks {
    label: string;
    baseUrl: string;
    type: LinkType;
    icon?: ReactNode; 
}

export interface FooterLinks {
    label: string;
    links: AppLinks[];
}
