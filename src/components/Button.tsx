import { FC } from "react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
}
const Button: FC<ButtonProps> = ({ text, href, onClick }) => {
  return (
    <div className="w-full btn lg:w-auto flexCenter p-8 py-3 text-white  rounded-lg ">
      <a href={href} className="mx-auto w-max">
        <button onClick={onClick}>{text}</button>
      </a>
    </div>
  );
};

export default Button;
