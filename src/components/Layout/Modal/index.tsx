import { Fragment, ReactElement, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import ClassicButton from "../Button/ClassicButton";
import { COLOR_CLASSIC_BUTTON, COLOR_PRIMARY_BUTTON } from "@/constant/button";
import { useLocale } from "@/locales";
import PrimaryButton from "../Button/PrimaryButton";

export interface ModalProps {
  show?: boolean;
  title?: string;
  okText?: string;
  cancelText?: string;
  onCancel?: () => void;
  onOk?: () => void;
  children: JSX.Element | string | number;
  width?: "sm" | "md" | "lg" | string;
  hideHeader?: boolean;
  hideOkButton?: boolean;
  hideFooter?: boolean;
  contentClassName?: string;
  rounded?: boolean;
  hideOkBtn?: boolean;
  hideCancelBtn?: boolean;
  showDeleteBtn?: boolean;
  className?: string;
  onDelete?: () => void;
}

const Modal = ({
  show,
  title,
  cancelText,
  okText,
  onCancel,
  onOk,
  children,
  width,
  hideHeader,
  hideFooter,
  rounded,
  hideOkBtn,
  hideCancelBtn,
  showDeleteBtn,
  onDelete,
  className,
}: ModalProps): ReactElement => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const toggleOpen = () => setOpen(!open);
  const t = useLocale();
  const widthClass =
    width === "lg"
      ? `lg:w-[1140px]`
      : width === "sm"
      ? `lg:w-[560px]`
      : "lg:w-[800px]";
  const handleCancel = () => {
    if (onCancel) onCancel();
    toggleOpen();
  };

  const handleOk = () => {
    if (onOk) onOk();
  };

  const handleDelete = () => {
    if (onDelete) onDelete();
  };

  useEffect(() => {
    setOpen(show || false);
  }, [show]);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={handleCancel}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`relative transform  bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full ${
                  rounded ? "rounded-md" : ""
                } ${widthClass}`}
              >
                {!hideHeader && (
                  <div className="flex justify-between leading-[30px] px-[15px] py-[10px] bg-[#1B1B1B] text-white items-center">
                    <Dialog.Title as="h3" className="text-[18px]">
                      {title}
                    </Dialog.Title>
                    <div className="leading-[24px] w-[24px] h-[24px] font-[900] border-1 border border-white bg-red-600 text-center hover: cursor-pointer">
                      <FontAwesomeIcon icon={faClose} onClick={handleCancel} />
                    </div>
                  </div>
                )}

                <div
                  className={` bg-white p-[20px] ${
                    hideHeader ? "rounded-lg p-[30px]" : ""
                  } ${className}`}
                >
                  {children}
                  {hideHeader && !hideFooter && (
                    <div className="flex justify-end gap-[12px] leading-[30px] px-[15px] py-[10px]  text-white items-center">
                      {!hideCancelBtn && (
                        <ClassicButton
                          label={
                            cancelText ||
                            t.formatMessage({
                              id: "common.modal.btn.cancel",
                              defaultMessage: "Fermer",
                            })
                          }
                          className="rounded px-[16px] py-[13px] text-center"
                          onClick={handleCancel}
                          background={COLOR_CLASSIC_BUTTON.DARK}
                        />
                      )}
                      {!hideOkBtn && (
                        <PrimaryButton
                          label={
                            okText ||
                            t.formatMessage({
                              id: "common.modal.btn.ok",
                              defaultMessage: "Enregistrer",
                            })
                          }
                          className=""
                          color={COLOR_PRIMARY_BUTTON.BTN_PRIMARY_INFO}
                          onClick={handleOk}
                        />
                      )}
                    </div>
                  )}
                </div>
                {!hideHeader && !hideFooter && (
                  <div className="flex justify-end gap-[12px] leading-[30px] px-[15px] py-[10px] bg-[#1B1B1B] text-white items-center relative">
                    {showDeleteBtn && (
                      <div className=" absolute float-left top-[10px] left-[15px]">
                        <ClassicButton
                          label={"Supprimer"}
                          onClick={handleDelete}
                          icon={faTrash}
                        />
                      </div>
                    )}
                    {!hideCancelBtn && (
                      <ClassicButton
                        label={cancelText || "Cancel"}
                        onClick={handleCancel}
                      />
                    )}
                    {!hideOkBtn && (
                      <ClassicButton
                        label={okText || "Confirm"}
                        background={COLOR_CLASSIC_BUTTON.BLUE}
                        onClick={handleOk}
                      />
                    )}
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
