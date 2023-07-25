import { COLOR_OUTLINE_BUTTON } from "@/constant/button";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface OutlineButtonProps {
  icon?: IconDefinition;
  iconpro?: string;
  color?: string;
  label?: string;
  onClick?: () => void;
  customIcon?: React.ReactNode;
}

const OutlineButton: FC<OutlineButtonProps> = ({
  icon,
  iconpro,
  color,
  label,
  onClick,
  customIcon,
}) => {
  return (
    <button
      onClick={onClick}
      className={`text-[12px] leading-10 px-4 font-global ${
        !color &&
        "border border-[#343a40] border-solid rounded text-[#343a40] hover:text-[#fff] hover:bg-[#343a40]"
      } ${
        color === COLOR_OUTLINE_BUTTON.BTN_OUTLINE_INFO &&
        "border border-[#007bff] border-solid rounded text-[#007bff] hover:text-[#fff] hover:bg-[#007bff]"
      }`}
    >
      {customIcon ?? (
        <span className="flex items-center gap-[8px]">
          {iconpro && <i className={`${iconpro}`}></i>}
          {label}
          {icon && <FontAwesomeIcon icon={icon} />}
        </span>
      )}
    </button>
  );
};

export default OutlineButton;
