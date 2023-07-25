import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  title: string;
  isShow: boolean;
}
const Notification = ({ title, isShow }: Props) => {
  return (
    <>
      {isShow && (
        <div className="w-[300px] min-h-[80px] bg-[white] rounded-[5px] border p-[20px] absolute right-[10px] top-[10px] z-[9999] ">
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-[green] text-[30px]"
            />
            <div className="flex-1 text-[14px] ml-[20px]">{title}</div>
          </div>
        </div>
      )}
    </>
  );
};
export default Notification;
