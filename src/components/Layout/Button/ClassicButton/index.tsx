import { COLOR_CLASSIC_BUTTON } from "@/constant/button";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, MouseEvent, ReactNode } from "react";
import "./index.css";

interface ClassicButtonProps {
  icon?: IconDefinition;
  label?: ReactNode;
  background?: string;
  title?: string;
  isBorder?: boolean;
  className?: string;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  customIcon?: React.ReactNode;
  disable?: boolean;
  iconpro?: string;
}

const ClassicButton: FC<ClassicButtonProps> = ({
  icon,
  label,
  background,
  isBorder = true,
  className,
  onClick,
  title,
  customIcon,
  disable,
  iconpro,
}) => {
  return (
    <button
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
      type="button"
      title={title}
      disabled={disable}
      className={`classic-button items-center  flex gap-[4px] px-[10px] py-[6px] text-[11px] leading-4 hover:cursor-pointer ${
        isBorder ? "border" : ""
      } ${
        !background
          ? "bg-[#F5F5F5] text-[#333333] border-[#b3b3b3] gray-btn"
          : ""
      } ${
        background === COLOR_CLASSIC_BUTTON.GREEN
          ? "bg-[#ACC70A] bg-gradient-to-r from-[#BACF0B] to-[#98BA09] bg-repeat-x border-[#7C9710] text-white"
          : ""
      } ${
        background === COLOR_CLASSIC_BUTTON.BLUE
          ? "bg-[#3B94E5] border-[#3C6791] text-white hover:bg-[#0062cc]"
          : ""
      }
      ${
        background === COLOR_CLASSIC_BUTTON.DARK
          ? "bg-[#343A40] border-[#393e42] text-white hover:bg-[#1d2124]"
          : ""
      }
      ${
        background === COLOR_CLASSIC_BUTTON.RED
          ? "bg-[#DC3545] border-[#df2739] text-white hover:bg-[#bd2130]"
          : ""
      }
      ${disable ? "" : "classic-button active:bg-[#e6e6e6]"}
      ${className || ""}`}
    >
      {customIcon ?? (
        <span>
          {icon && <FontAwesomeIcon icon={icon} />}
          {iconpro && <i className={`${iconpro}`}></i>}
        </span>
      )}
      {label && label}
    </button>
  );
};

export default ClassicButton;
