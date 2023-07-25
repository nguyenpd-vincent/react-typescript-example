import HeaderButton from "@/components/Layout/Button/HeaderButton";
import { useLocale } from "@/locales";
import { faCirclePlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import DraggableNote from "./DraggableNote";
import { useEffect, useState } from "react";
import { getListStickyNote, saveStickyNote } from "@/services/sitckyNote";
import ClassicButton from "@/components/Layout/Button/ClassicButton";

interface StickyNotePropsI {
  contact?: number;
}

export const StickyNote = ({ contact }: StickyNotePropsI) => {
  const [listStickyNote, setListStickyNote] = useState<API.StickyNote[]>([]);
  const [isShowPostIt, setIsShowPostIt] = useState<boolean>(true);
  const t = useLocale();
  let ignore = false;

  const getList = async () => {
    const result = contact
      ? await getListStickyNote({ contact: contact })
      : await getListStickyNote({});
    if (result?.status === 200) {
      setListStickyNote(result.data);
    }
  };

  const handleAddStickNote = () => {
    const newStickNote: API.StickyNote = {
      color: -41487,
      width: 200,
      height: 200,
      top: 50,
      left: 50,
      editable: 1,
      shareable: 1,
      shared: 1,
    };
    if (contact) newStickNote["contact"] = contact;
    const addNewStickNote = async () => {
      await saveStickyNote(newStickNote);
      getList();
    };
    addNewStickNote();
  };

  useEffect(() => {
    if (!ignore) {
      getList();
    }
    return () => {
      ignore = true;
    };
  }, []);

  if (contact) {
    return (
      <div className="flex flex-row bg-[#f5f5f5] me-[5px]">
        <ClassicButton
          label={t.formatMessage({
            id: "patient.patientDetail.controlBar.postIt",
            defaultMessage: "Post-it",
          })}
          title={t.formatMessage({
            id: "patient.patientDetail.controlBar.postIt.tooltip",
            defaultMessage: "Afficher/Masquer les post-its du patient",
          })}
          className="text-[12px] border-r-0"
          onClick={() => setIsShowPostIt(!isShowPostIt)}
        />
        <ClassicButton
          title="Ajouter un post-it pour ce patient"
          icon={faPlusCircle}
          className="text-[12px]"
          onClick={handleAddStickNote}
        />
        {isShowPostIt
          ? listStickyNote.map((st, index) => (
              <DraggableNote
                key={st.id}
                stickyNote={st}
                zIndex={index === listStickyNote.length - 1 ? 5 : 4}
              />
            ))
          : null}
      </div>
    );
  }

  return (
    <div className="flex gap-[1px] items-center">
      <HeaderButton
        label={t.formatMessage({
          id: `header.main-menu.post-it`,
        })}
        isBackground={true}
        onClick={() => setIsShowPostIt(!isShowPostIt)}
      />
      <HeaderButton
        icon={faCirclePlus}
        isBackground={true}
        onClick={handleAddStickNote}
      />
      <i className="fa-sharp fa-palette"></i>
      {isShowPostIt
        ? listStickyNote.map((st, index) => (
            <DraggableNote
              key={st.id}
              stickyNote={st}
              zIndex={index === listStickyNote.length - 1 ? 5 : 4}
            />
          ))
        : null}
    </div>
  );
};
