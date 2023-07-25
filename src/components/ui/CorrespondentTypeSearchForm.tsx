import {
  ChangeEvent,
  FocusEvent,
  memo,
  ReactElement,
  useEffect,
  useState,
} from "react";
import CustomInput from "../Layout/Input/Input";
import { getCorrespondentType } from "@/services/contact/correspondent";
interface ICorrespondentTypeSearchFormProps {
  className?: string;
  onchange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (data: API.CorrespondentType) => void;
  placeholder?: string;
  value?: string;
}

const CorrespondentTypeSearchForm = memo(
  ({
    className,
    onClick,
    placeholder,
    value,
  }: ICorrespondentTypeSearchFormProps): ReactElement => {
    const [correspondentTypes, setCorrespondentTypes] = useState(
      [] as API.CorrespondentType[]
    );
    const [formValue, setFormValue] = useState(value || "");
    const handleClick = (data: API.CorrespondentType) => {
      if (onClick) {
        onClick(data);
      }
      setCorrespondentTypes([]);
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
      getCorrespondentType(e.currentTarget.value).then((data) => {
        setCorrespondentTypes(data.data);
      });
    };
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      getCorrespondentType(e.currentTarget.value).then((data) => {
        setCorrespondentTypes(data.data);
      });
      setFormValue(e.currentTarget.value);
    };

    const handleBlur = () => {
      setTimeout(() => {
        setCorrespondentTypes([]);
      }, 300);
    };
    useEffect(() => {
      if (value) setFormValue(value);
    }, [value]);

    return (
      <div className="relative w-full">
        <CustomInput
          className={`w-full px-[14px] py-2 ${className}`}
          onBlur={handleBlur}
          onChange={handleChange}
          onfocus={handleFocus}
          placeholder={placeholder}
          type="search"
          value={formValue}
        />
        {correspondentTypes.length > 0 && (
          <div className="absolute w-full max-h-[200px] border top-[30px] bg-white overflow-auto">
            {correspondentTypes.map((e, i) => {
              return (
                <div
                  key={i}
                  className="flex justify-between hover:cursor-pointer hover:bg-[#eeeeee] border border-transparent hover:border-[#cccccc]"
                  onClick={() => {
                    handleClick(e);
                  }}
                >
                  <div className="p-2 flex items-center">
                    <span
                      className="truncate max-w-[100px]"
                      title={`${e.name}`}
                    >
                      {e.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);
export default CorrespondentTypeSearchForm;
