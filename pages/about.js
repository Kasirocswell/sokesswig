// Keep prettier from going to the top
import Navbar from "@/components/Navbar";
import Image from "next/image";
import soke4 from "../public/soke4.png";
const About = () => {
  return (
    <div className="w-screen h-full md:h-screen xl:h-full 2xl:h-screen bg-yellow-200">
      <Navbar textColor={"text-black"}></Navbar>
      <div className="flex flex-col justify-between">
        <Image
          src={soke4}
          className="w-[320px] h-[345px] pt-[30px] ml-[30px] md:ml-[230px] xl:ml-[490px] xl:mt-[6px] 2xl:ml-[720px]"
        />
        <div>
          <h1 className="text-black text-4xl text-center md:pb-[5px] font-title">
            About Soke
          </h1>
          <div className="text-black text-[17px] px-[5px] mb-[50px] md:px-[25px] xl:px-[200px] 2xl:text-[22px] font-thin">
            <p>
              Soke is an extraordinary woman from St. Croix who has turned her
              passion for natural juices into a successful business venture.
              Growing up, Soke spent countless hours helping her father in their
              family's kitchen, where they would create delicious, refreshing
              juices using only natural ingredients.
            </p>
            <p>
              <br />
              It was during these early years that Soke developed a deep
              appreciation for the power of fresh fruits and vegetables and
              their ability to nourish and heal the body. After completing her
              education, Soke decided to turn her love for natural juices into a
              business. She founded Sokesswig, a company that specializes in
              creating delicious, all-natural juices that are free from
              preservatives and artificial flavors.
            </p>
            <br />
            <p>
              Her products have become extremely popular on the island and
              beyond, thanks to their refreshing taste and health benefits.
              Soke's success is a testament to her hard work, dedication, and
              passion for natural ingredients. She has become a role model for
              young entrepreneurs on the island, inspiring them to pursue their
              dreams and turn their passions into successful businesses.
            </p>
            <br />
            <p>
              Today, Sokesswig is a thriving company that continues to expand,
              and Soke remains committed to promoting the importance of healthy
              living and the power of natural ingredients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
