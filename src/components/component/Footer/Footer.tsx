import s from "./Footer.module.scss";

import { ReactComponent as IconFacebook } from "../../../asset/images/icons/ico_facebook.svg";
import { ReactComponent as IconYoutube } from "../../../asset/images/icons/ico_youtube.svg";

function Footer() {
	return (
		<div className={s.footer}>
			<div className={s.footer__info}>
				<p className={s.text}>
				사업자명: (주) 조이시티 대표이사: 조성원 사업자등록번호: 116-81-54101<br />
				주소 : 경기도 성남시 분당구 분당로 55 분당퍼스트타워 10층 13591 <br />
				통신판매업신고: 경기성남 2007-129
				</p>
				<ul className={s.sns__list}>
					<li className={s.sns__item}><a href="/none" target="_blank"><IconFacebook /></a></li>
					<li className={s.sns__item}><a href="/none" target="_blank"><IconYoutube /></a></li>
				</ul>
				<p className={s.copyright}>&copy; JOYCITY CO. ALL RIGHT RESERVED.</p>
			</div>
		</div>
	);
}

export default Footer;
