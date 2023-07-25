import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, memo } from "react";

interface EProps {
  sorted: boolean;
  sortFn: () => void;
  textAlign?: "text-center" | "text-left" | "text-right";
  title: string;
}

const HeaderSort = memo(
  ({ sorted, sortFn, title, textAlign }: EProps): ReactElement => {
    return (
      <div
        className=" cursor-pointer flex items-center justify-between"
        onClick={sortFn}
      >
        <p className={`w-full ${textAlign}`}>{title}</p>
        {!sorted && (
          <FontAwesomeIcon
            className="mr-[-12px] float-right text-indigo-500"
            icon={faSortUp}
          />
        )}
        {sorted && (
          <FontAwesomeIcon
            className="mr-[-12px] float-right text-indigo-500"
            icon={faSortDown}
          />
        )}
      </div>
    );
  }
);
export default HeaderSort;
