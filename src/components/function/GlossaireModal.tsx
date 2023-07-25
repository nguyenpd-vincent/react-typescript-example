import OutlineButton from "@/components/Layout/Button/OutlineButton";
import PrimaryButton from "@/components/Layout/Button/PrimaryButton";
import Modal from "@/components/Layout/Modal";
import { useLocale } from "@/locales";
import {
  addGlossaire,
  createEntriesOfGlossaire,
  deleteEntriesOfGlossaire,
  getEntriesOfGlossaire,
  getListGlossaire,
} from "@/services/glossaries";
import { faCheck, faPaste, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import Input from "../../pages/arrangement/body/component/formControl/component/Input";
import Notification from "@/components/ui/Notification";
import { COLOR_PRIMARY_BUTTON } from "@/constant/button";
interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const GlossaireModal = ({ visible, setVisible }: Props) => {
  const t = useLocale();
  const [glossaireEntries, setGlossaireEntries] = useState<
    API.GlossariesEntries[]
  >([]);
  const [glossaires, setGlossaires] = useState<API.Glossaries[]>([]);
  const [selectedGlossaireId, setSelectedGlossaireId] = useState<number>(0);
  const [createContent, setCreateContent] = useState("");
  const [createGlossairesName, setCreateGlossairesName] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("");
  const [modalAddGlossairesVisible, setModalAddGlossairesVisible] =
    useState(false);

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  useEffect(() => {
    getListGlossaire().then((res) => {
      setGlossaires(res.data);
      if (res?.data?.length) {
        setSelectedGlossaireId(res?.data?.[0]?.id ?? 0);
      }
    });
  }, []);

  useEffect(() => {
    getEntriesOfGlossaire(selectedGlossaireId)?.then((res) => {
      setGlossaireEntries(res?.data);
    });
  }, [selectedGlossaireId]);

  const handleAddGlossariesEntries = (content: string) => {
    createEntriesOfGlossaire({ content, glossary: selectedGlossaireId }).then(
      (res) => {
        setGlossaireEntries((pre) => [...pre, res.data]);
        setCreateContent("");
      }
    );
  };

  const handleDeleteGlossariesEntries = (id: number) => {
    deleteEntriesOfGlossaire(id).then(() => {
      setGlossaireEntries((pre) =>
        pre?.filter((entries) => entries?.id !== id)
      );
    });
  };

  const handleAddGlossariesEntriesFromClipBroad = () => {
    navigator.clipboard.readText().then((data) => {
      handleAddGlossariesEntries(data);
      setToastTitle(
        t.formatMessage({
          id: "arrangementPage.header.glossaire.modal.toast.add",
          defaultMessage: "Ajout du contenu depuis le presse papier effectué",
        })
      );
      handleShowToast();
    });
  };

  const handleAddGlossaries = () => {
    addGlossaire(createGlossairesName).then((res) => {
      setModalAddGlossairesVisible(false);
      setCreateGlossairesName("");
      setGlossaires((pre) => [...pre, res.data]);
    });
  };
  return (
    <div className="absolute right-0">
      <Modal
        hideHeader
        show={visible}
        width="sm"
        hideOkButton
        hideFooter
        rounded
        onCancel={() => setVisible(false)}
      >
        <div>
          <h2 className="text-center text-[18px]">
            {t.formatMessage({
              id: "arrangementPage.header.glossaire.modal.title",
              defaultMessage: "Glossaire",
            })}
          </h2>

          <div className="my-[40px]">
            <div className="flex justify-between">
              <select
                className="flex-1 border h-[40px] py-[4px] px-[8px]"
                defaultValue={selectedGlossaireId}
                onChange={(e) =>
                  setSelectedGlossaireId(Number(e?.target?.value ?? 0))
                }
              >
                {glossaires?.map((glossaire) => (
                  <option key={glossaire?.id} value={glossaire?.id}>
                    {glossaire?.name}
                  </option>
                ))}
              </select>
              <div className="border-r mx-[16px]"></div>
              <OutlineButton
                label={t.formatMessage({
                  id: "arrangementPage.header.glossaire.modal.buttonAdd",
                  defaultMessage: "Ajouter un glossaire",
                })}
                color="#007BFF"
                onClick={() => {
                  setModalAddGlossairesVisible(true);
                  return {};
                }}
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex-1 flex bg-[#edf2f7] rounded-[5px]">
              <Input
                inputClassname="h-[40px] bg-[#edf2f7] border-none"
                classname="flex-1"
                value={createContent}
                onChange={(value) => setCreateContent(value)}
              />
              <button
                className="w-[40px] h-[40px]"
                onClick={() => {
                  handleAddGlossariesEntries(createContent);
                }}
              >
                <FontAwesomeIcon icon={faCheck} />
              </button>
            </div>
            <div className="border-r mx-[16px]"></div>
            <button
              className="w-[40px] h-[40px] bg-[#edf2f7] rounded-[5px]"
              onClick={() => handleAddGlossariesEntriesFromClipBroad()}
            >
              <FontAwesomeIcon icon={faPaste} />
            </button>
          </div>
          <div className="min-h-[200px]">
            {!glossaireEntries.length && (
              <div className="h-[200px] flex justify-center items-center flex-1">
                <i className="fas fa-books fa-5x text-gray-200"></i>
              </div>
            )}
            {!!glossaireEntries.length && (
              <div className="h-[200px] overflow-auto mt-[20px]">
                <p className="mb-[20px]">
                  {t.formatMessage({
                    id: "arrangementPage.header.glossaire.modal.helper",
                    defaultMessage:
                      "Double cliquez sur une entrée pour ajouter son contenu au champ ciblé.",
                  })}
                </p>
                {glossaireEntries.map((entries, index) => {
                  return (
                    <div
                      key={entries?.id}
                      className={`flex cursor-pointer items-center p-[5px] justify-between ${
                        index % 2 == 0 ? "bg-[#F9F9F9]" : ""
                      }`}
                    >
                      <h3>{entries?.content}</h3>
                      <div>
                        <button
                          className="p-[5px] h-[32px] w-[32px]"
                          onClick={() => {
                            setToastTitle(
                              t.formatMessage({
                                id: "arrangementPage.header.glossaire.modal.toast.coppy",
                                defaultMessage:
                                  "Copie du contenu dans le presse papier effectuée",
                              })
                            );
                            navigator.clipboard.writeText(
                              entries?.content ?? ""
                            );
                            handleShowToast();
                          }}
                        >
                          <FontAwesomeIcon icon={faPaste} />
                        </button>
                        <button
                          className="p-[5px] h-[32px] w-[32px]"
                          onClick={() =>
                            handleDeleteGlossariesEntries(entries?.id ?? 0)
                          }
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="text-right mt-[20px]">
            <PrimaryButton
              label={t.formatMessage({
                id: "arrangementPage.body.controlForm.BCB.advanced.modal.cancelText",
                defaultMessage: "Fermer",
              })}
              onClick={() => {
                setVisible(false);
                return {};
              }}
            />
          </div>
          <Modal
            hideHeader
            show={modalAddGlossairesVisible}
            width="sm"
            hideOkButton
            hideFooter
            rounded
            onCancel={() => setModalAddGlossairesVisible(false)}
          >
            <div>
              <h2 className="text-center text-[18px]">
                {t.formatMessage({
                  id: "arrangementPage.header.glossaire.modal.addGlossaire.title",
                  defaultMessage: "Glossaire",
                })}
              </h2>
              <div className="mt-[30px]">
                <label>
                  {t.formatMessage({
                    id: "arrangementPage.header.glossaire.modal.addGlossaire.label",
                    defaultMessage: "Libellé",
                  })}
                </label>
                <Input
                  inputClassname="h-[40px]"
                  placeholder="..."
                  value={createGlossairesName}
                  onChange={(value) => setCreateGlossairesName(value)}
                />
              </div>
              <div className="text-right mt-[20px]">
                <PrimaryButton
                  label={t.formatMessage({
                    id: "arrangementPage.body.controlForm.BCB.advanced.modal.cancelText",
                    defaultMessage: "Ajouter",
                  })}
                  onClick={() => {
                    setModalAddGlossairesVisible(false);
                    return {};
                  }}
                />
                <span className="mx-1"></span>
                <PrimaryButton
                  label={t.formatMessage({
                    id: "arrangementPage.body.controlForm.BCB.advanced.modal.okText",
                    defaultMessage: "Fermer",
                  })}
                  onClick={() => {
                    handleAddGlossaries();
                    return {};
                  }}
                  color={COLOR_PRIMARY_BUTTON.BTN_PRIMARY_INFO}
                />
              </div>
            </div>
          </Modal>
        </div>
      </Modal>

      <Notification isShow={showToast} title={toastTitle} />
    </div>
  );
};

export default GlossaireModal;
