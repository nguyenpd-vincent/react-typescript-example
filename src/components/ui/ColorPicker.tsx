import { convertColorInthex } from "@/utils/color";
import { ReactElement, useState } from "react";
import { CompactPicker, ColorResult } from "react-color";
import { colors } from "@/constant/colorContant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type ColorPickerProps = {
  color: number;
  onChange: (color: ColorResult) => void;
  className?: string;
  rounded?: boolean;
  icon?: IconDefinition;
};

const ColorPicker = ({
  color,
  onChange,
  rounded = false,
  icon,
  className,
}: ColorPickerProps): ReactElement => {
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleShowColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  const handleChangeColor = (color: ColorResult) => {
    handleShowColorPicker();
    onChange(color);
  };
  return (
    <div
      className={`relative bg-white h-8 w-8 border ${icon} ${
        rounded && "rounded-[50%] w-[20px] h-[20px]"
      } ${className}`}
      style={{ background: convertColorInthex(color).background }}
      onClick={handleShowColorPicker}
    >
      {showColorPicker && (
        <CompactPicker
          className="absolute right-[-32px] top-5 bg-white border"
          colors={colors}
          onChange={handleChangeColor}
          styles={{ default: { compact: { width: "260px" } } }}
        />
      )}
      {icon && (
        <span className="ml-[4px]">
          {icon && <FontAwesomeIcon icon={icon} />}
        </span>
      )}
    </div>
  );
};
export default ColorPicker;
