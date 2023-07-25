import { CSSProperties, MouseEvent, ReactElement, ReactNode } from "react";
import "./style.css";

type GrayButtonProps = {
  children: ReactNode;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
};

const GrayButton = ({
  children,
  onClick,
  className,
  disabled,
  style,
}: GrayButtonProps): ReactElement => {
  return (
    <button
      className={`py-1 border cursor-pointer bg-[F5F5F5] flex  bg-gradient-to-br from-white to-gray-200 shadow-inner focus:bg-[e6e6e6]  btn-normal px-3  justify-center items-center ${className}`}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default GrayButton;
