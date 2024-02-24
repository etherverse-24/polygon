import { FC } from "react";

interface headingProps {
  text: string;
  className?: string;
}

const Heading: FC<headingProps> = ({ text, className }) => {
  return (
    <h1
      className={`${className} main-heading text-white text-5xl font-semibold text-center uppercase`}
    >
      {text}
    </h1>
  );
};

export default Heading;
