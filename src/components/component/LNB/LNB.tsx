import LNBMenu from "../LNBMenu/LNBMenu";
import Myinfo from "../Myinfo/Myinfo";

import s from "./LNB.module.scss";

import Logo from "../../../asset/images/thumbnail/logo.png";
import Logo_mo from "../../../asset/images/thumbnail/logo_mo.png";
import { ReactComponent as IconMenu } from "../../../asset/images/icons/ico_menu.svg";
import { ReactComponent as IconClose } from "../../../asset/images/icons/ico_close.svg";


function LNB() {
	return (
		<div className={s.lnb}>
			<div className={s.lnb_inner}>
				<h1 className={s.logo}><a href="#none"><img src={Logo} alt="" className="is_pc" /><img src={Logo_mo} alt="" className="is_mo" /></a></h1>
				<button className={s.btn_menu}><IconMenu /></button>
				<div className={s.lnb_content}>
					<button className={s.btn_close}><IconClose /></button>
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
