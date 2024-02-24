import "./App.css";
import Featured from "./ui/featured/Featured";
import Footer from "./ui/footer/Footer";
import Game from "./ui/game/Game";
import Latestgames from "./ui/latestgames/Latestgames";
import Hero from "./ui/hero/Hero";
import Navbar from "./ui/navbar/Nav";
import GameSlider from "./ui/gameslider/GameSlider";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider2 from "./ui/slider2/slider2";
function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Latestgames />
      <Slider2
        video="./game3.mp4"
        heading="Space Fighter"
        desc="Fight the mask, caveman, sharks, spiders, spiky turtles and many other monsters. With the right strategy you will defeat all your enemies in the game!"
      />
      <GameSlider />
      <Game />
      <Slider2
        video="./game2.mp4"
        heading="The Jewel Hunt"
        desc="Fight the mask, caveman, sharks, spiders, spiky turtles and many other monsters. With the right strategy you will defeat all your enemies in the game!"
      />
      <Footer />
    </>
  );
}

export default App;
