import { FC } from "react";
import "./gamecard.scss";
interface GameCardProps {
  item: {
    img: string;
    Game_name: string;
    des?: string;
  };
  comingSoon?: boolean;
}

const GameCard: FC<GameCardProps> = ({ item, comingSoon }) => {
  return (
    <div className="card w-[350px]  lg:w-[300px] h-[400px] mx-auto relative bg-[#0c0c0c] ">
      {comingSoon && (
        // <div className="absolute h-6 w-28 bg-red-200 z-20 right-0 rotate-45 translate-y-5 flexCenter translate-x-6">
        <div className="absolute z-20 right-0 rotate-45 -translate-y-9 -translate-x-9 flexCenter">
          <div className="badge-wrapper ">
            <div className="badge badge-shiny badge-gold">Coming Soon</div>
          </div>
          {/* </div> */}
        </div>
      )}
      <img
        src={item.img}
        loading="lazy"
        alt="A knight holding an axe in full body armour"
        className="card-bg-img"
      />
      <div className="card-content">
        <div className="card-content-bottom mt-56">
          {/* <h3 className=" text-white text-lg font-bold">{item.Game_name}</h3> */}
          <div className="py-2">
            <div className="text-white">{item.des}</div>
          </div>
          <div className="flexCenter text-white bg-[rgba(247,247,247,.1)] p-4 rounded-3xl cursor-pointer">
            <div>{item.Game_name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
