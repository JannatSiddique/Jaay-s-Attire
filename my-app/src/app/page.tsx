import Image from "next/image";
import Hero from "@/components/hero";
import Services from "@/components/services";
import BestSelling from "@/components/bestselling";

export default function Home() {
  return (
    <div className="">
    <Hero/>
    <Services/>
    <BestSelling/>
    </div>
  );
}
