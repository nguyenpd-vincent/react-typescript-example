import Modal from "@/components/Layout/Modal";
import { getTeletranmisstionUrl } from "@/services/teletransmisstion";
import { RootState } from "@/stores";
import { useAppSelector } from "@/stores/hooks";
import { getDoctorId } from "@/utils/auth";
import useMessage from "@rottitime/react-hook-message-event";
import { FC } from "react";
type TeletransmissionModalProps = {
  show: boolean;
  toggleModal: (state: boolean) => void;
};
const TeletransmissionModal: FC<TeletransmissionModalProps> = ({
  show,
  toggleModal,
}: TeletransmissionModalProps) => {
  const practitioners = useAppSelector(
    (state: RootState) => state.auth?.session?.practitioners
  );
  const doctorId = getDoctorId();

  const practitioner = practitioners?.find((p) => p.id === doctorId);

  const url = getTeletranmisstionUrl({
    national_identifier_number:
      practitioner?.medical_national_identifier_number,
    finess: practitioner?.medical_finess_number,
  });

  useMessage("sesam-vitale", (_, payload) => {
    console.log("I just received : ", payload);
    toggleModal(false);
  });

  const handleOk = () => {
    toggleModal(true);
  };

  return (
    <Modal
      show={show}
      onCancel={() => toggleModal(false)}
      onOk={() => handleOk()}
      hideFooter
      hideHeader
      width="lg"
      className="!p-0 h-[700px]"
    >
      <iframe className="flex-fill overflow-scroll h-full w-full" src={url} />
    </Modal>
  );
};
export default TeletransmissionModal;
