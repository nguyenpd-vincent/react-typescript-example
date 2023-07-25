import { useLocale } from "@/locales";
import { finAllTrashEvent, restoreEvent } from "@/services/menu";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import ImgClose from "@/assets/images/modal_close.png";

interface Props {
  setMenuStatus: React.Dispatch<React.SetStateAction<number>>;
}

const EventRecycleBin: React.FC<Props> = ({ setMenuStatus }) => {
  const t = useLocale();

  const [dataEvent, setDataEvent] = useState<API.TrashEventStruct[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);

  const [selectedCheckboxes, setSelectedCheckboxes] = useState<number[]>([]);

  const fetchEventData = async () => {
    const res = await finAllTrashEvent(page, 100);
    setDataEvent(res?.data?.data ?? []);
    if (res?.data?.totalData) {
      setTotalPage(Math.ceil(res?.data?.totalData / 100));
    }
  };

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedCheckboxes((prevState) => [...prevState, id]);
    } else {
      setSelectedCheckboxes((prevState) =>
        prevState.filter((checkboxId) => checkboxId !== id)
      );
    }
  };

  const handleSubmit = async () => {
    await restoreEvent(selectedCheckboxes);
    fetchEventData();
  };
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    fetchEventData();
  }, [page]);

  return (
    <div>
      <div className="w-[800px] h-[522px] bg-[#ffffff] z-50 fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-[#000] text-[#fff] px-[15px] py-[9px]">
          <h3 className="text-[18px] leading-[30px] font-timeNewRoman ">
            {t.formatMessage({
              id: "recycleBin.title",
              defaultMessage: "Corbeille",
            })}
            <button
              onClick={() => setMenuStatus(0)}
              className="w-6 h-6 opacity-100 text-[20px] leading-5 mt-[2px] float-right bg-white bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${ImgClose})`,
              }}
            ></button>
          </h3>
        </div>
        <div className="font-global leading-5 text-[#333] p-5 h-[350px]">
          <div className="w-full h-[350px]">
            <table className="table-fixed w-full">
              <thead className="bg-[#eeeeee]">
                <tr className="grid grid-cols-eventTrash ">
                  <td className="py-[10px] font-bold text-center"></td>
                  <td className="py-[10px] pl-[20px] font-bold text-center">
                    Date
                  </td>
                  <td className="py-[10px] pl-[20px] font-bold text-center">
                    Libellé
                  </td>
                  <td className="py-[10px] pl-[20px] font-bold">Patient</td>
                </tr>
              </thead>
              <tbody className="max-h-[300px] overflow-y-auto overflow-x-hidden block">
                {dataEvent.map((item, index) => (
                  <tr
                    className={`grid grid-cols-eventTrash py-[2px] m-[0] hover:bg-[#f6f6f6] ${
                      index % 2 === 0 ? " bg-[#f9f9f9]" : "bg-[#fff]"
                    } `}
                  >
                    <td className="py-[2px] pl-[24px] text-center leading-3 relative">
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        className="absolute top-[6px]"
                        checked={selectedCheckboxes.includes(item?.id ?? 0)}
                        onChange={(e) => handleCheckboxChange(e, item?.id ?? 0)}
                      />
                    </td>
                    <td className="py-[2px] pl-[20px] w-full">
                      {dayjs(item?.date).format("DD-MM-YYYY")}
                    </td>
                    <td className="py-[2px] pl-[20px] w-full">{item?.name}</td>
                    <td className="py-[2px] pl-[20px] w-full ">{`${
                      item?.contactLastname ? item?.contactLastname : ""
                    } ${
                      item?.contactFirstname ? item?.contactFirstname : ""
                    }`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="page mb-[12px] float-right">
            <button
              className="bg-[#eeeeee] text-[#666] py-[6px] px-[12px] mr-[2px]"
              onClick={handlePreviousPage}
            >
              Previous
            </button>
            {totalPage !== 0 &&
              [...Array(totalPage)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setPage(index + 1)}
                  className={`${
                    index + 1 === page
                      ? "bg-[#259AF4] text-[#fff]"
                      : "bg-[#eeeeee] text-[#505050]"
                  } py-[6px] px-[12px] mr-[2px]`}
                >
                  {index + 1}
                </button>
              ))}
            <button
              value=""
              className="bg-[#eeeeee] text-[#505050] py-[6px] px-[12px] mr-[2px]"
              onClick={handleNextPage}
            >
              Next
            </button>
          </div>
        </div>
        <div className="bg-[#000] text-[#fff] mt-[68px] px-[15px] py-[15px] flex justify-end w-full">
          <button
            className="px-[9px] py-[5px] text-[11px] bg-[#fcfcfc] text-[#333333]"
            onClick={() => setMenuStatus(0)}
          >
            {t.formatMessage({
              id: "event.setting-btn1",
              defaultMessage: "Fermer",
            })}
          </button>

          <button
            className="px-[9px] py-[5px] text-[11px] ml-[5px] bg-[#fcfcfc] text-[#333333]"
            onClick={handleSubmit}
          >
            {t.formatMessage({
              id: "event.setting-btn2",
              defaultMessage: "Restaurer",
            })}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventRecycleBin;
