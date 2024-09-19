import { DownloadIcon, Globe, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
import { AppContainer } from "@/components/global/appContainer";
import clsx from "clsx";

export type HeaderProps = {
  transparentBg?: boolean;
};

const NavBar = () => {
  const tabs = [
    { id: "1", label: "Comment ça fonctionne", href: "/#functioning" },
    { id: "2", label: "Credit disponible", href: "/#availability" },
    { id: "3", label: "Forfaits", href: "/forfaits" },
    { id: "4", label: "Contact", href: "/" },
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
      <Button className="bg-primary drop-shadow-sm">Acheter du crédit</Button>
    </nav>
  );
};

const Header: FC<HeaderProps> = ({ transparentBg = false }) => {
  return (
    // <header className="min-h-24 shadow-md grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center gap-4 p-4">
    <header
      className={clsx(
        "py-3 lg:py-5",
        "transition-all duration-300",
        "shadow-sm",
        transparentBg ? "bg-black/0 text-white" : "bg-white/95"
      )}
    >
      <AppContainer className='flex justify-between items-center'>
        <Button variant={"ghost"} size={"icon"} className="lg:hidden">
          <Menu className="h-8 w-8" />
        </Button>
        <Link href={"/"} className="text-center text-3xl font-semibold uppercase">
          Tosse
        </Link>
        <NavBar />
        <div className="hidden sm:inline-block lg:hidden text-primary cursor-pointer">
          <DownloadIcon className="h-8 w-8 inline-block" />
          &nbsp;<span>L&apos;application</span>
        </div>
      </AppContainer>
    </header>
  );
};
export default Header;
