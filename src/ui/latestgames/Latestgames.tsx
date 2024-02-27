import { latest_games } from "../../constents";
import "swiper/css/autoplay";
import GameCard from "../../components/GameCard";
import Heading from "../../components/heading/Heading";
const Latestgames = () => {
  return (
    <section id="games" className="px-2 lg:px-28 py-20 min-h-lvh bg-[#0e0e0e]">
      <Heading shadow text="Latest Games"  className="text-center" />
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-3 pt-10 " >
        {latest_games.map((item, i) => (
          <GameCard item={item} key={i} i={i} />
        ))}
      </div>
    </section>
  );
};

export default Latestgames;
