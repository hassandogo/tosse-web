"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { TypographyP } from "@/components/ui/typographies";
import { Separator } from "@/components/ui/separator";

const FormSchema = z.object({
  sendTo: z.string().min(2, {
    message: "ce champ est incorect.",
  }),
  amount: z.string().min(2, {
    message: "ce champ est incorect.",
  }),
  sendFrom: z.string().min(2, {
    message: "ce champ est incorect.",
  }),
});

export function CreditDetailsForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      sendTo: "",
      amount: "",
      sendFrom: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <TypographyP className="border-l-primary border-l-4 px-4 bg-muted  py-2 text-base text-center">
          Avez vous un code promo?{" "}
          <span className="text-primary cursor-pointer">
            Cliquez ici pour saisir votre code
          </span>
        </TypographyP>
        <FormField
          control={form.control}
          name="sendTo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Numéro de téléphone du bénéficiare *</FormLabel>
              <FormControl>
                <Input placeholder="EX: 658778110" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Montant (Franc CFA) *</FormLabel>
              <FormControl>
                <Input placeholder="Ex: 10000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sendFrom"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">Numéro de téléphone du payeur *</FormLabel>
              <FormControl>
                <Input placeholder="EX: 620347534" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator className="my-6" />
        <div className="text-center">
          <Button type="submit">Acheter du crédit</Button>
        </div>
      </form>
    </Form>
  );
}
