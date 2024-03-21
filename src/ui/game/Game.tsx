import { useState } from "react";
import GameCard from "../../components/GameCard";
import Heading from "../../components/heading/Heading";
import { games, GameType } from "../../constents"; // Assuming games and GameType are properly defined
import Tabs from "./Tabs";

const Game = () => {
  const [selectedTab, setSelectedTab] = useState<string>("All");

  // Filter games based on the selected tab
  const filteredGames: GameType[] = selectedTab === "All" ? games.All : games[selectedTab as keyof typeof games];

  return (
    <section
      id="games_section"
      className="px-2 lg:px-32 py-20 min-h-lvh bg-[#0e0e0e]"
    >
      {/* <img src="./diamond.webp" alt="" /> */}
      <Heading shadow text="All Games" className="text-center" />
      <Tabs selectedTab={setSelectedTab} className="mt-5" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-3 pt-10 ">
        {filteredGames.map((game: GameType, index: number) => (
          <GameCard
            item={game}
            key={index}
            comingSoon={game.coming_soon}
            i={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Game;