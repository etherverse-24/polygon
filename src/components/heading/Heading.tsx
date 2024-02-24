import { FC } from "react";

interface headingProps {
  text: string;
  className?: string;
  shadow?:boolean
}

const Heading: FC<headingProps> = ({ text, className ,shadow}) => {
  return (
    <h1
      className={`main-heading text-white text-5xl font-semibold  uppercase ${className} `}
      style={{  textShadow:`${shadow && " 0 0 46px white"}`}}
    >
      {text}
    </h1>
  );
};

export default Heading;
