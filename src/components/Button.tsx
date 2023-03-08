import { ReactNode, useState } from "react";

interface Props {
  text: string;
  color: string;
  hoverColor: string;
  icon?: ReactNode;
  onClick?: () => void;
  type?: string;
}

const Button = ({ text, color, hoverColor, onClick }: Props) => {
  const [isHover, setIsHover] = useState<Boolean>(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const customStyle = {
    backgroundColor: isHover ? hoverColor : color,
  };

  return (
    <div>
      <button
        style={customStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        className={` text-grey-darkest font-bold py-3 px-5 rounded-lg drop-shadow-sm inline-flex items-center`}
      >
        <>
          <span>{text}</span>
        </>
      </button>
    </div>
  );
};

export default Button;