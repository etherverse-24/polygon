import "./gameslider.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay ,EffectFade} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-fade';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Heading from "../../components/heading/Heading";
const GameSlider = () => {
  interface Slides {
    video: string;
    heading: string;
    desc: string;
    img:string;
  }
  const slides: Slides[] = [
    {
      video: "./1.mp4",
      heading: "The Mask World Adventure Game",
      desc: `Fight the mask, caveman, sharks, spiders, spiky turtles and many other monsters. With the right strategy you will defeat all your enemies in the game!`,
      img:"https://play-lh.googleusercontent.com/JbOyeoXDjtSz-aiCIi53sUfC3q0NWZEPdCJwtsnXUC5UJS-bXhf5n9wbxJ9Mvby5Ag=w240-h480-rw"
    },
    // {
    //   video: "./bg1-video.mp4",
    //   heading: "  MetaDogeUnity",
    //   desc: ` MULTICHAIN METAVERSE AAA GAMEFI PLATFORM THAT COMBINES THE POWER OF ACCOUNT ABSTRACTION AND BITCOIN`,
    //   img:''
    // },
    {
      video: "./4.mp4",
      heading: "Stickman Warrior Fighting Wars",
      desc: `Stickman Shadow Warrior is great-to-play of the new shadow stickman style games in a fantasy dark world theme. A great combination of action, role playing games.`,
      img:'game3.png'
    },
  ];
  return (
    <section id="gameslider" className="min-h-[80vh] z-10 text-white relative">
      <Swiper
         spaceBetween={30}
         effect={'fade'}
         navigation={{
          nextEl: null, // Hide next arrow
          prevEl: null, // Hide previous arrow
        }}
         pagination={{
           clickable: true,
         }}
         scrollbar={{ draggable: true }}
         autoplay ={{delay:5000}}
         modules={[EffectFade, Navigation, Pagination,Autoplay]}
        className="relative -z-0 min-h-[80vh] h-full"
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i} className="relative h-full min-h-[80vh]">
            <div className="test"></div>
            <video
              src={item.video}
              className="bgvideo"
              autoPlay
              loop
              muted
              style={{ height: "100%" }}
            ></video>
            <div className="relative z-10 lg:w-[85%] mx-auto">
              <div className="pt-10 lg:pt-32 lg:w-1/3">
                <Heading text="Our Games" className="text-center lg:text-left"/>
                <h1 className="text-3xl text-gray-400  pt-10 text-center lg:text-left">
                  {item.heading}
                </h1>
                <h2 className="text-lg text-gray-400 pt-10 text-center lg:text-left">
                  {item.desc}
                </h2>{" "}
              </div>
              <div className="hero-video-product-page is-game">
                <div className="overlay" />
                <div className="games-main-img-inner">
                  <div className="games-main-img-content">
                    <img
                      src={item.img}
                      loading="lazy"
                      alt=""
                      className="games-main-img-logo"
                    />
                    <a
                      href="/play/guild-of-guardians"
                      className="bg-[rgba(247,247,247,.1)] p-4 rounded-3xl cursor-pointer"
                    >
                      View game
                    </a>
                  </div>
                </div>
                <div className="img-cover w-embed">
                  <div
                    style={{ width: "100%", height: "100%" }}
                    className="w-background-video w-background-video-atom"
                  >
                    <video
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        aspectRatio: "16 / 12",
                      }}
                      width={788}
                      height={544}
                      playsInline
                      loop
                      muted
                      autoPlay
                      data-wf-ignore="true"
                      data-object-fit="cover"
                    >
                      <source src={item.video} data-wf-ignore="true" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GameSlider;
