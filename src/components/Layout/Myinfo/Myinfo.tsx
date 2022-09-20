import { useEffect, useState } from "react";
import { Menu } from '@headlessui/react';
import { Link } from "react-router-dom";
import s from "./Myinfo.module.scss";
import cx from "classnames";

import Noavatar from "../../../asset/images/thumbnail/img_noavatar.png";
import Avatar from "../../../asset/images/thumbnail/img_avatar.png";
import { ReactComponent as IconInfo } from "../../../asset/images/icons/ico_info.svg";
import { ReactComponent as IconMenu } from "../../../asset/images/icons/ico_more.svg";

export interface MyinfoProps{
  isLogin:boolean;
  name?:string;
  level?:number;
}

function Myinfo(props: MyinfoProps) {

  const {isLogin=true,name,level=9}=props;
  const [levelProgress, setLevelProgress] = useState<number>(0);

  useEffect(() => {
    if (level ===0 ){
      setLevelProgress(0);
    }if (level > 0 && level <=5){
      setLevelProgress(1);
    }if (level > 5 && level <=10){
      setLevelProgress(2);
    }if (level > 10 && level <=15){
      setLevelProgress(3);
    }if (level > 15 && level <=20){
      setLevelProgress(4);
    }if (level > 20 && level <=25){
      setLevelProgress(5);
    }if (level > 25){
      setLevelProgress(6);
    }
  },[level])

  return (
    <div className={cx(s.myinfo)}>
      {isLogin===false ? (
        <div className={cx(s.info)}>
          <div className={cx(s.avatar)}><img src={Noavatar} alt="" /></div>
          <button className={cx(s.btn_login)}>로그인</button>
        </div>
      )
      :(
        <div className={cx(s.info)}>
          <div className={cx(s.avatar)}><img src={Avatar} alt="" /></div>
          <span className={cx(s.name)}>{name}</span>
          <div className={cx(s.level)}>
            <div className={cx(s.level__text)}>
              <span className={cx(s.ico_info)}><IconInfo /></span>
              Level
              <span className={cx(s.number)}>{level}</span>
            </div>
            <div className={cx(s.level__process)}>
              <span className={cx(s.level__process__exp)} style={{width:(levelProgress * 100) / 6 + "%" }}></span>
            </div>
          </div>
        </div>
      )
      }
      {isLogin && (
      <>
      <Menu as="div" className={cx(s.menu)}>
        <Menu.Button as="button" className={cx(s.btn_menu)}><IconMenu /></Menu.Button>
        <Menu.Items className={cx(s.menu__list)}>
          <Menu.Item><Link to="/none" className={cx(s.menu__item)}>Menu1</Link></Menu.Item>
          <Menu.Item><Link to="/none" className={cx(s.menu__item)}>Menu2</Link></Menu.Item>
          <Menu.Item><Link to="/none" className={cx(s.menu__item)}>Menu3</Link></Menu.Item>
          <Menu.Item><Link to="/none" className={cx(s.menu__item)}>Menu4</Link></Menu.Item>
        </Menu.Items>
      </Menu>
      </>
      )}
    </div>
  );
}

export default Myinfo;
