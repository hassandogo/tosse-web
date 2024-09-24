"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "@/hooks/use-toast";
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
import { AppContainer } from "@/components/global/appContainer";
import { Spacer } from "@/components/global/spacer";
import { TypographyH1, TypographyH3 } from "@/components/ui/typographies";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Le nom doit comporter au moins 2 caractères.",
  }),
  number: z.number().min(6, {
    message: "le numéro doit contenir au moins 10 chiffres.",
  }),
  email: z.string().min(2, {
    message: "le numéro doit contenir au moins 10 chiffres.",
  }),
  select: z.string().min(2, {
    message: "Selectionez votre option.",
  }),
  textera: z.string().min(2, {
    message: "le message doit contenir au moins 2 chiffres.",
  }),
});

export default function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      textera: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Vous avez soumis les valeurs suivantes:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });

    console.log(data);
  }

  return (
    <section>
      <AppContainer>
        <Spacer small />
        <TypographyH1 className="font-bold">
          Contactez-nous
          <div className="bg-primary h-1.5 w-[5rem] my-4"></div>
        </TypographyH1>
        <Spacer small />
        <TypographyH3>Envoyez-nous un message</TypographyH3>
        <Spacer small />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[1.3rem]">
                    Votre nom <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Entrez votre nom"
                      {...field}
                      className="h-[3rem] border-b-[0.4rem] opacity-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[1.3rem]">
                    Votre numéro de téléphone{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Entrez votre numéro"
                      {...field}
                      className="h-[3rem] border-b-[0.4rem] opacity-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[1.3rem]">
                    Votre adresse e-mail <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Entrez votre e-mail"
                      {...field}
                      className="h-[3rem] border-b-[0.4rem] opacity-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="select"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[1.3rem]">
                    Object <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select>
                      <SelectTrigger className="h-[3rem] border-b-[0.4rem] opacity-2">
                        <SelectValue
                          placeholder="Sélectionner une option"
                          typeof="select"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="apple">
                            Je n&apos;ai pas reçu mon crédit
                          </SelectItem>
                          <SelectItem value="banana">
                            Je n&apos;ai pas pu lancer la requête / paiement
                          </SelectItem>
                          <SelectItem value="blueberry">
                            Comment ça marche?
                          </SelectItem>
                          <SelectItem value="grapes">Autre</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="textera"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[1.3rem]">
                    Ecrivez votre message ici{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="border-b-[0.4rem] opacity-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Spacer tooSmall />
            <Button type="submit">Envoyer le message</Button>
          </form>
        </Form>
        <Spacer />
      </AppContainer>
    </section>
  );
}
