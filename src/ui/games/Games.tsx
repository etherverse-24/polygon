import { games } from "../../constents";
import "./games.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper/modules";
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
        <div id="game-cards-collection" className="w-dyn-list">
          <div role="list" className="flex flex-wrap gap-2">
            {games.map((item) => (
              <div
                role="listitem"
                className="w-dyn-item"
                style={{ display: "block" }}
              >
                <div className="card w-full lg:h-[400px] lg:w-[340px]">
                  <img
                    src={item.img}
                    loading="lazy"
                    alt="A knight holding an axe in full body armour"
                    className="card-bg-img"
                  />
                  <div className="card-content">
                    <div className="card-content-bottom with-margin-top">
                      <h3 className="heading-2 text-white text-bold">
                        {item.Game_name}
                      </h3>
                      <div className="flex-grow">
                        <div className="text-white">{item.des}</div>
                      </div>
                      <div className="flexCenter text-white bg-[rgba(247,247,247,.1)] p-4 rounded-3xl cursor-pointer">
                        <div>View game</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;
