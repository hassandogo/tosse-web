"use client";
import { DownloadIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { FC } from "react";
import { AppContainer } from "@/components/global/appContainer";
import clsx from "clsx";
import { toast } from "sonner";
import { NavBar, TogglePhoneMenu } from "@/components/global/TogglePhoneMenu";

export type HeaderProps = {
  transparentBg?: boolean;
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
        <Link href={"/"} className="text-center text-3xl font-semibold uppercase">
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
        <TogglePhoneMenu />
      </AppContainer>
    </header>
  );
};

export default Header;
