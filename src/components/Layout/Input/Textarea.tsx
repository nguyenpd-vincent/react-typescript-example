import { CSSProperties, ChangeEvent, FC, MouseEvent } from "react";
type CustomTextareaProps = {
  name?: string;
  onClick?: (e: MouseEvent<HTMLTextAreaElement>) => void;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  required?: boolean;
  id?: string;
  className?: string;
  style?: CSSProperties;
  autoComplete?: string;
  readonly?: boolean;
  cols?: number;
  rows?: number;
};
const CustomTextarea: FC<CustomTextareaProps> = ({
  autoComplete,
  autoFocus,
  className,
  defaultValue,
  disabled,
  id,
  name,
  onChange,
  onClick,
  placeholder,
  readOnly,
  required,
  style,
  value,
  cols,
  rows,
}) => {
  return (
    <textarea
      autoComplete={autoComplete}
      id={id}
      placeholder={placeholder}
      className={`text-xs leading-5 border px-[6px] py-1 
                focus:border-[rgba(82,168,236,0.8)] focus:outline-none 
                focus:shadow-[inset_0_1px_1px_rgba(0,0,0,0.075),0_0_8px_rgba(82,168,236,0.6)] 
                ${className}
                `}
      name={name}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      readOnly={readOnly}
      autoFocus={autoFocus}
      onClick={onClick}
      onChange={onChange}
      required={required}
      style={style}
      rows={rows}
      cols={cols}
    ></textarea>
  );
};
export default CustomTextarea;
