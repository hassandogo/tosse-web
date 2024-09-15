import Header from "@/components/global/Header";
import Hero from "@/components/hero/hero";
import HomeAvailability from "@/components/home/HomeAvailability";
import HomeDownload from "@/components/home/HomeDownload";
import HomeFunctioning from "@/components/home/HomeFunctioning";
import HomeOffline from "@/components/home/HomeOffline";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <HomeFunctioning />
      <HomeOffline />
      <HomeDownload />
      <HomeAvailability />
    </div>
  );
}
