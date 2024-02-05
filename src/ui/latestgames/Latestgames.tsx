import { latest_games } from "../../constents";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import GameCard from "../../components/GameCard";
const Latestgames = () => {
  return (
    <section id="games" className="px-2 lg:px-28 py-20 min-h-lvh">
      <h1 className="text-white text-5xl text-center">Latest Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-3 pt-10 ">
        {latest_games.map((item, i) => (
          <GameCard item={item} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Latestgames;
