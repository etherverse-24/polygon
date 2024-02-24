import { FC } from "react";

interface headingProps {
  text: string;
  className?: string;
  shadow?: boolean;
}

const Heading: FC<headingProps> = ({ text, className, shadow }) => {
  return (
    <h1
      className={`main-heading ${
        shadow && "text-gray-200"
      } lg:text-5xl text-4xl font-semibold uppercase ${className} `}
      style={{ textShadow: `${shadow && " 0 0 30px white"}` }}
      data-aos="fade-up"
    >
      {text}
    </h1>
  );
};

export default Heading;
