import "./gameslider.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
const GameSlider = () => {
  interface Slides {
    video: string;
    heading: string;
    desc: string;
  }
  const slides: Slides[] = [
    {
      video: "./bg1-video.mp4",
      heading: "  MetaDogeUnity",
      desc: ` MULTICHAIN METAVERSE AAA GAMEFI PLATFORM THAT COMBINES THE POWER OF ACCOUNT ABSTRACTION AND BITCOIN`,
    },
    {
      video: "./bg1-video.mp4",
      heading: "  MetaDogeUnity",
      desc: ` MULTICHAIN METAVERSE AAA GAMEFI PLATFORM THAT COMBINES THE POWER OF ACCOUNT ABSTRACTION AND BITCOIN`,
    },
    {
      video: "./V2-1.mp4",
      heading: "Adrak",
      desc: ` MULTICHAIN METAVERSE AAA GAMEFI PLATFORM THAT COMBINES THE POWER OF ACCOUNT ABSTRACTION AND BITCOIN`,
    },
  ];
  return (
    <section id="gameslider" className="min-h-[80vh] z-10 text-white relative">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Autoplay]}
        //   spaceBetween={50}
        slidesPerView={1}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: null, // Hide next arrow
          prevEl: null, // Hide previous arrow
        }}
        
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
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
              <div className="pt-10 lg:pt-32 lg:w-1/2 ">
                <h1 className="text-4xl text-center lg:text-left">Our Game</h1>
                <h1 className="text-4xl lg:text-7xl pt-10 text-center lg:text-left">
                  {item.heading}
                </h1>
                <h2 className="text-lg pt-10 text-center lg:text-left">
                  {item.desc}
                </h2>{" "}
              </div>
              <div className="hero-video-product-page is-game">
                <div className="overlay" />
                <div className="games-main-img-inner">
                  <div className="games-main-img-content">
                    {/* <img
                      src="https://www.metadogeunity.in/hero.png"
                      loading="lazy"
                      alt=""
                      className="games-main-img-logo"
                    /> */}
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
              </div>{" "}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default GameSlider;
