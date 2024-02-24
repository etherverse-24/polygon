import Button from "../../components/Button";
import "./hero.scss";
import {ReactTyped} from "react-typed";
const Hero = () => {
  return (
    <section id="hero" className="px-1 lg:p-2  pb-0 relative overflow-hidden">
      {/* <img
        src="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659c0706e77100ec0ebec81c_Hero%20section%20background.webp"
        className="section_img-overflow"
        alt=""
      /> */}
      <div className="hero_bg-gradient z-[2]">
        <video
          src="./backg_header.mp4"
          style={{ maxWidth: "none" }}
          className="lg:w-full"
          muted
          autoPlay
          loop
        ></video>
      </div>
      <div className="lg:min-h-lvh relative lg:rounded-[40px] overflow-hidden p-4">
        <div className="container_bg z-0"></div>
        <div className="lg:pt-64 pt-40 w-full flex-col gap-8 flexCenter relative z-10">
          <h1 className="text-white text-center text-4xl lg:text-6xl font-semibold tracking-wide hero-head ">
            PLAY 2 EARN {""}
            <ReactTyped
              strings={[" BLOCKCHAIN UNITY GAMES!"]}
              typeSpeed={100}
              backSpeed={30}
              loop
              cursorChar="|"
            />
          </h1>
          <h4 className="text-gray-400  lg:w-2/3 text-center text-xl lg:text-3xl ">
            Multichain Metaverse Gaming platform with Account abstraction with
            Fusion of Bitcoin and EVM network
          </h4>
          <div className="flex gap-4">
            <Button text="Play Now" />
            <div className="w-full textFix lg:w-auto flexCenter p-8 py-3   rounded-lg ">
              <a href="" className="mx-auto w-max">
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
