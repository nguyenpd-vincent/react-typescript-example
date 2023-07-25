import React, { useEffect, useRef, useState } from "react";
import "./css/draggable-note.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { colors } from "@/constant/colorContant";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import { deleteStickyNote, saveStickyNote } from "@/services/sitckyNote";
import {
  convertColorBgHeader,
  convertColorHexInt,
  convertColorInthex,
} from "@/utils/color";
import { useLocale } from "@/locales";

interface DraggableNoteProps {
  stickyNote: API.StickyNote;
  zIndex?: number;
}

const DraggableNote: React.FC<DraggableNoteProps> = ({
  stickyNote,
  zIndex,
}) => {
  const t = useLocale();
  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isShowColorPicker, setIsShowColorPicker] = useState<boolean>(false);
  const [info, setInfo] = useState<API.StickyNote>(stickyNote);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  useEffect(() => {
    const rootElement = rootRef.current;
    const contentElement = contentRef.current;
    const headerElement = headerRef.current;

    const dragMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      const starX = e.clientX;
      const starY = e.clientY;
      let X: number;
      let Y: number;
      if (rootElement) {
        X = rootElement.offsetLeft;
        Y = rootElement.offsetTop;
      }
      let left: number;
      let top: number;

      const elementDrag = (e: MouseEvent) => {
        e.preventDefault();
        const l = Math.min(
          e.clientX - starX + X,
          window.innerWidth - info?.width
        );
        const t = Math.min(
          e.clientY - starY + Y,
          window.innerHeight - info?.height
        );
        left = l > 0 ? l : 0;
        top = t > 0 ? t : 0;
        if (rootElement) {
          rootElement.style.left = `${left}px`;
          rootElement.style.top = `${top}px`;
        }
      };

      const closeDragElement = () => {
        if (
          (left !== info.left || top !== info.top) &&
          left !== undefined &&
          top !== undefined
        ) {
          handleDataChange({ left: left, top: top });
        }
        window.removeEventListener("mouseup", closeDragElement);
        window.removeEventListener("mousemove", elementDrag);
      };

      window.addEventListener("mousemove", elementDrag);
      window.addEventListener("mouseup", closeDragElement);
    };

    const resizeMouseDown = () => {
      let width = info.width;
      let height = info.height;
      const elementResize = () => {
        if (rootElement && headerElement && contentElement) {
          width = contentElement.offsetWidth;
          height = contentElement.offsetHeight + headerElement.offsetHeight;
          rootElement.style.width = `${width}px`;
          rootElement.style.height = `${height}px`;
        }
      };

      const closeResizeContent = () => {
        if (height !== info.height || width !== info.width) {
          handleDataChange({ height: height, width: width });
        }
        window.removeEventListener("mouseup", closeResizeContent);
        window.removeEventListener("mousemove", elementResize);
      };

      window.addEventListener("mousemove", elementResize);
      window.addEventListener("mouseup", closeResizeContent);
    };

    if (headerElement && contentElement) {
      headerElement.addEventListener("mousedown", dragMouseDown);
      contentElement.addEventListener("mousedown", resizeMouseDown);
    }

    return () => {
      if (headerElement && contentElement) {
        headerElement.removeEventListener("mousedown", dragMouseDown);
        contentElement.removeEventListener("mousedown", resizeMouseDown);
      }
    };
  }, [info?.id, info]);

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInfo({
      ...info,
      msg: event.target.value,
    });
  };

  const handleSetIsShowColorPicker = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setIsShowColorPicker(!isShowColorPicker);
  };

  const handleDataChange = (infoChange: object) => {
    const newInfo = {
      ...info,
      ...infoChange,
    };
    if (!newInfo.msg) delete newInfo.msg;
    setInfo(newInfo);
    const save = async () => {
      await saveStickyNote(newInfo);
    };
    save();
  };

  const handleDelete = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    id: number | undefined
  ) => {
    e.stopPropagation();
    const deleteSt = async () => {
      await deleteStickyNote({ id: id });
    };
    if (
      confirm(
        t.formatMessage({ id: `header.main-menu.post-it-note.confirm` })
      ) === true
    ) {
      deleteSt();
      setIsHidden(true);
    }
  };

  const elemStyle = {
    width: `${info.width}px`,
    height: `${info.height}px`,
    top: `${info.top}px`,
    left: `${info.left}px`,
    color: `${convertColorInthex(info.color).foreground}`,
    zIndex: zIndex,
  };

  if (isHidden) return null;

  return (
    <div
      className="lp-draggable-note box-border absolute z-40 text-xs max-w-full max-h-full border-none"
      style={elemStyle}
      ref={rootRef}
      onClick={() => setIsShowColorPicker(false)}
    >
      <div
        className="flex h-[30px] p-1 cursor-move z-10 "
        style={{ backgroundColor: convertColorBgHeader(info.color) }}
        ref={headerRef}
      >
        <div className="flex grow items-center text-left">
          {info?.editable && info.shareable ? (
            <>
              <input
                className="mx-1"
                type="checkbox"
                checked={info.shared ? true : false}
                onChange={(e) => {
                  handleDataChange({ shared: e.target.checked });
                }}
              />
              {t.formatMessage({ id: `header.main-menu.post-it-note.share` })}
            </>
          ) : null}
        </div>
        <div className="relative flex items-center">
          {info?.editable ? (
            <FontAwesomeIcon
              icon={faPalette}
              className="w-4 h-4 mr-1 cursor-pointer"
              onClick={handleSetIsShowColorPicker}
            />
          ) : null}
          <FontAwesomeIcon
            icon={faTrashCan}
            className="w-4 h-4 mr-2 cursor-pointer"
            onClick={(e) => handleDelete(e, info.id)}
          />
        </div>
      </div>
      <div
        className={`absolute ${
          isShowColorPicker ? "flex" : "hidden"
        } flex-wrap shadow border border-gray-300 bg-white h-[196px] w-[196px] top-6 right-[-145px] p-[1px]`}
      >
        {colors.map((color, index) => {
          return (
            <div
              key={index}
              className="inline h-[10px] w-[10px] m-[1px] cursor-pointer"
              onClick={() =>
                handleDataChange({ color: convertColorHexInt(color) })
              }
              style={{ backgroundColor: `${color}` }}
            ></div>
          );
        })}
      </div>
      {info?.editable ? (
        <textarea
          className="content w-full min-w-[150px] min-h-[120px] p-4 border-none focus:outline-none focus:border-none"
          style={{
            backgroundColor: convertColorInthex(info.color).background,
          }}
          value={info.msg ? info.msg : ""}
          spellCheck="false"
          onChange={handleContentChange}
          onBlur={() => handleDataChange({})}
          ref={contentRef}
        />
      ) : (
        <div
          className="content w-full min-w-[150px] min-h-[120px] p-4"
          style={{
            backgroundColor: convertColorInthex(info.color).background,
          }}
        >
          {info?.msg}
        </div>
      )}
      <div className="absolute h-5 bottom-0 left-2">
        {dayjs(info?.createdOn?.toString())
          .locale("fr")
          .format("DD MMM YYYY HH:mm")}
      </div>
    </div>
  );
};

export default DraggableNote;
