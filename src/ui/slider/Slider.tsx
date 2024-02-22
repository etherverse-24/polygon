// import "./slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Button from "../../components/Button";
const Slider = () => {
  interface Slides {
    video: string;
    heading: string;
    desc: string;
    img: string;
  }
  const slides: Slides[] = [
    {
      video: "./game1.mp4",
      heading: "The Jewel Hunt",
      desc: `Fight the mask, caveman, sharks, spiders, spiky turtles and many other monsters. With the right strategy you will defeat all your enemies in the game!`,
      img: "https://play-lh.googleusercontent.com/JbOyeoXDjtSz-aiCIi53sUfC3q0NWZEPdCJwtsnXUC5UJS-bXhf5n9wbxJ9Mvby5Ag=w240-h480-rw",
    },
  ];
  return (
    <section id="" className="min-h-[80vh] z-10 text-white relative">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={{
          nextEl: null, // Hide next arrow
          prevEl: null, // Hide previous arrow
        }}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 5000 }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className=" min-h-[80vh] h-full"
      >
        {slides.map((item, i) => (
          <SwiperSlide
            key={i}
            className=" h-full min-h-[80vh] flex flex-wrap lg:px-20 bg-black"
          >
            {/* <div className="test"></div> */}
            {/* <video
              src={item.video}
              className="bgvideo"
              autoPlay
              loop
              muted
              style={{ height: "100%" }}
            ></video> */}   <div className="lg:w-1/2 lg:pt-32">
            <div className="text-4xl mb-10 font-bold">{item.heading}</div>
            <div className="text-lg">{item.desc}</div>
            <div className="pt-10 w-1/3">
          <Button text={"View Game"} />

            </div>
            </div>
            <div className="lg:w-1/2 max-h-[550px] flexCenter  ">
              <video
                src="./game2.mp4"
                autoPlay
                muted
                loop
                className="h-[550px] w-[320px] object-fill "
              ></video>
            </div>{" "}
          
         
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
