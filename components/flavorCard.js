import Image from "next/image";

const FlavorCard = ({
  cardId,
  image,
  title,
  stats1,
  stats2,
  stats3,
  stats4,
  stats5,
  stats6,
  description,
}) => {
  return (
    <div className="flavor-card-container flex flex-col rounded-2xl mx-auto my-auto container w-[270px] h-[470px] mt-[90px] md:w-[570px] md:h-[770px] md:mt-[30px] lg:w-[670px] lg:h-[640px] lg:mt-[2px] xl:w-[570px] xl:h-[480px] xl:mt-[20px] 2xl:w-[700px] 2xl:h-[650px] bg-rose-100">
      <div className="flavor-img-container flex flex-row image-stats-container mt-[10px] md:mt-[30px] xl:px-[30px] xl:mt-[30px] text-black justify-center rounded">
        <Image
          src={image}
          alt=""
          className="w-[100px] h-[200px] ml-[20px] mb-[20px] md:w-[220px] md:h-[380px] md:ml-[30px] md:mb-[30px] xl:w-[140px] xl:h-[270px] 2xl:w-[200px] 2xl:h-[360px] 2xl:mb-[5px] 2xl:mr-[90px] flex rounded-lg"
        />
        <div className="flavor-card-stats-container pr-[20px] flex-col stats-container">
          <h2 className="text-2xl ml-[15px] md:text-4xl md:ml-[30px] xl:text-4xl font-title">
            {title}
          </h2>
          <p className="text-[14px] ml-[15px] md:text-[25px] md:ml-[30px] text-green-600 xl:text-[25px] font-serif font-thin italic">
            {stats1}
          </p>
          <p className="text-[14px] ml-[15px] md:text-[25px] md:ml-[30px] text-green-600 xl:text-[25px] font-serif font-thin italic">
            {stats2}
          </p>
          <p className="text-[14px] ml-[15px] md:text-[25px] md:ml-[30px] text-green-600 xl:text-[25px] font-serif font-thin italic">
            {stats3}
          </p>
          <p className="text-[14px] ml-[15px] md:text-[25px] md:ml-[30px] text-green-600 xl:text-[25px] font-serif font-thin italic">
            ++ {stats4}
          </p>
          <p className="text-[14px] ml-[15px] md:text-[25px] md:ml-[30px] text-green-600 xl:text-[25px] font-serif font-thin italic">
            ++ {stats5}
          </p>
          <p className="text-[14px] ml-[15px] md:text-[25px] md:ml-[30px] text-green-600 xl:text-[25px] font-serif font-thin italic">
            ++ {stats6}
          </p>
        </div>
      </div>
      <div className="text-[13px] px-[20px] md:text-[23px] md:px-[40px] xl:text-[15px] 2xl:text-[23px] 2xl:pt-[10px] text-black font-paragraph">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FlavorCard;
