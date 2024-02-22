import GameCard from "../../components/GameCard";
import { games } from "../../constents";

const Game = () => {
  return (
    <section id="games" className="px-2 lg:px-32 py-20 min-h-lvh bg-[#000000]">
      {/* <img src="./diamond.webp" alt="" /> */}
      <h1 className="text-white text-5xl text-center uppercase">All Games</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-10 ">
        {
            games.map((game, index) => (
               <GameCard item={game} key={index} comingSoon={game.coming_soon}/>
            ))
        }
       
      </div>
    </section>
  );
};

export default Game;
