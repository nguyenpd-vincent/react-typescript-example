import { COLOR_RADIO_BUTTON } from "@/constant/button";
import { FC } from "react";

interface RadioButtonProps {
  color?: string;
  label1?: string;
  label2?: string;
  color2?: string;
  onClick?: () => void;
}

const RadioButton: FC<RadioButtonProps> = ({
  color,
  label1,
  label2,
  color2,
}) => {
  return (
    <label
      className={`pl-2 rounded-[3px] inline-flex cursor-pointer ${
        !color && "bg-[#343a40]"
      }
          ${
            color === COLOR_RADIO_BUTTON.WHITE
              ? "bg-[#e9ecef]"
              : color === COLOR_RADIO_BUTTON.GREEN
              ? "bg-[#28a745]"
              : color === COLOR_RADIO_BUTTON.RED
              ? "bg-[#dc3545]"
              : null
          }`}
    >
      <input type="radio"></input>
      {
        <span
          className={`text-[12px] leading-6 ml-2 px-2 ${
            !label2 && "rounded-[3px]"
          } ${!color && "bg-[#333] text-[#fff]"}
        ${
          color === COLOR_RADIO_BUTTON.GREEN || color === COLOR_RADIO_BUTTON.RED
            ? "text-[#fff] bg-[#333] bg-opacity-[0.06]"
            : null
        }
        ${
          color === COLOR_RADIO_BUTTON.WHITE
            ? "text-[#6E7687] bg-[#333] bg-opacity-[0.06]"
            : null
        }
        `}
        >
          {label1}
        </span>
      }

      {label2 && color2 && (
        <span
          className={`text-[12px] leading-6 px-2 rounded-r-[3px] ${
            color2 === COLOR_RADIO_BUTTON.YELLOW
              ? "text-[#FFF] bg-[#FFC107]"
              : null
          }`}
        >
          {label2}
        </span>
      )}
    </label>
  );
};

export default RadioButton;
