import { BundleDuration, BundleModel } from "@/helpers/models/bundle.model";
import { z } from "zod";
import { createServerAction } from "zsa";

/**
 * This is a simple action that returns the list of bundles.
 */

export const getBundlesAction = createServerAction()
  .input(z.object({ limit: z.optional(z.number()) }))
  .handler<Promise<BundleModel[]>>(async ({ input }) => {
    // TODO implement the action
    // wait 5 seconds
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const limit = input.limit;
    return limit
      ? []
      : [
          {
            id: "1",
            name: "Tigo Deal",
            operator: "tigo",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fugiat ratione soluta!",
            price: "1000f",
            duration: BundleDuration.WEEK,
          },
          {
            id: "2",
            name: "Surf week",
            operator: "airtel",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fugiat ratione soluta!",
            price: "2000f",
            duration: BundleDuration.WEEK,
          },
          {
            id: "3",
            name: "Tigo MO",
            operator: "tigo",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fugiat ratione soluta!",
            price: "2100f",
            duration: BundleDuration.MONTH,
          },
          {
            id: "4",
            name: "Surf Night",
            operator: "salam",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fugiat ratione soluta!",
            price: "400f",
            duration: BundleDuration.DAY,
          },
          {
            id: "5",
            name: "GooD deal",
            operator: "airtel",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fugiat ratione soluta!",
            price: "10f",
            duration: BundleDuration.DAY,
          },
          {
            id: "6",
            name: "Salam Month",
            operator: "salam",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In fugiat ratione soluta!",
            price: "1300f",
            duration: BundleDuration.MONTH,
          },
        ];
  });
