import { FC } from "react";
import "./gamecard.scss"
interface GameCardProps {
    item: {
        img: string;
        Game_name: string;
        des: string;
    };
    }

const GameCard:FC<GameCardProps> = ({item}) => {
  return (
    <div className="card lg:h-[450px] w-full">
      <img
        src={item.img}
        loading="lazy"
        alt="A knight holding an axe in full body armour"
        className="card-bg-img"
      />
      <div className="card-content">
        <div className="card-content-bottom mt-56">
          <h3 className=" text-white text-lg font-bold">{item.Game_name}</h3>
          <div className="py-2">
            <div className="text-white">{item.des}</div>
          </div>
          <div className="flexCenter text-white bg-[rgba(247,247,247,.1)] p-4 rounded-3xl cursor-pointer">
            <div>View game</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
