import { useLocale } from "@/locales";
import { useEffect, useRef, useState } from "react";
import ImgClose from "@/assets/images/modal_close.png";
import ClassicButton from "@/components/Layout/Button/ClassicButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import findAllCorrespondent, {
  deleteCorres,
  findOneCorrespondent,
} from "@/services/menu";
import EditingACorrespondent from "./component/modal";

interface Props {
  setMenuStatus: React.Dispatch<React.SetStateAction<number>>;
}

const initCorrespondentData: API.CorrespondentReq = {
  id: 0,
  lastname: "",
  civility: {
    id: 1,
  },
  firstname: "",
  type: {
    id: null,
    name: "",
  },
  email: "",
  description: "",
  address: {
    id: null,
    street: "",
    street_comp: "",
    zip_code: "",
    city: "",
    country: "France",
    country_code: "FR",
  },
  phones: [
    {
      nbr: "",
      type: {
        id: 5,
      },
      phoneTypeId: 5,
    },
  ],
};

const Correspondant: React.FC<Props> = ({ setMenuStatus }) => {
  const t = useLocale();

  const [correspondent, setCorrespondent] = useState(initCorrespondentData);
  const [page, setPage] = useState<number>(1);
  const [listCorrespondent, setlistCorrespondent] = useState<
    API.CorrespondentStruct[]
  >([]);
  const [isRerender, setIsRerender] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [param, setParam] = useState({
    search: "",
    page: 1,
    sort: "ORDER BY CPD.CPD_LASTNAME ASC",
  });
  const searchValueRef = useRef<HTMLInputElement>(null);
  const [updateCorrespondent, setUpdateCoresspondent] =
    useState<boolean>(false);

  const fetchEventData = async () => {
    const res = await findAllCorrespondent(param);
    setlistCorrespondent(res?.data?.data ?? []);
    if (res?.data?.totalData) {
      setTotalPage(Math.ceil(res?.data?.totalData / 100));
    }
  };

  const getType = async (id: number) => {
    const res = await findOneCorrespondent(id);
    setCorrespondent(res?.data);
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const searchValue =
        (searchValueRef.current as HTMLInputElement)?.value?.length > 0
          ? (searchValueRef.current as HTMLInputElement)?.value
          : "";
      setParam({ ...param, search: searchValue });
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure you want to delete")) {
      await deleteCorres(id);
      setIsRerender(!isRerender);
    }
  };

  useEffect(() => {
    fetchEventData();
  }, [isRerender, param]);

  return (
    <div>
      <div className="w-[800px] h-[522px] bg-[#ffffff] z-50 fixed top-[45%] mt-1 left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-[#000] text-[#fff] px-[15px] py-[9px]">
          <h3 className="text-[18px] leading-[30px] font-timeNewRoman ">
            {t.formatMessage({
              id: "menu.titleCorrespondant",
              defaultMessage: "Correspondant",
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
        <div className="font-global leading-5 text-[#333] py-2 h-[350px]">
          <div className="flex justify-between">
            <ClassicButton
              onClick={() => {
                setShowDetail(!showDetail);
                setUpdateCoresspondent(false);
                setCorrespondent(initCorrespondentData);
              }}
              label={t.formatMessage({
                id: "menu.btnCreate",
                defaultMessage: "Nouveau",
              })}
              icon={faPlus}
              className="ml-2"
            />
            <input
              className="box-content mr-2 rounded-[14px] inline-block px-[14px] py-[4px] font-normal w-[206px] bg-white border-solid border-[1px] border-[#cccccc] transition-[border,box-shadow] duration-200 ease-linear text-[#555555] h-[20px] align-middle min-h-[1px]
                focus:border-[rgba(82,168,236,0.8)] focus:outline-none focus:shadow-[inset_0_1px_1px_rgba(0,0,0,0.075),0_0_8px_rgba(82,168,236,0.6)]"
              type="text"
              placeholder={t.formatMessage({
                id: "menu.inputPlacehoder",
                defaultMessage: "Recherche",
              })}
              ref={searchValueRef}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="w-full h-[350px] mt-2">
            <table className="table-fixed w-full">
              <thead className="bg-[#eeeeee]">
                <tr className="grid grid-cols-correspondant">
                  <td className="py-[10px] pl-[20px] font-bold">
                    {t.formatMessage({
                      id: "menu.table-col1",
                      defaultMessage: "",
                    })}
                  </td>
                  <td className="py-[10px] font-bold">
                    {t.formatMessage({
                      id: "menu.table-col2",
                    })}
                  </td>
                  <td className="py-[10px] pl-[20px] font-bold">
                    {t.formatMessage({
                      id: "menu.table-col3",
                    })}
                  </td>
                  <td className="py-[10px] pl-[20px] font-bold"></td>
                </tr>
              </thead>
              <tbody className="max-h-[300px] overflow-y-auto overflow-x-hidden block">
                {listCorrespondent.map((item, index) => (
                  <tr
                    className={`grid grid-cols-correspondant py-[2px] m-[0] hover:bg-[#f6f6f6] ${
                      index % 2 === 0 ? " bg-[#f9f9f9]" : "bg-[#fff]"
                    } `}
                  >
                    <td
                      onClick={() => {
                        getType(item?.id);
                        setShowDetail(!showDetail);
                        setUpdateCoresspondent(true);
                      }}
                      className="py-[2px] pl-2"
                    >
                      {`${item.firstname} ${item.lastname}`}
                    </td>
                    <td
                      onClick={() => {
                        getType(item?.id);
                        setShowDetail(!showDetail);
                        setUpdateCoresspondent(true);
                      }}
                      className="py-[2px] ml-[-8px]"
                    >
                      {item?.correspondent_type?.name}
                    </td>
                    <td
                      onClick={() => {
                        getType(item?.id);
                        setShowDetail(!showDetail);
                        setUpdateCoresspondent(true);
                      }}
                      className="py-[2px] pl-[18px]"
                    >
                      {item?.phones.map((obj) => obj.nbr).join(" • ")}
                    </td>
                    <td className="py-[2px]">
                      <i
                        className="fas fa-trash"
                        onClick={() => handleDelete(item.id)}
                      ></i>
                    </td>
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
        </div>
      </div>
      <div className="relative">
        {showDetail && (
          <EditingACorrespondent
            correspondent={correspondent}
            setCorrespondent={setCorrespondent}
            setMenuStatus={setMenuStatus}
            showDetail={showDetail}
            setShowDetail={setShowDetail}
            isUpdate={updateCorrespondent}
            isRerender={isRerender}
            setIsRerender={setIsRerender}
          />
        )}
      </div>
    </div>
  );
};

export default Correspondant;
