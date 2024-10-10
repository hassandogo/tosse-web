import HomeAvailability from "@/components/home/homeAvailability";
import { HomeBanner } from "@/components/home/homeBanner";
import HomeDownload from "@/components/home/homeDownload";
import HomeFunctioning from "@/components/home/homeFunctioning";
import HomeOffline from "@/components/home/homeOffline";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function Home({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)
  return (
    <>
      <HomeBanner dictionary={dictionary["home-banner"]} />
      <main>
        <HomeFunctioning dictionary={dictionary["home-functioning"]} />
        <HomeOffline dictionary={dictionary["home-offline"]} />
        <HomeDownload dictionary={dictionary["home-download"]} />
        <HomeAvailability dictionary={dictionary["home-availability"]} />
      </main>
    </>
  );
}
