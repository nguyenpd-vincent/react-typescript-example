import React, { useEffect, useRef, useState } from "react";

interface MenuItem {
  label?: string;
  onClick?: () => void;
  border?: boolean;
  isHidden?: boolean;
}
interface DropdownMenuProps {
  dropdownMenuButton?: React.ReactNode;
  menuItem?: MenuItem[];
  className?: string;
}
const DropdownMenu: React.FC<DropdownMenuProps> = ({
  menuItem,
  dropdownMenuButton,
  className,
}) => {
  const [isShowContent, setIsShowContent] = useState(false);
  const toggle = () => setIsShowContent((preState) => !preState);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsShowContent(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return (
    <div className="relative h-full" ref={dropdownRef}>
      <div className="h-full" onClick={toggle}>
        {dropdownMenuButton}
      </div>
      {isShowContent && (
        <div
          className={`absolute bg-white py-[5px] border mt-[2px] z-50 ${className}`}
        >
          <ul className="min-w-[160px] inline-block w-full">
            {menuItem?.map((item, index) => {
              return (
                <li
                  className={`w-full px-5 py-1 text-[14px] font-normal cursor-pointer hover:bg-[#E7E7E7] ${
                    item.border && `border-t-[1px]`
                  } ${item.isHidden && " hidden"}`}
                  key={index}
                  onClick={() => {
                    if (item?.onClick) item.onClick();
                    setIsShowContent(false);
                  }}
                >
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
export default DropdownMenu;
