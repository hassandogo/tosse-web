import Availability from "@/components/availability";
import Footer from "@/components/footer/footer";
import Functioning from "@/components/functioning";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Offline from "@/components/offline";
import Download  from "@/components/download";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Functioning />
      <Offline />
      <Download />
      <Availability />
      <Footer />
    </div>
  );
}
