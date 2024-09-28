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
import Header from "@/components/global/header";
import clsx from "clsx";
import Image from "next/image";
import * as React from "react";
import { Search, Smile } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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
    name: "Tigo Deal",
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
    name: "Tigo MO",
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
    id: "6",
    name: "Salam Month",
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

  // React.useEffect(() => {
  //   filterByOperator(selectedOperator);
  // }, [selectedOperator]);

  // function filterByOperator(operator: string) {
    
  //   if (operator === "all") {
  //     setForfaits(allForfaits);
  //   } else {
  //     const filteredForfaits = allForfaits.filter(
  //       (forfait) => forfait.operator === operator
  //     );
  //     setForfaits(filteredForfaits);
  //   }
  // }

  function handleInputSearch(value: string) {
    console.log(value);
    if (value.length >= 3) {
      const filteredForfaits = allForfaits.filter((forfait) =>
        forfait.name.toLowerCase().includes(value)
      );
      setForfaits(filteredForfaits);
    }
    if (value.length === 0) {
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
        <div className="flex flex-col md:flex-row gap-3 my-4">
          <div className="flex flex-wrap gap-2">
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
          <div className="relative ml-auto flex-1 md:grow-0 inline-block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
              onChange={(event) => handleInputSearch(event.target.value)}
            />
          </div>
        </div>
        <TypographyH2 className="capitalize">
          {selectedOperator} Forfaits
        </TypographyH2>
        <Spacer tooSmall />
        <div className="space-y-4">
          {forfaits && forfaits.length > 0 ? (
            <div className="grid gap-4 md:gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {forfaits.filter((forfait) => forfait.operator === selectedOperator).map((forfait) => (
                <Forfait key={forfait.id} {...forfait} />
              ))}
            </div>
          ) : (
            <div>
              <Alert>
                <Smile className="h-4 w-4" />
                <AlertTitle>Oups!</AlertTitle>
                <AlertDescription>
                  Search or Filtered result not found.
                </AlertDescription>
              </Alert>
            </div>
          )}
        </div>
        <Spacer />
      </AppContainer>
    </section>
  );
};

export default Forfaits;

function Forfait(forfait: Forfait) {
  const operatorsImg: any = {
    tigo: "/logos/logo_moov_africa.png",
    airtel: "/logos/logo_airtel.png",
    salam: "/logos/logo_salam.png",
  };
  return (
    <div className="border shadow-sm rounded-sm p-4 hover:shadow-primary hover:shadow-sm">
      <div className=" flex items-center justify-between gap-3">
        <TypographyH3 className="capitalize">{forfait.name}</TypographyH3>
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
  );
}
