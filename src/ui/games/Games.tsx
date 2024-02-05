import { games } from "../../constents";
import "./games.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay,Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
const Games = () => {
  return (
    <section className="section">
      <div className="container z-2">
        <div className="spacer_80" />
        <h2 className="h_26 text-white">Latest Games</h2>
        <div className="spacer_32" />
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay,Mousewheel]}
          spaceBetween={10}
          slidesPerView={6}
          effect="fade"
          mousewheel={true}
          navigation={{
            nextEl: null, // Hide next arrow
            prevEl: null, // Hide previous arrow
          }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            // when window width is >= 920px
            320: {
              slidesPerView: 1,
            },
            752: {
              slidesPerView: 2,
            },
            920: {
              slidesPerView: 6,
            },
          }}
        >
          <div className="flex">
            {games.map((item) => (
              <SwiperSlide>
                <div className='lg:w-[220px] w-full mr-10'>
                  <div className="cat-slide_holder h-[320px] lg:h-[240px]">
                    <div>
                      <h3 className="h_24 text-white">{item.Game_name}</h3>
                    </div>
                    <img
                      alt=""
                      loading="lazy"
                      src={item.img}
                      className="cat-slide_key-visual"
                    />
                    <div className="flexCenter text-white border-2 rounded-lg cursor-pointer">
                      Play Now
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Games;
