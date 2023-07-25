import {
  faBalanceScale,
  faBook,
  faCaretDown,
  faCaretRight,
  faHeadset,
  faIdCard,
  faInfo,
  faMoneyCheck,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import HeaderButton from "../../Button/HeaderButton";
import { logout } from "@/stores/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { useLocale } from "@/locales";
import headerTiltes from "@/locales/fr/header.json";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  MenubarLabel,
} from "@/components/ui/menubar";
import { ChangeEvent, Fragment, useState } from "react";
import { RootState } from "@/stores";
import { getDoctorId } from "@/utils/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StickyNote } from "./StickyNote/StickyNote";
import { actionSelectDoctorId } from "@/stores/auth/authSlice";
import EventRecycleBin from "./RecycleBin/EventRecycleBin";
import PatientRecycleBin from "./RecycleBin/PatientRecycleBin";
import GlossaireModal from "@/components/function/GlossaireModal";
import Correspondant from "./Correspondant";
import { Link } from "react-router-dom";
import TeletransmissionModal from "./Teletransmission/TeletransmissionModal";

const listIconComp = [
  faBook,
  faIdCard,
  faBalanceScale,
  faBalanceScale,
  faMoneyCheck,
];

const listMenuLeft = headerTiltes["main-menu"]["list-menu-left"];
const listItemMenu =
  headerTiltes["main-menu"]["list-menu-left"][0]["item-menu-trigger"]?.body;
const subListMenuCorbeille =
  headerTiltes["main-menu"]["list-menu-left"][0]["item-menu-trigger"]?.body[1]
    .body;
const subListMenuImporter =
  headerTiltes["main-menu"]["list-menu-left"][0]["item-menu-trigger"]?.body[8]
    .body;
const subListMenuExporter =
  headerTiltes["main-menu"]["list-menu-left"][0]["item-menu-trigger"]?.body[9]
    .body;
const listItemComptabilite =
  headerTiltes["main-menu"]["list-menu-left"][3]["item-menu-trigger"]?.body;

const listMenuCenter = headerTiltes["main-menu"]["list-menu-center"];
const listMenuRight = headerTiltes["main-menu"]["list-menu-right"];

