import Button from "../../components/Button";
const Slider2 = () => {
  interface Slides {
    video: string;
    heading: string;
    desc: string;
    img: string;
  }
  const slides: Slides[] = [
    {
      video: "./game3.mp4",
      heading: "The Jewel Hunt",
      desc: `Fight the mask, caveman, sharks, spiders, spiky turtles and many other monsters. With the right strategy you will defeat all your enemies in the game!`,
      img: "https://play-lh.googleusercontent.com/JbOyeoXDjtSz-aiCIi53sUfC3q0NWZEPdCJwtsnXUC5UJS-bXhf5n9wbxJ9Mvby5Ag=w240-h480-rw",
    },
  ];
  return (
    <section id="" className="min-h-[80vh] z-10 text-white relative bg-black">
      
        {slides.map((item, i) => (
          <div
            key={i}
            className=" h-full min-h-[80vh] lg:w-[85%] mx-auto flex flex-wrap "
          >
             <div className="lg:w-1/2 lg:pt-32 ">
            <div className="text-4xl mb-10 font-bold">{item.heading}</div>
            <div className="text-lg">{item.desc}</div>
            <div className="pt-10 w-1/3">
          <Button text={"View Game"} />

            </div>
            </div>
            <div className="lg:w-1/2 max-h-[550px] flexCenter  ">
              <video
                src={item.video}
                autoPlay
                muted
                loop
                className="h-[550px] w-[320px] object-fill "
              ></video>
            </div>{" "}
          
         
          </div>
        ))}
      
    </section>
  );
};

export default Slider2;
