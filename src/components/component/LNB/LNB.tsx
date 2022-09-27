import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import LNBMenu from "../LNBMenu/LNBMenu";
import Myinfo from "../Myinfo/Myinfo";

import s from "./LNB.module.scss";
import cx from "classnames";

import Logo from "../../../asset/images/thumbnail/logo.png";
import Logo_mo from "../../../asset/images/thumbnail/logo_mo.png";
import { ReactComponent as IconMenu } from "../../../asset/images/icons/ico_menu.svg";
import { ReactComponent as IconClose } from "../../../asset/images/icons/ico_close.svg";


function LNB() {
	const [windowWidth] = useWindowSize();
	const [isOpen,setOpen]=useState(false);
	const handleMenu = () => {
		setOpen(!isOpen);
	}
	useEffect(() => {
		const body = document.getElementsByTagName('body')[0];
		if (isOpen === true) {
			body.setAttribute('data-overflow','true');
		}else{
			body.setAttribute('data-overflow','false');
		}
	})
	
	return (
		<div className={s.lnb}>
			<div className={s.lnb_inner}>
				<h1 className={s.logo}><a href="#none"><img src={windowWidth > 1024 ? Logo : Logo_mo} alt="" /></a></h1>
				{windowWidth <= 1024 && <button className={s.btn_menu} onClick={handleMenu} ><IconMenu /></button>}
			</div>
			<div className={isOpen ? cx(s.lnb_content, s.is_open) : s.lnb_content}>
				<div className={s.lnb_box}>
					{windowWidth <= 1024 && <button className={s.btn_close} onClick={handleMenu} ><IconClose /></button>}
					<div className={s.lnb__info}>
						<Myinfo isLogin={true} name="nguyenhau" level={5} />
					</div>
					<div className={s.lnb__menu}>
						<LNBMenu />
					</div>
				</div>
			</div>
		</div>
	);
}

export default LNB;
