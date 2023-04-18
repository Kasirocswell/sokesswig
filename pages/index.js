import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import soke from "../public/soke4.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full h-full">
      <Navbar />
      <section
        id="section1"
        data-section="section1"
        className="w-screen h-screen bg-amber-300"
      >
        <div className="flex h-screen w-full realtive">
          <p className="absolute w-[350px] h-[100px] z-0 flex-nowrap text-white text-6xl ml-[200px] mr-[-200px] mt-[280px]">
            Soke's Swig
          </p>
          <p className="absolute w-[350px] h-[100px] z-0 flex-nowrap text-white text-lg ml-[190px] mr-[-200px] mt-[355px]">
            Experience the Freshness, Savor the Energy
          </p>
          <Image
            src={soke}
            className="overflow-clip asbolute ml-[600px] pt-[65px] z-20"
          ></Image>
        </div>
      </section>
      <section
        id="section2"
        data-section="section2"
        className="w-screen h-screen bg-red-600"
      ></section>
      <section
        id="section3"
        data-section="section3"
        className="w-screen h-screen bg-green-100"
      ></section>
    </main>
  );
}
