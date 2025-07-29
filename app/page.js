import BgLayout from "@/components/layouts/bgLayout";
import About from "@/components/sections/about";
import Faqs from "@/components/sections/faqs";
import Hero from "@/components/sections/hero";
import Products from "@/components/sections/homeProducts";
import House from "@/components/sections/house";

export default function Home() {
  return (
    <BgLayout>
      <Hero/>
      <House/>
      <Products/>
      <About/>
      <Faqs/>
      {/* <div className="h-screen"/>
      <div className="h-screen"/>
      <div className="h-screen"/>
      <div className="h-screen"/> */}
    </BgLayout>
  );
}
