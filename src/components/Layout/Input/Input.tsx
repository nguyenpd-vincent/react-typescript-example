import {
  CSSProperties,
  ChangeEvent,
  FC,
  FocusEvent,
  LegacyRef,
  MouseEvent,
} from "react";
type CustomInputProps = {
  type?: InputType;
  name?: string;
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
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
  onfocus?: (event: FocusEvent<HTMLInputElement>) => void;
  readonly?: boolean;
  checked?: boolean;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  ref?: LegacyRef<HTMLInputElement>;
};
const CustomInput: FC<CustomInputProps> = ({
  type = "text",
  autoComplete,
  autoFocus,
  className,
  defaultValue,
  disabled,
  id,
  onfocus,
  name,
  onChange,
  onClick,
  onBlur,
  placeholder,
  readOnly,
  required,
  style,
  value,
  checked,
  ref,
}) => {
  return (
    <input
      ref={ref}
      type={type}
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
      onBlur={onBlur}
      required={required}
      style={style}
      checked={checked}
      onFocus={onfocus}
    />
  );
};
export default CustomInput;
