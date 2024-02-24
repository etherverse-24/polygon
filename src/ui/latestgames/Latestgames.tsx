import { latest_games } from "../../constents";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import GameCard from "../../components/GameCard";
import Heading from "../../components/heading/Heading";
const Latestgames = () => {
  return (
    <section id="games" className="px-2 lg:px-28 py-20 min-h-lvh bg-[#0e0e0e]">
      <Heading text="Latest Games"/>
      {/* <h1 className="text-white t ext-5xl font-semibold text-center uppercase"></h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-3 pt-10 ">
        {latest_games.map((item, i) => (
          <GameCard item={item} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Latestgames;