const MainMenu = () => {
  const session = useAppSelector((state: RootState) => state.auth.session);
  const dispatch = useAppDispatch();
  const t = useLocale();
  const doctorId = getDoctorId();
  const [glossaireModalVisible, setGlossaireModalVisible] = useState(false);
  const [menuStatus, setMenuStatus] = useState<number>(0); //1: PatientTrash, 2: PatientTrash, 3: Correspondents
  const [contactIdStatus, setContactIdStatus] = useState<boolean>(false);
  const [showTeleTransmissionModal, setShowTeleTransmissionModal] =
    useState(false);

  const toggleShowTeleTransmissionModal = (state: boolean) =>
    setShowTeleTransmissionModal(state);
  const handleRecycleModal = () => {
    document.body.classList.toggle("overflow-hideen");
  };

  const handleOnSelectDoctor = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(actionSelectDoctorId(parseInt(e.target.value)));
  };

  return (
    <div className="flex justify-between px-[20px] bg-[#1b1b1b] h-[40px]">
      {/* Left menu */}
      <div className="flex">
        {/* DEN - Select options */}
        <div className="flex items-center h-full">
          <select
            name="practitioner"
            onChange={handleOnSelectDoctor}
            className="border-0 bg-[#007BFF] py-[4px] px-[6px] text-white text-[12px] w-[220px]"
          >
            {session?.resources &&
              session.resources.length > 0 &&
              session.resources.map((r) => (
                <option
                  value={r.doctorId}
                  key={r.id}
                  selected={doctorId === r.doctorId}
                >
                  {r.name}
                </option>
              ))}
          </select>
        </div>

        <div className="border-l-[1px] border-dashed border-[#616161] mx-[8px]"></div>

        {/* Navbar - Dropdown menu */}
        <Menubar className="flex text-[#CECECE] text-[11px]">
          {listMenuLeft.map((_item, index) => (
            <MenubarMenu key={index}>
              {index === 0 && (
                <Fragment key={index}>
                  {/* Menu */}
                  <MenubarTrigger className="flex gap-[5px]">
                    <span>
                      {t.formatMessage({
                        id: `header.main-menu.list-menu-left.${index}.item-menu-trigger.label`,
                      })}
                    </span>
                    <span className="text-[12px]">
                      <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                  </MenubarTrigger>
                  <MenubarContent
                    className={`shadow-xl z-50 flex flex-col min-w-[170px] absolute top-[-5px] left-0 py-[6px] bg-white text-[#333333] border border-[#DADADA]`}
                  >
                    {listItemMenu?.map((_itemMenu, indexItemMenu) => (
                      <>
                        {indexItemMenu !== 1 &&
                          indexItemMenu !== 8 &&
                          indexItemMenu !== 9 && (
                            <MenubarItem
                              onClick={() => {
                                indexItemMenu === 0
                                  ? setMenuStatus(3)
                                  : setMenuStatus(0);
                              }}
                            >
                              <span>
                                {t.formatMessage({
                                  id: `header.main-menu.list-menu-left.${index}.item-menu-trigger.body.${indexItemMenu}.label`,
                                })}
                              </span>
                            </MenubarItem>
                          )}

                        {indexItemMenu === 1 && (
                          <MenubarSub>
                            <MenubarSubTrigger className="flex justify-between">
                              <span>
                                {t.formatMessage({
                                  id: `header.main-menu.list-menu-left.${index}.item-menu-trigger.body.${indexItemMenu}.label`,
                                })}
                              </span>
                              <span>
                                <FontAwesomeIcon icon={faCaretRight} />
                              </span>
                            </MenubarSubTrigger>
                            <MenubarSubContent className="bg-white">
                              {subListMenuCorbeille?.map(
                                (_subItem, indexSubItem) => (
                                  <MenubarItem
                                    onClick={() => {
                                      handleRecycleModal();
                                      indexSubItem === 0
                                        ? setMenuStatus(1)
                                        : setMenuStatus(2);
                                    }}
                                  >
                                    {t.formatMessage({
                                      id: `header.main-menu.list-menu-left.${index}.item-menu-trigger.body.${indexItemMenu}.body.${indexSubItem}.label`,
                                    })}
                                  </MenubarItem>
                                )
                              )}
                            </MenubarSubContent>
                          </MenubarSub>
                        )}
                        {indexItemMenu === 8 && (
                          <>
                            <MenubarSeparator />
                            <MenubarSub>
                              <MenubarSubTrigger className="flex justify-between">
                                <span>
                                  {t.formatMessage({
                                    id: `header.main-menu.list-menu-left.${index}.item-menu-trigger.body.${indexItemMenu}.label`,
                                  })}
                                </span>
                                <span>
                                  <FontAwesomeIcon icon={faCaretRight} />
                                </span>
                              </MenubarSubTrigger>
                              <MenubarSubContent className="bg-white">
                                {subListMenuImporter?.map(
                                  (_subItem, indexSubItem) => (
                                    <MenubarItem>
                                      {t.formatMessage({
                                        id: `header.main-menu.list-menu-left.${index}.item-menu-trigger.body.${indexItemMenu}.body.${indexSubItem}.label`,
                                      })}
                                    </MenubarItem>
                                  )
                                )}
                              </MenubarSubContent>
                            </MenubarSub>
                          </>
                        )}
                        {indexItemMenu === 9 && (
                          <>
                            <MenubarSub>
                              <MenubarSubTrigger className="flex justify-between">
                                <span>
                                  {t.formatMessage({
                                    id: `header.main-menu.list-menu-left.${index}.item-menu-trigger.body.${indexItemMenu}.label`,
                                  })}
                                </span>
                                <span>
                                  <FontAwesomeIcon icon={faCaretRight} />
                                </span>
                              </MenubarSubTrigger>
                              <MenubarSubContent className="bg-white">
                                {subListMenuExporter?.map(
                                  (_subItem, indexSubItem) => (
                                    <>
                                      {indexSubItem !== 2 ? (
                                        <MenubarSub>
                                          <MenubarSubTrigger className="flex justify-between">
                                            <span>
                                              {t.formatMessage({
                                                id: `header.main-menu.list-menu-left.${index}.item-menu-trigger.body.${indexItemMenu}.body.${indexSubItem}.label`,
                                              })}
                                            </span>
                                            <span>
                                              <FontAwesomeIcon
                                                icon={faCaretRight}
                                              />
                                            </span>
                                          </MenubarSubTrigger>
                                          <MenubarSubContent className="shadow-xl flex flex-col min-w-[170px] absolute top-full left-[0px] bg-white text-[#333333] border border-[#DADADA]">
                                            <MenubarItem>
                                              {t.formatMessage({
                                                id: `header.main-menu.list-menu-left.${index}.item-menu-trigger.body.${indexItemMenu}.body.${indexSubItem}.body.0.label`,
                                              })}
                                            </MenubarItem>
                                            <MenubarItem>
                                              {t.formatMessage({
                                                id: `header.main-menu.list-menu-left.${index}.item-menu-trigger.body.${indexItemMenu}.body.${indexSubItem}.body.1.label`,
                                              })}
                                            </MenubarItem>
                                          </MenubarSubContent>
                                        </MenubarSub>
                                      ) : (
                                        <MenubarItem>
                                          {t.formatMessage({
                                            id: `header.main-menu.list-menu-left.${index}.item-menu-trigger.body.${indexItemMenu}.body.${indexSubItem}.label`,
                                          })}
                                        </MenubarItem>
                                      )}
                                    </>
                                  )
                                )}
                              </MenubarSubContent>
                            </MenubarSub>
                            <MenubarSeparator />
                          </>
                        )}
                      </>
                    ))}
                  </MenubarContent>
                </Fragment>
              )}
              {index === 3 && (
                <Fragment key={index}>
                  {/* Comptabilité */}
                  <MenubarTrigger className="flex gap-[5px]">
                    <span>
                      {t.formatMessage({
                        id: `header.main-menu.list-menu-left.${index}.item-menu-trigger.label`,
                      })}
                    </span>
                    <span className="text-[12px]">
                      <FontAwesomeIcon icon={faCaretDown} />
                    </span>
                  </MenubarTrigger>
                  <MenubarContent
                    className={`shadow-xl z-50 flex flex-col min-w-[200px] absolute top-[-5px] left-0 py-[6px] bg-white text-[#333333] border border-[#DADADA]`}
                  >
                    {listItemComptabilite?.map((_itemComp, indexComp) => (
                      <MenubarItem>
                        <FontAwesomeIcon
                          icon={listIconComp[indexComp]}
                          className="mr-[10px]"
                        />
                        <span>
                          {t.formatMessage({
                            id: `header.main-menu.list-menu-left.${index}.item-menu-trigger.body.${indexComp}.label`,
                          })}
                        </span>
                      </MenubarItem>
                    ))}
                  </MenubarContent>
                </Fragment>
              )}
              {index !== 0 && index !== 3 && (
                <Link
                  to={
                    index === 1
                      ? "/agenda"
                      : index === 2
                      ? `/contact/${sessionStorage.getItem("currentPath")}`
                      : "/*"
                  }
                >
                  <MenubarLabel
                    onClick={() => setContactIdStatus(!contactIdStatus)}
                    className="relative px-[15px] py-[10px] leading-5 hover:bg-[#353535] hover:cursor-pointer"
                  >
                    {t.formatMessage({
                      id: `header.main-menu.list-menu-left.${index}.item-menu`,
                    })}
                  </MenubarLabel>
                </Link>
              )}
            </MenubarMenu>
          ))}
        </Menubar>
        <div className="border-l-[1px] border-dashed border-[#616161] mx-[8px]"></div>

        {/* Post-it */}
        <StickyNote />
        <div className="border-l-[1px] border-dashed border-[#616161] mx-[8px]"></div>

        {/* VITALE */}
        <div className="flex gap-[5px] items-center">
          <HeaderButton
            label={listMenuCenter[0]["item-menu"]}
            isBackground={true}
          />
          <div className=" flex gap-[1px]">
            <HeaderButton
              label={listMenuCenter[1]["item-menu"]}
              isBackground={true}
            />
            <HeaderButton
              label={listMenuCenter[2]["item-menu"]}
              isBackground={true}
              onClick={() => toggleShowTeleTransmissionModal(true)}
            />
            <TeletransmissionModal
              show={showTeleTransmissionModal}
              toggleModal={toggleShowTeleTransmissionModal}
            />
          </div>
        </div>
      </div>

      {/* Right menu */}
      <div className="flex gap-[1px] items-center">
        <HeaderButton icon={faSpinner} />
        <HeaderButton
          icon={faBook}
          onClick={() => setGlossaireModalVisible(true)}
        />
        <HeaderButton icon={faInfo} />
        <HeaderButton icon={faHeadset} />
        <HeaderButton
          label={listMenuRight[0]["item-menu"]}
          onClick={() => dispatch(logout())}
        />
      </div>
      <div>
        <div className="relative">
          {menuStatus === 1 ? (
            <div>
              <EventRecycleBin setMenuStatus={setMenuStatus} />
              <div className="fixed top-0 left-0 w-full h-full bg-gray-500 opacity-50 z-40"></div>
            </div>
          ) : menuStatus === 2 ? (
            <div>
              <PatientRecycleBin setMenuStatus={setMenuStatus} />
              <div className="fixed top-0 left-0 w-full h-full bg-gray-500 opacity-50 z-40"></div>
            </div>
          ) : menuStatus === 3 ? (
            <div>
              <Correspondant setMenuStatus={setMenuStatus} />
              <div className="fixed top-0 left-0 w-full h-full bg-gray-500 opacity-50 z-40"></div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <GlossaireModal
        visible={glossaireModalVisible}
        setVisible={setGlossaireModalVisible}
      />
    </div>
  );
};

export default MainMenu;
