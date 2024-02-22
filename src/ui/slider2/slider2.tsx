import { FC } from "react";
import Button from "../../components/Button";
interface Slides {
  video: string;
  heading: string;
  desc: string;
  img?: string;
}
const Slider2: FC<Slides> = ({ heading, desc, video }) => {
  return (
    <section id="" className="min-h-[80vh] z-10 text-white relative bg-black">
      <div className=" h-full min-h-[80vh] lg:w-[85%] p-10 lg:p-0 mx-auto flex flex-wrap ">
        <div className="lg:w-1/2 lg:pt-32 text-center lg:text-left">
          <div className="text-4xl mb-10 font-bold">{heading}</div>
          <div className="text-lg">{desc}</div>
          <div className="pt-10 lg:w-1/3 w-2/3 mx-auto lg:mr-auto lg:ml-0 ">
            <Button text={"View Game"} />
          </div>
        </div>
        <div className="lg:w-1/2 max-h-[550px] flexCenter  ">
          <video
            src={video}
            autoPlay
            muted
            loop
            className="h-[550px] w-[320px] object-fill "
          ></video>
        </div>{" "}
      </div>
    </section>
  );
};

export default Slider2;
