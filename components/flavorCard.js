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
    <div className="flavor-card-container flex flex-col rounded-2xl mx-auto my-auto container w-[270px] h-[470px] mt-[90px] md:w-[570px] md:h-[770px] md:mt-[30px] xl:w-[670px] xl:h-[640px] xl:mt-[2px] bg-rose-100">
      <div className="flavor-img-container flex flex-row image-stats-container mt-[10px] md:mt-[30px] xl:px-[50px] text-black justify-between rounded">
        <Image
          src={image}
          alt=""
          className="w-[100px] h-[200px] ml-[20px] mb-[20px] md:w-[220px] md:h-[380px] md:ml-[30px] md:mb-[30px] flex rounded-lg"
        />
        <div className="flavor-card-stats-container pr-[20px] flex-col stats-container">
          <h2 className="text-2xl md:text-4xl xl:text-6xl">{title}</h2>
          <p className="text-[30px]">{stats1}</p>
          <p className="text-[30px]">{stats2}</p>
          <p className="text-[30px]">{stats3}</p>
          <p className="text-[30px]">{stats4}</p>
          <p className="text-[30px]">{stats5}</p>
          <p className="text-[30px]">{stats6}</p>
        </div>
      </div>
      <div className="text-[11.5px] px-[20px] md:text-[22.5px] md:px-[40px] xl:text-[17px] text-black">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FlavorCard;
