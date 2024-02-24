import GameCard from "../../components/GameCard";
import Heading from "../../components/heading/Heading";
import { games } from "../../constents";

const Game = () => {
  return (
    <section id="games" className="px-2 lg:px-32 py-20 min-h-lvh bg-[#0e0e0e]">
      {/* <img src="./diamond.webp" alt="" /> */}
      <Heading shadow text="All Games" className="text-center" />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-10 ">
        {games.map((game, index) => (
          <GameCard item={game} key={index} comingSoon={game.coming_soon} />
        ))}
      </div>
    </section>
  );
};

export default Game;
