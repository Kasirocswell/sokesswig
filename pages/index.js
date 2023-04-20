import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import soke from "../public/soke4.png";
import berries from "../public/IMG_2421.jpg";
import glass from "../public/IMG_2400.jpg";
import ButtonComponent from "../components/buttonComponent";
import smoothies from "../public/smoothies.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full h-full overflow-x-clip">
      <Navbar />
      <section
        id="section1"
        data-section="section1"
        className="w-screen h-screen bg-amber-300"
      >
        <div className="flex h-screen w-full realtive">
          <p className="absolute w-[350px] h-[100px] z-0 flex-nowrap text-white text-6xl ml-[200px] mr-[-200px] mt-[200px]">
            Soke's Swig
          </p>
          <p className="absolute w-[350px] h-[100px] z-0 flex-nowrap text-white text-lg ml-[190px] mr-[-200px] mt-[270px]">
            Experience the Freshness, Savor the Energy
          </p>
          <div className="flex flex-row">
            <button className="bg-white text-black rounded-xl absolute w-[100px] h-[50px] ml-[200px] mr-[-200px] mt-[320px]">
              Order Now!
            </button>
            <button className="bg-white text-black rounded-xl absolute w-[100px] h-[50px] ml-[400px] mr-[-200px] mt-[320px]">
              See Flavors
            </button>
          </div>
          <Image
            src={glass}
            className=" w-[300px] h-[400px] overflow-clip asbolute ml-[600px] my-auto pl-4 mr-[-100px]"
          ></Image>
        </div>
      </section>
      <section
        id="section2"
        data-section="section2"
        className="w-screen h-screen bg-red-600"
      >
        <div className="flex w-full h-full">
          <div className="w-[525px] h-[500px] bg-red-500 pt-[50px] mt-4 ml-[50px]">
            <Image src={berries} className="w-[500px] h-[500px] mb-4" />
          </div>
          <div className="w-400 h-full flex flex-col">
            <h2 className="text-6xl pl-[100px] pt-4">Fresh Ingredients</h2>
            <p className="text-md pl-[100px] pt-8 flex-wrap w-[600px]">
              Discover the vibrant, invigorating world of Soke's Swig, where
              every sip is a celebration of nature's finest offerings. At Soke's
              Swig, we passionately believe in the transformative power of fresh
              ingredients, handpicked and expertly blended to create a symphony
              of taste, health, and vitality. Our commitment to quality and
              freshness is the cornerstone of our success. We pride ourselves on
              sourcing only the ripest, most nutrient-rich fruits and
              vegetables, ensuring that every glass of Soke's Swig delivers a
              powerhouse of antioxidants, vitamins, and minerals. Each juice is
              expertly crafted to elevate your senses and nourish your body. Our
              in-house juice connoisseurs masterfully blend flavors and textures
              to create tantalizing, thirst-quenching concoctions that are as
              delicious as they are nutritious. At Soke's Swig, we never
              compromise on freshness. Our juices are cold-pressed and bottled
              within hours of being picked, preserving the vibrant, natural
              flavors and the vital nutrients that are the essence of our brand.
              Experience the revitalizing magic of Soke's Swig and let the pure,
              unadulterated goodness of nature's bounty fuel your body and
              awaken your soul. Cheers to a healthier, more radiant you!
            </p>
          </div>
        </div>
      </section>
      <section
        id="section3"
        data-section="section3"
        className="w-screen h-screen bg-green-300"
      >
        <div className="flex w-full h-full">
          <div className="w-400 h-full flex flex-col">
            <h2 className="text-6xl pl-[600px] pr-[80px] pt-4">
              Made with California love!
            </h2>
            <p className="text-md pl-[600px] pt-8 whitespace-nowrap">
              More foods stuff will go here!
            </p>
          </div>
          <div className="w-[525px] h-[500px] bg-green-500 pt-[50px] pl-[30px] mt-4 mr-[50px]">
            <Image src={smoothies} className="w-[500px] h-[500px] mb-4" />
          </div>
        </div>
      </section>
      <footer className="bg-green-400">Soke's Swig LLC 2023</footer>
    </main>
  );
}
