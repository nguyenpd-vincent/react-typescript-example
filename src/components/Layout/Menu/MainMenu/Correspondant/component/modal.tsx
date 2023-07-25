import { useLocale } from "@/locales";
import { faPhoneAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useEffect, useState } from "react";
import CustomInput from "./input";
import CorrespondentTypeSearchForm from "./correspondentTypeSearchForm";
import ImgClose from "@/assets/images/modal_close.png";
import { exportCorrespondent, saveCorrespondent } from "@/services/menu";

const typeGender = [
  {
    id: 1,
    value: "M",
  },
  {
    id: 2,
    value: "Mme",
  },
  {
    id: 4,
    value: "Mlle",
  },
  {
    id: 5,
    value: "M & Mme",
  },
  {
    id: 6,
    value: "Dr",
  },
  {
    id: 7,
    value: "Pr",
  },
  {
    id: 8,
    value: "Me",
  },
];

const typeTele = [
  {
    id: 1,
    value: "home",
  },
  {
    id: 2,
    value: "mobile",
  },
  {
    id: 3,
    value: "office",
  },
  {
    id: 4,
    value: "fax",
  },
  {
    id: 5,
    value: "sms",
  },
];

type country = {
  name: {
    common: string;
  };
  cca2: string;
};

type EditingACorrespondentProps = {
  correspondent: API.CorrespondentReq;
  setCorrespondent: (e: API.CorrespondentReq) => void;
  setMenuStatus: React.Dispatch<React.SetStateAction<number>>;
  showDetail: boolean;
  setShowDetail: React.Dispatch<React.SetStateAction<boolean>>;
  isUpdate: boolean;
  isRerender: boolean;
  setIsRerender: React.Dispatch<React.SetStateAction<boolean>>;
};

const initPhone: API.CorrespondentPhone = {
  nbr: "",
  type: {
    id: 5,
  },
  phoneTypeId: 5,
};

