import HomeAvailability from "@/components/home/homeAvailability";
import { HomeBanner } from "@/components/home/homeBanner";
import HomeDownload from "@/components/home/homeDownload";
import HomeFunctioning from "@/components/home/homeFunctioning";
import HomeOffline from "@/components/home/homeOffline";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <main>
        <HomeFunctioning />
        <HomeOffline />
        <HomeDownload />
        <HomeAvailability />
      </main>
    </>
  );
}
