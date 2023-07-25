import { getListPatient } from "@/services/contact";
import dayjs from "dayjs";
import { ChangeEvent, ReactElement, memo, useState } from "react";
import CustomInput from "../Layout/Input/Input";
interface IPatientSearchFormProps {
  placeholder?: string;
  isRounded?: boolean;
  onClick?: (data: API.ListContactItem) => void;
  className?: string;
}
const PatientSearchForm = memo(
  ({
    placeholder,
    isRounded,
    onClick,
    className,
  }: IPatientSearchFormProps): ReactElement => {
    const [patients, setPatients] = useState([] as API.ListContactItem[]);
    const handleClick = (data: API.ListContactItem) => {
      if (onClick) {
        onClick(data);
      }
      setPatients([]);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      getListPatient({
        conditions: [
          {
            field: "lastname",
            value: e.target.value,
            op: "like",
          },
        ],
      }).then((data) => {
        setPatients(data.data);
      });
    };

    const handleBlur = () => {
      setTimeout(() => {
        setPatients([]);
      }, 300);
    };

    return (
      <div className="relative w-full min-w-[360px]">
        <CustomInput
          type="search"
          className={`w-full px-[14px] ${
            isRounded ? "rounded-full" : ""
          } ${className}`}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {patients.length > 0 && (
          <div className="absolute w-full max-h-[200px] border top-[30px] p-1 bg-white overflow-auto">
            {patients.map((e, i) => {
              const leftText = e.birthday
                ? `${dayjs(e.birthday).format("DD/MM/YYYY")} - ${e.id}`
                : e.id;
              const fullname = `${e.firstname} ${e.lastname}`;
              return (
                <div
                  key={i}
                  className="flex justify-between hover:cursor-pointer hover:bg-slate-200"
                  onClick={() => {
                    handleClick(e);
                  }}
                >
                  <div className="p-2 flex items-center">
                    <span className="bg-black py-1 px-2 rounded-sm text-white mr-2">
                      {e.practitionerFirstname}
                    </span>
                    <span className="py-1 px-2 rounded-full text-white w-4 h-4 mr-2"></span>
                    <span className="truncate max-w-[100px]" title={fullname}>
                      {fullname}
                    </span>
                  </div>
                  <div className="flex items-center p-1">
                    <span>{leftText}</span>
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
export default PatientSearchForm;
