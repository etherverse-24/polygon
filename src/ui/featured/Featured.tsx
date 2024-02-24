import Heading from "../../components/heading/Heading";
import "./feature.scss";

const Featured = () => {
  return (
    <section
      id="featured"
      className="min-h-[80vh] z-10 text-white relative "
    >
      <div className="test"></div>
      {/* <img src="/bg.png" className="absolute w-full h-full opacity-50 -z-10" alt="" /> */}
      <div className="relative z-10 lg:w-[85%] mx-auto">
        <div className="pt-10 lg:pt-32 lg:w-1/3 Center ">
          {/* <img src="https://www.metadogeunity.in/hero.png"
                loading="lazy"
                alt=""
                className="games-main-img-logo lg:mb-4"/> */}
          <h1 className="text-[40px] text-center lg:text-left" data-aos="fade-up">
            Our Featured Game
          </h1>
          <h1 className="text-3xl text-gray-400 pt-5 text-center lg:text-left"  data-aos="fade-up" data-aos-delay="100">
          <Heading text="MetadogeUnity" className="text-gray-400"/>
          </h1>
          <h2 className="text-lg pt-10 text-gray-600 text-center lg:text-left"  data-aos="fade-up" data-aos-delay="100">
            MULTICHAIN METAVERSE AAA GAMEFI PLATFORM THAT COMBINES THE POWER OF
            ACCOUNT ABSTRACTION AND BITCOIN
          </h2>{" "}
        </div>
        <div className="hero-video-product-page is-game">
          <video src="./meta.mp4" muted autoPlay loop></video>
          <div className="overlay1" />
          {/* <div className="games-main-img-inner">
            <div className="games-main-img-content">
              <img
                src="https://www.metadogeunity.in/hero.png"
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
          </div> */}
          {/* <div className="img-cover w-embed">
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
                <source src="./metadoge.mp4" data-wf-ignore="true" />
              </video>
            </div>
          </div> */}
        </div>{" "}
      </div>
    </section>
  );
};

export default Featured;
