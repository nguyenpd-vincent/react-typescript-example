import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import "./index.css";

interface ButtonProps {
  label?: string;
  icon?: IconDefinition;
  isBackground?: boolean;
  onClick?: () => void;
}

const HeaderButton: FC<ButtonProps> = ({
  label,
  icon,
  isBackground,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`header-button flex items-center text-white text-[11px] font-global border-0
                      ${
                        isBackground
                          ? "bg-[#5A5A5A] px-[10px] py-[6px]"
                          : "hover:bg-[#353535] hover:cursor-pointer h-full"
                      } 
                      ${
                        icon &&
                        isBackground &&
                        "max-h-[28px] px-[10px] py-[6px] text-[1rem] font-[900]"
                      }
                      ${
                        icon &&
                        !isBackground &&
                        "text-[1rem] font-[900] h-full px-[15px] py-[10px]"
                      }
                      ${label && !isBackground && "px-[15px] py-[10px]"}`}
    >
      {label && label}
      {icon && <FontAwesomeIcon icon={icon} />}
    </button>
  );
};

export default HeaderButton;
