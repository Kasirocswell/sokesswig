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
    <div className="flex flex-col rounded-2xl mx-auto my-auto container w-[700px] h-[800px] bg-rose-100">
      <div className="flex flex-row image-stats-container text-black justify-between mx-[150px] mt-[75px] mb-[10px]">
        <Image src={image} alt="" />
        <div className="flex-col stats-container ml-[75px] mt-[25px]">
          <h2 className="text-6xl mb-[25px]">{title}</h2>
          <p className="text-2xl mb-[5px]">{stats1}</p>
          <p className="text-2xl mb-[5px]">{stats2}</p>
          <p className="text-2xl mb-[5px]">{stats3}</p>
          <p className="text-2xl mb-[5px]">{stats4}</p>
          <p className="text-2xl mb-[5px]">{stats5}</p>
          <p className="text-2xl mb-[5px]">{stats6}</p>
        </div>
      </div>
      <div>
        <p className="text-black mx-[50px] mt-[25px] text-2xl">{description}</p>
      </div>
    </div>
  );
};

export default FlavorCard;
