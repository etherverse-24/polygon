import './App.css'
import Featured from './ui/featured/Featured'
import Footer from './ui/footer/Footer'
import Game from './ui/game/Game'
import Latestgames from './ui/latestgames/Latestgames'
import Hero from './ui/hero/Hero'
import Navbar from './ui/navbar/Nav'
import GameSlider from './ui/gameslider/GameSlider'
function App() {


  return (
 <>
 <Navbar/>
 <Hero/>
 <Featured/>
 <Latestgames/>
 <GameSlider/>
 <Game/>
 <Footer/>
 </>
  )
}

export default App
