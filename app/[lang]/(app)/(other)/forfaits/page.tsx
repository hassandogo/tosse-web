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
import { Search, Smile } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getBundlesAction } from "@/actions/client.actions";
import { BundleDuration, BundleModel } from "@/helpers/models/bundle.model";
import { Skeleton } from "@/components/ui/skeleton";
import { useServerActionQuery } from "@/hooks/use-server-actions";

const Bundles = () => {
  const operators = ["tout", "tigo", "airtel", "salam"];
  const [selectedOperator, setSelectedOperator] = React.useState(operators[0]);
  const periods = [
    "tout",
    BundleDuration.DAY,
    BundleDuration.WEEK,
    BundleDuration.MONTH,
  ];
  const [selectedPeriod, setSelectedPeroid] = React.useState(periods[0]);

  const { data = [], isPending  } = useServerActionQuery(getBundlesAction, {
    queryKey: ['get-bunbles'],
    input: {limit: undefined},
  });
  const [searchInput, setSearchInput] = React.useState("");

  const getFilteredBundles = () => {
    return data.filter((bundle) => {
      const operatorMatch = selectedOperator === "tout" || bundle.operator === selectedOperator
      const periodMatch = selectedPeriod === "tout" || bundle.duration === selectedPeriod
      const searchMatch = bundle.name.toLowerCase().includes(searchInput.toLowerCase())
      return operatorMatch && periodMatch && searchMatch
    })
  }

  const filteredBundles = getFilteredBundles()

  return (
    <section>
      <AppContainer>
        <Spacer small />
        <TypographyH1 className="font-bold">
          Forfaits
          <div className="bg-primary h-1.5 w-[5rem] my-4"></div>
        </TypographyH1>
        <div className="flex flex-col-reverse md:flex-row gap-3 my-4">
          <div className="flex flex-wrap gap-2">
            {operators.map((operator) => (
              <Button
                variant={"link"}
                key={operator}
                className={clsx(
                  "text-secondary-foreground capitalize text-xl font-semibold",
                  selectedOperator === operator ? "underline text-primary" : ""
                )}
                onClick={() => setSelectedOperator(operator)}
              >
                {operator}
              </Button>
            ))}
          </div>
          <div className="relative md:ml-auto flex-1 md:grow-0 inline-block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Recherche..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
              onChange={(event) => setSearchInput(event.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-3 my-6">
          {periods.map((period) => (
            <Button
              key={period}
              variant={selectedPeriod === period ? "default" : "secondary"}
              className={clsx(
                "text-secondary-foreground capitalize text-xl font-semibold"
              )}
              onClick={() => setSelectedPeroid(period)}
            >
              {period}
            </Button>
          ))}
        </div>
        <TypographyH2 className="capitalize">
          {selectedOperator} Forfaits
        </TypographyH2>
        <Spacer tooSmall />
        {isPending ? (
          <div className="py-4 grid gap-4 md:gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {[...Array(8)].map((_, index) => (
              <Skeleton key={index} className="bg-muted w-md h-48" />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBundles.length > 0 ? (
              <div className="grid gap-4 md:gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {filteredBundles.map((bundle) => (
                  <Bundle key={bundle.id} {...bundle} />
                ))}
              </div>
            ) : (
              <div>
                <Alert>
                  <Smile className="h-4 w-4" />
                  <AlertTitle>Oups!</AlertTitle>
                  <AlertDescription>
                    Recherche ou résultat filtré non trouvé.
                  </AlertDescription>
                </Alert>
              </div>
            )}
          </div>
        )}
        <Spacer />
      </AppContainer>
    </section>
  );
};

export default Bundles;

function Bundle(bundle: BundleModel) {
  const operatorsImg: any = {
    tigo: "/logos/logo_moov_africa.png",
    airtel: "/logos/logo_airtel.png",
    salam: "/logos/logo_salam.png",
  };
  return (
    <div className="border shadow-sm rounded-sm p-4 hover:shadow-primary hover:shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <TypographyH3 className="capitalize">{bundle.name}</TypographyH3>
        <Image
          src={operatorsImg[bundle.operator]}
          alt="operator's logo"
          height={40}
          width={40}
          className="shadow-md rounded-sm"
        />
      </div>
      <TypographyP>{bundle.description}</TypographyP>
      <div className="flex justify-between gap-3 items-center space-y-4">
        <TypographyH4>{bundle.price}</TypographyH4>
        <TypographyH4>{bundle.duration}</TypographyH4>
      </div>
    </div>
  );
}
