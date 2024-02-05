import { games } from "../../constents";

const Game = () => {
  return (
    <section className="px-2 lg:px-32 py-20 min-h-lvh">
      <h1 className="text-white text-5xl text-center">Games</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-10 ">
        {
            games.map((game, index) => (
                <div key={index} className="w-full mx-auto h-96 bg-[#171717]"></div>
            ))
        }
       
      </div>
    </section>
  );
};

export default Game;
