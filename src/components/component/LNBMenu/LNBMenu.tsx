import { NavLink } from "react-router-dom";
import s from "./LNBMenu.module.scss";
import cx from "classnames";


import { ReactComponent as IconHome } from "../../../asset/images/icons/ico_home.svg";
import { ReactComponent as IconMypage } from "../../../asset/images/icons/ico_mypage.svg";
import { ReactComponent as IconGame } from "../../../asset/images/icons/ico_game.svg";
import { ReactComponent as IconStore } from "../../../asset/images/icons/ico_store.svg";
import { ReactComponent as IconDiscord } from "../../../asset/images/icons/ico_discord.svg";

const menus = [
  {
    link: "/guide",
    text: "홈",
    icon: IconHome
  },
  {
    link: "/mypage",
    text: "마이페이지",
    icon: IconMypage
  },
  {
    link: "/game",
    text: "게임",
    icon: IconGame
  },
  {
    link: "/store",
    text: "스토어",
    icon: IconStore
  },
  {
    link: "/discord",
    text: "디스코드",
    icon: IconDiscord
  },
]


function LNBMenu() {
  return (
    <div className={cx(s.lbn_menu)}>
      <ul className={s.menu__list}>
        {menus.map((item,index) => {
          const Icon = item.icon;
          return(
            <li key={index} className={s.menu__item} >
              <NavLink to={item.link} end
                // className={cx(`${isActive===true && (s.is_active)}`)}
                className={({ isActive }) =>
                isActive ? cx(s.link, s.is_active): s.link
              }
                >{item.text}<span className={s.icon}><Icon/></span>
              </NavLink>
            </li>
          )
        })}

      </ul>
    </div>
  );
}

export default LNBMenu;
