import { COLOR_PRIMARY_BUTTON } from "@/constant/button";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface PrimaryButtonProps {
  icon?: IconDefinition;
  color?: string;
  label?: string;
  className?: string;
  onClick?: () => void;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  icon,
  color,
  label,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`text-[12px] leading-10 px-4 font-global ${
        !color &&
        "border border-[#343a40] border-solid rounded text-[#FFFFFF] bg-[#343a40] hover:bg-[#1d2124]"
      } ${
        color === COLOR_PRIMARY_BUTTON.BTN_PRIMARY_INFO
          ? "border border-[#007bff] border-solid rounded text-[#FFFFFF] bg-[#007bff] hover:bg-[#0062cc]"
          : color === COLOR_PRIMARY_BUTTON.BTN_PRIMARY_DANGER
          ? "border border-[#dc3545] border-solid rounded text-[#FFFFFF] bg-[#dc3545] hover:bg-[#bd2130]"
          : color === COLOR_PRIMARY_BUTTON.BTN_PRIMARY_WARNING
          ? "border border-[#ffc107] border-solid rounded text-[#FFFFFF] bg-[#ffc107] hover:bg-[#d39e00]"
          : color === COLOR_PRIMARY_BUTTON.BTN_PRIMARY_LIGHT
          ? "border border-[#f1f3f4] border-solid rounded text-[#1d2124] bg-[#f1f3f4] hover:bg-[#efefef]"
          : null
      }
      ${className}
      `}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {label && <span className={`${icon && "ml-[6px]"}`}>{label}</span>}
    </button>
  );
};

export default PrimaryButton;
