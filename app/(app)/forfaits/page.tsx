"use client";
import { AppContainer } from "@/components/global/appContainer";
import { Spacer } from "@/components/global/spacer";
import { Button } from "@/components/ui/button";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/ui/typographies";
import clsx from "clsx";
import Image from "next/image";
import * as React from "react";
type Forfait = {
  id: string;
  name: string;
  operator: string;
  description: string;
  price: string;
};

const allForfaits: Forfait[] = [
  {
    id: "1",
    name: "tigo Deal",
    operator: "tigo",
    description: "description",
    price: "1000f",
  },
  {
    id: "2",
    name: "Surf week",
    operator: "airtel",
    description: "description",
    price: "2000f",
  },
  {
    id: "3",
    name: "airtel MO",
    operator: "tigo",
    description: "description",
    price: "100f",
  },
  {
    id: "4",
    name: "Surf Night",
    operator: "salam",
    description: "description",
    price: "400f",
  },
  {
    id: "5",
    name: "GooD deal",
    operator: "airtel",
    description: "description",
    price: "10f",
  },
  {
    id: "5",
    name: "Tigo Night",
    operator: "salam",
    description: "description",
    price: "1300f",
  },
];

const Forfaits = () => {
  const [selectedOperator, setSelectedOperator] = React.useState("all");
  const [forfaits, setForfaits] = React.useState(allForfaits);
  const operators = ["all", "tigo", "airtel", "salam"];
  const [selectedPeroid, setSelectedPeroid] = React.useState("");
  const operatorsImg: any = {
    tigo: "/logos/logo_moov_africa.png",
    airtel: "/logos/logo_airtel.png",
    salam: "/logos/logo_salam.png",
  };
  React.useEffect(() => {
    filterByOperator(selectedOperator);
  }, [selectedOperator]);

  function filterByOperator(operator: string) {
    const filteredForfaits = allForfaits.filter(
      (forfait) => forfait.operator === operator
    );
    setForfaits(filteredForfaits);
    if (operator === "all") {
      setForfaits(allForfaits);
    }
  }

  return (
    <section>
      <AppContainer>
        <Spacer small />
        <TypographyH1 className="font-bold">
          Forfaits
          <div className="bg-primary h-1.5 w-[5rem] my-4"></div>
        </TypographyH1>
        <div className="flex flex-wrap gap-2 mb-4">
          {operators &&
            operators.length > 0 &&
            operators.map((operator) => (
              <Button
                variant={"link"}
                key={operator}
                className={clsx(
                  "text-secondary-foreground capitalize text-xl font-semibold",
                  `${
                    selectedOperator === operator
                      ? "underline text-primary"
                      : ""
                  }`
                )}
                onClick={() => setSelectedOperator(operator)}
              >
                {operator}
              </Button>
            ))}
        </div>
        <TypographyH2 className="capitalize">
          {selectedOperator} Forfaits
        </TypographyH2>
        <Spacer tooSmall />
        <div className="space-y-4">
          {forfaits && forfaits.length > 0 ? (
            <div className="grid gap-4 md:gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {forfaits.map((forfait, index) => (
                <div
                  key={forfait.id}
                  className="border shadow-sm rounded-sm p-4 hover:shadow-primary hover:shadow-sm"
                >
                  <div className=" flex items-center justify-between gap-3">
                    <TypographyH3 className="capitalize">
                      {forfait.name}
                    </TypographyH3>
                    <Image
                      src={operatorsImg[forfait.operator]}
                      alt="operator's logo"
                      height={40}
                      width={40}
                      className="shadow-md rounded-sm"
                    />
                  </div>
                  <TypographyP>{forfait.description}</TypographyP>
                  <TypographyH4>{forfait.price}</TypographyH4>
                </div>
              ))}
            </div>
          ) : (
            <div>not result found</div>
          )}
          forfaits containt
        </div>
        <Spacer />
      </AppContainer>
    </section>
  );
};

export default Forfaits;
