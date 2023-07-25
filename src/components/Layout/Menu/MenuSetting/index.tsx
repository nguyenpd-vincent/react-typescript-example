import HeaderButton from "../../Button/HeaderButton";
import { logout } from "@/stores/auth/authSlice";
import { useAppDispatch } from "@/stores/hooks";
import headerTiltes from "@/locales/fr/header.json";
import { useLocale } from "@/locales";

const listMenuSetting = headerTiltes["menu-setting"]["list-menu"];

const MenuSetting = () => {
  const t = useLocale();
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between px-[20px] h-[40px] bg-[#1b1b1b]">
      <ul className="flex text-[#CECECE] text-[11px]">
        <li
          className={`px-[15px] py-[10px] leading-5 hover:cursor-pointer text-[20px]`}
        >
          {t.formatMessage({
            id: `header.menu-setting.logo`,
          })}
        </li>
        {listMenuSetting.map((_item, index) => (
          <li
            key={index}
            className="px-[15px] py-[10px] leading-5 hover:bg-[#353535] hover:cursor-pointer"
          >
            {t.formatMessage({
              id: `header.menu-setting.list-menu.${index}.item-menu`,
            })}
          </li>
        ))}
      </ul>
      <HeaderButton label="Déconnexion" onClick={() => dispatch(logout())} />
    </div>
  );
};

export default MenuSetting;
