import LNBMenu from "../LNBMenu/LNBMenu";
import Myinfo from "../Myinfo/Myinfo";

import s from "./LNB.module.scss";

import Logo from "../../../asset/images/thumbnail/logo.png";


function LNB() {
	return (
		<div className={s.lnb}>
			<h1 className={s.logo}><a href="#none"><img src={Logo} alt="" /></a></h1>
			<div className={s.lnb__info}>
				<Myinfo isLogin={true} name="nguyenhau" level={5} />
			</div>
			<div className={s.lnb__menu}>
				<LNBMenu />
			</div>
		</div>
	);
}

export default LNB;
