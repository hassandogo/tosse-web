import Availability from "@/components/availability";
import Footer from "@/components/footer/footer";
import Functioning from "@/components/functioning";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero />
      <Functioning/>
      <Availability />
      <Footer/>
    </div>
  );
}
