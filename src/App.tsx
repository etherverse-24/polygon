import './App.css'
import Featured from './ui/featured/Featured'
import Footer from './ui/footer/Footer'
import Game from './ui/game/Game'
import Latestgames from './ui/latestgames/Latestgames'
import Hero from './ui/hero/Hero'
import Navbar from './ui/navbar/Nav'
import GameSlider from './ui/gameslider/GameSlider'
import Slider from './ui/slider/Slider'
import { useEffect } from 'react'
import Aos from 'aos';  
import "aos/dist/aos.css";
function App() {
useEffect(() => {
  Aos.init({duration: 1000});
}
, [])

  return (
 <>
 <Navbar/>
 <Hero/>
 <Featured/>
 <Latestgames/>
 <Slider/>
 <GameSlider/>
 <Game/>
 <Footer/>
 </>
  )
}

export default App
