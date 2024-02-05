import "./feature.scss";

const Featured = () => {
  return (
    <section id="featured" className="min-h-[70vh]  text-white relative">
      {/* <img src="/bg.png" className="absolute w-full h-full opacity-50 -z-10" alt="" /> */}
      <div className="relative   w-[85%] mx-auto">
        <div className="pt-32 w-1/2 relative z-2">
          <h1 className="text-3xl">Our Featured Game</h1>
          <h1 className="text-7xl pt-10">MetaDogeUnity</h1>
          <h2 className="text-lg pt-10">
            MULTICHAIN METAVERSE AAA GAMEFI PLATFORM THAT COMBINES THE POWER OF
            ACCOUNT ABSTRACTION AND BITCOIN
          </h2>{" "}
        </div>
        {/* <div className='uuu1'>
    <video className="absolute uuu top-10 right-40 h-[400px]" src="https://player.vimeo.com/progressive_redirect/playback/808950926/rendition/720p/file.mp4?loc=external&signature=d2e4ab64d75abc4c9c1d1adcfb5a86b7afa250d5844883de6fef34026b69a0f2" muted autoPlay></video>

    </div> */}
        <div className="hero-video-product-page is-game ">
          <div className="overlay" />
          <div className="games-main-img-inner">
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
                <source
                  src="https://player.vimeo.com/progressive_redirect/playback/808950926/rendition/720p/file.mp4?loc=external&signature=d2e4ab64d75abc4c9c1d1adcfb5a86b7afa250d5844883de6fef34026b69a0f2"
                  data-wf-ignore="true"
                />
              </video>
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Featured;
