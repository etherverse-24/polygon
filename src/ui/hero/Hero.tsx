import "./hero.scss";
const Hero = () => {
  return (
    <section id="hero" className="px-1 lg:p-2  pb-0 relative overflow-hidden">
      <img
        src="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659c0706e77100ec0ebec81c_Hero%20section%20background.webp"
        className="section_img-overflow"
        alt=""
      />
      <div className="hero_bg-gradient z-[2]"></div>
      <div className="min-h-lvh relative lg:rounded-[40px] bg-[#080808] overflow-hidden p-4">
        <div className="container_bg z-0">
          <img
            src="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659c0890d7f4a89b66aedea9_Home%20Hero%20Bg%2001.webp"
            alt=""
            sizes="(max-width: 767px) 100vw, 62vw"
            srcSet="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659c0890d7f4a89b66aedea9_Home%20Hero%20Bg%2001-p-500.png 500w, https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659c0890d7f4a89b66aedea9_Home%20Hero%20Bg%2001-p-800.webp 800w, https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659c0890d7f4a89b66aedea9_Home%20Hero%20Bg%2001.webp 1021w"
            className="hero_bg-image"
          />
          <img
            src="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659c08906102d36e42281d15_Home%20Hero%20Bg%2003.webp"
            alt=""
            sizes="(max-width: 767px) 100vw, 68vw"
            srcSet="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659c08906102d36e42281d15_Home%20Hero%20Bg%2003-p-500.webp 500w, https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659c08906102d36e42281d15_Home%20Hero%20Bg%2003-p-800.webp 800w, https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/659c08906102d36e42281d15_Home%20Hero%20Bg%2003.webp 1032w"
            className="hero_bg-image is-2"
          />
          <img
            src="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65ae7d564c5383698df27957_Glass%20shield%404-1080x1080%201.webp"
            // src="/Header.png"
            loading="eager"
            sizes="(max-width: 479px) 100vw, 92vw"
            srcSet="https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65ae7d564c5383698df27957_Glass%20shield%404-1080x1080%201-p-500.webp 500w, https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65ae7d564c5383698df27957_Glass%20shield%404-1080x1080%201-p-800.webp 800w, https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65ae7d564c5383698df27957_Glass%20shield%404-1080x1080%201.webp 1203w"
            alt=""
            className="hero_bg-image is-3"
          />
        </div>
        <div className="pt-64 w-full flex-col gap-8 flexCenter relative z-10">
          <h1 className="text-white text-center text-4xl lg:text-5xl lg:font-semibold tracking-wide ">
            PLAY 2 EARN BLOCKCHAIN UNITY GAMES!
          </h1>
          <h4 className="text-gray-500  lg:w-2/3 text-center text-xl lg:text-2xl ">
            Multichain Metaverse Gaming platform with Account abstraction with
            Fusion of Bitcoin and EVM network
          </h4>
          <div className="w-full btn lg:w-auto flexCenter p-8 py-3 text-white  rounded-lg ">
            <a href="" className="mx-auto w-max">Play Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
