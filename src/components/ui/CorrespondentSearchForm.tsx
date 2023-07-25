import { ChangeEvent, ReactElement, memo, useEffect, useState } from "react";
import CustomInput from "../Layout/Input/Input";
import { findCorrespondents } from "@/services/contact/correspondent";
interface ICorrespondentSearchFormProps {
  placeholder?: string;
  onchange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onClick?: (data: API.Correspondent) => void;
  className?: string;
}
const CorrespondentSearchForm = memo(
  ({
    placeholder,
    onClick,
    className,
    value,
  }: ICorrespondentSearchFormProps): ReactElement => {
    const [correspondents, setCorrespondents] = useState(
      [] as API.Correspondent[]
    );
    const [formValue, setFormValue] = useState(value || "");
    const handleClick = (data: API.Correspondent) => {
      if (onClick) {
        onClick(data);
      }
      setCorrespondents([]);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      findCorrespondents(e.currentTarget.value).then((data) => {
        setCorrespondents(data.data);
      });
      setFormValue(e.currentTarget.value);
    };

    const handleBlur = () => {
      setTimeout(() => {
        setCorrespondents([]);
      }, 300);
    };
    useEffect(() => {
      if (value) setFormValue(value);
    }, [value]);

    return (
      <div className="relative w-full">
        <CustomInput
          className={`w-full px-[14px] rounded-md ${className}`}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={placeholder}
          type="search"
          value={formValue}
        />
        {correspondents.length > 0 && (
          <div className="absolute w-full max-h-[200px] border top-[30px] bg-white overflow-auto">
            {correspondents.map((e, i) => {
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
                      title={`${e?.lastname} ${e?.firstname}`}
                    >
                      {e?.lastname} {e?.firstname}
                    </span>
                  </div>
                  {e?.correspondent_type?.name && (
                    <div className="flex items-center p-1">
                      <span className="px-2 py-1 bg-[#e9ecef] rounded-sm text-[#6E7687]">
                        {e?.correspondent_type?.name}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);
export default CorrespondentSearchForm;
