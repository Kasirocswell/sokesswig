import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import glass from "../public/IMG_2400.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="2xl:flex 2xl:flex-col xl:flex xl:flex-col lg:flex lg:flex-col md:flex md:flex-col flex flex-col w-full h-full">
      <Navbar textColor={"text-white"}></Navbar>
      <section
        id="section1"
        data-section="section1"
        className="bg-cover bg-no-repeat bg-center h-screen"
        style={{ backgroundImage: 'url("/bg1.png")' }}
      >
        <div className="container">
          <div className="text-button-img-container 2xl:flex 2xl:flex-row xl:flex xl:flex-row lg:flex lg:flex-row md:mt-[100px] md:flex md:flex-row mt-[100px]flex flex-row">
            <div className="text-button-container 2xl:mr-[75px] 2xl:ml-[500px] 2xl:mt-[210px] xl:mr-[75px] xl:ml-[330px] xl:mt-[90px] lg:mr-[45px] lg:ml-[210px] lg:mt-[130px] md:mr-[10px] md:ml-[10px] md:mt-[130px] mr-[45px] ml-[30px] mt-[130px]">
              <div className="text-container text-white text-center">
                <h2 className="2xl:text-6xl 2xl:mb-[5px] xl:text-6xl xl:mb-[5px] lg:text-6xl lg:mb-[10px] md:text-6xl md:mb-[10px] text-6xl mb-[10px]">
                  Sokes Swig
                </h2>
                <p className="2xl:text-3xl 2xl:mb-[50px] xl:text-3xl xl:mb-[50px] lg:text-3xl lg:mb-[50px] md:text-3xl md:mb-[50px] text-xl mb-[50px]">
                  Taste of the islands to your door!
                </p>
              </div>
              <div className="button-container 2xl:ml-[90px] xl:ml-[90px] lg:ml-[90px] md:ml-[100çpx] ml-[70px]">
                <button className="2xl:w-[100px] 2xl:h-[75px] 2xl:text-[25px] xl:w-[100px] xl:h-[75px] xl:text-[25px] lg:w-[100px] lg:h-[75px] lg:text-[25px] md:w-[100px] md:h-[75px] md:text-[25px] w-[80px] h-[40px] text-[15px] bg-white text-black font-bold rounded-2xl">
                  Order
                </button>
                <button className="2xl:w-[100px] 2xl:h-[75px] 2xl:text-[25px] xl:w-[100px] xl:h-[75px] xl:text-[25px] xl:ml-[25px] lg:w-[100px] lg:h-[75px] lg:text-[25px] lg:ml-[25px] md:w-[100px] md:h-[75px] md:text-[25px] md:ml-[25px] w-[80px] h-[40px] text-[15px] ml-[25px] bg-white text-black font-bold rounded-2xl">
                  Flavors
                </button>
              </div>
            </div>
            <div className="img-container 2xl:w-[300px] 2xl:h-[450px] 2xl:mt-[130px] xl:w-[250px] xl:h-[325px] xl:mt-[70px] lg:w-[250px] lg:h-[325px] lg:mt-[100px] md:w-[250px] md:h-[325px] md:mt-[100px] w-[250px] h-[325px] mt-[30px] ml-[66px]">
              <Image src={glass} className="rounded-full" />
            </div>
          </div>
        </div>
      </section>
      <section
        id="section2"
        data-section="section2"
        className="bg-cover bg-no-repeat bg-center h-screen"
        style={{ backgroundImage: 'url("/bg2.png")' }}
      >
        <div className="description-text-container 2xl:w-full 2xl:h-full 2xl:pl-[310px] xl:w-full xl:h-full xl:pl-[90px] lg:w-full lg:h-full lg:pl-[310px] md:w-full md:h-full md:pl-[4px] w-full h-full pl-[4px]flex font-bold">
          <div className="2xl:w-400 2xl:h-full 2xl:flex 2xl:flex-col 2xl:ml-[220px] 2xl:mt-[240px] xl:w-400 xl:h-full xl:flex xl:flex-col xl:mt-[220px] lg:w-400 lg:h-full lg:flex lg:flex-col lg:ml-[200px] lg:mt-[160px] lg:text-md md:h-full md:flex md:flex-col md:ml-[70px] md:mt-[260px] md:text-md h-full flex flex-col ml-[20px] mt-[215px]">
            <h2 className="2xl:text-6xl 2xl:pl-[100px] 2xl:pt-4 xl:text-6xl xl:pl-[100px] xl:pt-4 lg:pl-[100px] lg:pt-4 lg:text-2xl md:pl-[100px] md:pt-[10px] md:text-4xl pl-[80px] pt-4 text-2xl">
              Fresh Ingredients
            </h2>
            <p className="2xl:text-[17.5px] 2xl:pl-[100px] 2xl:pt-3 2xl:flex-wrap 2xl:w-[600px] xl:text-sm xl:pl-[100px] xl:pt-4 xl:flex-wrap xl:w-[600px] lg:text-md lg:pl-[100px] lg:flex-wrap lg:w-[600px] lg:text-[15.5px] md:text-md md:pl-[100px] md:flex-wrap md:w-[600px] md:mt-[30px] md:text-[16.5px] text-md pr-[40px] flex-wrap w-[400px] mt-[10px] text-[13.5px]">
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
        className="bg-cover bg-no-repeat bg-center h-screen"
        style={{ backgroundImage: 'url("/bg3.png")' }}
      >
        <div className="text-container 2xl:pt-[400px] 2xl:pl-[660px] xl:pt-[225px] xl:pl-[460px] lg:pt-[225px] lg:pl-[360px] md:pt-[325px] md:pl-[230px] pt-[325px] pl-[99px] flex flex-col ">
          <h2 className="text-6xl mb-[25px]">Coming Soon!</h2>
          <p className="font-bold">
            Check back here later for the month's finest flavor
          </p>
        </div>
      </section>
      <footer className="bg-green-400">Soke's Swig LLC 2023</footer>
    </main>
  );
}
