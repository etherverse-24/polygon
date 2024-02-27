import { FC } from "react";
import "./gamecard.scss";
interface GameCardProps {
  item: {
    img: string;
    Game_name: string;
    des?: string;
    link?: string;
  };
  comingSoon?: boolean;
  i?: number;
}

const GameCard: FC<GameCardProps> = ({ item, comingSoon,i }) => {
  return (
    <div className="card w-full  lg:w-[300px] lg:h-[400px] mx-auto relative bg-[#0c0c0c] " data-aos="zoom-in" data-aos-delay={`${i&&i*50}`}>
      <div className="absolute w-full h-full inset-0 z-10 shadow"></div>
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
        </div>
      </div>
      <div className="z-20 bottom-4 lg:bottom-9 flexCenter w-full absolute" data-aos="zoom-out" >
        <button
          disabled={comingSoon}
          className={`flexCenter  px-6 lg:w-52  text-white bg-[rgba(247,247,247,.1)] p-2 lg:p-4 rounded-3xl shadow
          ${comingSoon ? "cursor-not-allowed" : "cursor-pointer"} `}
        >
          {comingSoon ? (
            <p>Coming Soon...</p>
          ) : (
            <a href={item.link}>Play Now</a>
          )}
        </button>
      </div>
    </div>
  );
};

export default GameCard;