const EditingACorrespondent = ({
  correspondent,
  setCorrespondent,
  setMenuStatus,
  showDetail,
  setShowDetail,
  isUpdate,
  isRerender,
  setIsRerender,
}: EditingACorrespondentProps) => {
  const t = useLocale();
  const [countries, setCountries] = useState([] as country[]);

  const handleAddTele = () => {
    const newTele = [...(correspondent?.phones || [])];
    newTele.push(initPhone);
    setCorrespondent({ ...correspondent, phones: newTele || [] });
  };

  const handleRemovedTele = (id: number) => {
    const phones = correspondent.phones.filter((_e, i) => i !== id);
    setCorrespondent({ ...correspondent, phones: phones || [] });
  };

  const handleChangePhone = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const phones = [...(correspondent?.phones || [])];
    phones[id].nbr = e.target.value;
    setCorrespondent({ ...correspondent, phones: phones || [] });
  };

  const handleChangePhoneType = (
    e: ChangeEvent<HTMLSelectElement>,
    id: number
  ) => {
    const phones: API.CorrespondentPhone[] = [...(correspondent?.phones || [])];
    phones[id].phoneTypeId = +e.target.value;
    phones[id].type.id = +e.target.value;
    setCorrespondent({ ...correspondent, phones });
  };

  const handleChangeGender = (e: ChangeEvent<HTMLSelectElement>) => {
    setCorrespondent({ ...correspondent, civility: { id: +e.target.value } });
  };

  const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setCorrespondent({ ...correspondent, lastname: e.target.value });
  };
  const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setCorrespondent({ ...correspondent, firstname: e.target.value });
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setCorrespondent({ ...correspondent, email: e.target.value });
  };

  const handleChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setCorrespondent({
      ...correspondent,
      address: { ...correspondent.address, street: e.target.value },
    });
  };

  const handleChangeAddressComp = (e: ChangeEvent<HTMLInputElement>) => {
    setCorrespondent({
      ...correspondent,
      address: {
        ...correspondent.address,
        street_comp: e.target.value,
      },
    });
  };

  const handleChangeAddressPostal = (e: ChangeEvent<HTMLInputElement>) => {
    setCorrespondent({
      ...correspondent,
      address: {
        ...correspondent.address,
        zip_code: e.target.value,
      },
    });
  };

  const handleChangeAddressCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCorrespondent({
      ...correspondent,
      address: {
        ...correspondent.address,
        city: e.target.value,
      },
    });
  };

  const handleChangeCountry = (e: ChangeEvent<HTMLSelectElement>) => {
    setCorrespondent({
      ...correspondent,
      address: {
        ...correspondent.address,
        country_code: e.target.value,
        country: e.target.selectedOptions[0].innerHTML,
      },
    });
  };

  const handleAddType = (e: API.CorrespondentType) => {
    setCorrespondent({ ...correspondent, type: e });
  };

  const handleAddCorrespondent = async () => {
    if (correspondent.firstname !== "" && correspondent.lastname !== "") {
      const correspondentTemp: API.CorrespondentReq = { ...correspondent };
      correspondentTemp.id = isUpdate ? correspondent.id : null;
      await saveCorrespondent(correspondentTemp);
      setShowDetail(!showDetail);
      setIsRerender(!isRerender);
    }
  };

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch("https://restcountries.com/v3.1/all")
      ).json();
      setCountries(data as country[]);
    };
    dataFetch();
  }, []);

  const handleExport = async (id: number) => {
    exportCorrespondent(id)
      .then((response) => {
        const filename = `${correspondent.lastname} ${correspondent.firstname}.csv`;
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(
          new Blob([response.data], { type: "text/csv" })
        );
        link.download = filename;
        link.click();
      })
      .catch();
  };

  return (
    <div className="w-[800px] h-[585.4px] bg-[#ffffff] z-[100] fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
      <div className="bg-[#000] text-[#fff] px-[15px] py-[9px]">
        <h3 className="text-[18px] leading-[30px] font-timeNewRoman ">
          {t.formatMessage({
            id: "menu.titleModalCorrespondant",
            defaultMessage: "Edition d'un correspondant",
          })}
          <button
            onClick={() => {
              setMenuStatus(3);
              setShowDetail(!showDetail);
            }}
            className="w-6 h-6 opacity-100 text-[20px] leading-5 mt-[2px] float-right bg-white bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${ImgClose})`,
            }}
          ></button>
        </h3>
      </div>
      <div className="w-full h-[441px] overflow-y-auto px-[20px] my-[20px] ">
        {isUpdate && (
          <button
            className=" bg-[#343a40] text-[#fff] p-3 mb-4 rounded"
            onClick={() => handleExport(correspondent?.id ?? 0)}
          >
            <i className="fas fa-download"></i>
            <span className="pl-1 font-global">
              {t.formatMessage({
                id: "menu.btnExport",
                defaultMessage: "Exporter les patients",
              })}
            </span>
          </button>
        )}
        <div className="flex mb-[5px]">
          <p className="w-[160px] pt-[5px] text-[12px] leading-5 text-[#333333] float-left font-global">
            {t.formatMessage({
              id: "createPatient.etatCivilTitle.civilite",
            })}
          </p>
          <select
            name="genderId"
            id="inputGender"
            value={correspondent?.civility?.id || 1}
            className="w-[126px] bg-white p-2 border border-solid text-[#666] border-[#DADAE4] text-[12px] font-global mr-[4px]"
            onChange={handleChangeGender}
          >
            {typeGender.map((item, index) => (
              <option key={item.id} value={item.id}>
                {t.formatMessage({
                  id: `createPatient.etatCivilTitle.optionCivilite.${index}.name`,
                })}
              </option>
            ))}
          </select>
        </div>
        <div className="flex mb-[5px]">
          <p className="w-[160px] pt-[5px] text-[12px] leading-5 text-[#333333] float-left font-global">
            {t.formatMessage({
              id: "createPatient.etatCivilTitle.nom",
            })}
          </p>
          <CustomInput
            type="text"
            name="lastname"
            id="inputLastname"
            value={correspondent.lastname}
            placeholder="Nom"
            className="w-[580px] py-2"
            onChange={handleChangeLastName}
          />
        </div>
        <div className="flex mb-[5px]">
          <p className="w-[160px] pt-[5px] text-[12px] leading-5 text-[#333333] float-left font-global">
            {t.formatMessage({
              id: "createPatient.etatCivilTitle.prenom",
            })}
          </p>
          <CustomInput
            name="firstname"
            id="inputFirstname"
            placeholder="Prenom"
            className=" w-[580px] py-2"
            value={correspondent.firstname}
            onChange={handleChangeFirstName}
          />
        </div>
        <div className="flex mb-[5px]">
          <p className="w-[160px] pt-[5px] text-[12px] leading-5 text-[#333333] float-left font-global">
            {t.formatMessage({
              id: "createPatient.etatCivilTitle.type",
            })}
          </p>
          <div className="w-[1/2]">
            <CorrespondentTypeSearchForm
              placeholder="Fournisseurs, confrères, prothèsistes, etc..."
              value={correspondent.type.name}
              onClick={handleAddType}
            />
          </div>
        </div>
        <div className="flex mb-[5px]">
          <p className="w-[160px] pt-[5px] text-[12px] leading-5 text-[#333333] float-left font-global">
            {t.formatMessage({
              id: "createPatient.etatCivilTitle.email",
            })}
          </p>
          <CustomInput
            name="email"
            id="inputEmail"
            placeholder="Email"
            className="border py-2"
            value={correspondent.email}
            onChange={handleChangeEmail}
          />
        </div>
        <div className="mb-[5px]">
          <p className="w-[160px] pt-[5px] text-[12px] leading-5 text-[#333333] float-left font-global">
            {t.formatMessage({
              id: "createPatient.complete.adresePostale",
            })}
          </p>
          <div className="flex flex-col gap-[5px]">
            <CustomInput
              type="text"
              id="inputAddressStreet"
              name="addressStreet"
              placeholder="Rue  "
              className="w-[580px] py-2"
              value={correspondent.address.street}
              onChange={handleChangeAddress}
            />
            <CustomInput
              type="text"
              name="addressStreetComp"
              placeholder="Complément"
              className="w-[580px] py-2"
              value={correspondent.address.street_comp}
              onChange={handleChangeAddressComp}
            />
            <div>
              <CustomInput
                type="text"
                name="addressZipCode"
                placeholder="Code postal"
                className="w-[126px] py-2"
                value={correspondent.address.zip_code}
                onChange={handleChangeAddressPostal}
              />
              <CustomInput
                type="text"
                name="addressCity"
                placeholder="Ville"
                className="w-[286px] py-2"
                value={correspondent.address.city}
                onChange={handleChangeAddressCity}
              />
            </div>
            <select
              name="addressCountryAbbr"
              value={correspondent?.address?.country_code}
              className="w-[126px] h-[36px] p-2 bg-white border border-solid text-[#666] border-[#DADAE4] text-[12px] font-global"
              onChange={handleChangeCountry}
            >
              {countries.map((country) => {
                return (
                  <option key={country.cca2} value={country.cca2}>
                    {country.name.common}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="">
          <p className="w-[160px] pt-[5px] text-[12px] leading-5 text-[#333333] float-left font-global">
            {t.formatMessage({
              id: "createPatient.etatCivilTitle.telephones",
            })}
          </p>
          <div className="flex flex-col gap-[5px]">
            {correspondent?.phones?.map((item, i) => (
              <div key={i} className="flex gap-[5px]">
                <div className="flex gap-[5px]">
                  <CustomInput
                    type="text"
                    placeholder="Numéro"
                    className="rounded w-[206px]"
                    value={item.nbr}
                    onChange={(e) => {
                      handleChangePhone(e, i);
                    }}
                  />
                  <select
                    name="phoneType"
                    className="w-[96px] h-[40px] p-2 rounded border border-solid text-[#666] border-[#DADAE4] text-[12px] bg-white font-global"
                    onChange={(e) => {
                      handleChangePhoneType(e, i);
                    }}
                    value={item.phoneTypeId}
                  >
                    {typeTele.map((item, index) => (
                      <option key={index} value={item.id}>
                        {t.formatMessage({
                          id: `createPatient.etatCivilTitle.optionTele.${index}.name`,
                        })}
                      </option>
                    ))}
                  </select>
                  <button
                    className="w-[40px] h-[40px]"
                    onClick={() => handleRemovedTele(i)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            ))}

            <div>
              <button
                className="w-[96px] h-[40px] p-2 border border-solid text-[#333] rounded border-[#DADAE4] text-[12px] font-global mr-[4px]"
                onClick={handleAddTele}
              >
                <FontAwesomeIcon icon={faPhoneAlt} />
                <span className="ml-[8px]">
                  {t.formatMessage({
                    id: "createPatient.etatCivilTitle.button",
                  })}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#000] text-[#fff] mt-[10px] px-[15px] py-[15px] flex justify-end w-full">
        <button
          className="px-[9px] py-[5px] text-[11px] bg-[#fcfcfc] text-[#333333]"
          onClick={() => {
            setShowDetail(!showDetail);
            setIsRerender(!isRerender);
          }}
        >
          {t.formatMessage({
            id: "event.setting-btn1",
            defaultMessage: "Fermer",
          })}
        </button>

        <button
          className="px-[9px] py-[5px] text-[11px] ml-[5px] bg-[#3B94E5] text-[#fff]"
          onClick={() => {
            handleAddCorrespondent();
          }}
        >
          {t.formatMessage({
            id: "event.setting-btn2",
            defaultMessage: "Restaurer",
          })}
        </button>
      </div>
    </div>
  );
};

export default EditingACorrespondent;
