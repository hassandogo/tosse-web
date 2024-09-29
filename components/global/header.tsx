"use client";
import { DownloadIcon, Globe, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { FC } from "react";
import { AppContainer } from "@/components/global/appContainer";
import clsx from "clsx";
import { toast } from "sonner";

export type HeaderProps = {
  transparentBg?: boolean;
};

const NavBar = () => {
  const tabs = [
    { id: "1", label: "Comment ça fonctionne", href: "/#functioning" },
    { id: "2", label: "Credit disponible", href: "/#availability" },
    { id: "3", label: "Forfaits", href: "/forfaits" },
    { id: "4", label: "Contact", href: "/contact" },
  ];
  return (
    <nav className="lg:col-start-2 lg:col-span-5 hidden lg:flex gap-4 lg:gap-6 lg:justify-end lg:items-center">
      {tabs.length > 0 &&
        tabs.map((tab) => (
          <Link
            href={tab.href}
            key={tab.id}
            className="relative hover:after:absolute after:bottom-[-2rem] after:left-0 after:content-[''] after:w-full after:h-1 after:bg-[#ff9d00]"
          >
            {tab.label}
          </Link>
        ))}
      <Button variant={"ghost"} className="text-[#B18743] font-extralight">
        <Globe className="mr-2" />
        Arabe
      </Button>
      <Button className="drop-shadow-sm" asChild>
        <Link href={"/buy-credit"}>Acheter du crédit</Link>
      </Button>
    </nav>
  );
};

const Header: FC<HeaderProps> = ({ transparentBg = false }) => {
  return (
    <header
      className={clsx(
        "py-3 lg:py-5",
        "transition-all duration-300",
        "shadow-sm",
        transparentBg ? "bg-black/0 text-white" : "bg-white/95"
      )}
    >
      <AppContainer className="flex justify-between items-center">
        <Button variant={"ghost"} size={"icon"} className="lg:hidden">
          <Menu className="h-8 w-8" />
        </Button>
        <Link
          href={"/"}
          className="text-center text-3xl font-semibold uppercase"
        >
          Tosse
        </Link>
        <NavBar />
        <Button
          variant={"link"}
          onClick={() =>
            toast("Tosse App", {
              description: "18 Juin 2026 à 15:30, Sortie de l'app mobile.",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
          className="hidden sm:inline-block lg:hidden text-primary hover:no-underline"
        >
          <DownloadIcon className="h-8 w-8 inline-block" />
          &nbsp;<span>L&apos;application</span>
        </Button>
      </AppContainer>
    </header>
  );
};
export default Header;
