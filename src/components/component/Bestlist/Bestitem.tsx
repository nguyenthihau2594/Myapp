import cx from "classnames";
import s from "./Bestlist.module.scss";

import { ReactComponent as IconPrice } from "../../../asset/images/icons/ico_price.svg";

export interface BestitemProps {
	thumb: string;
	title: string;
	desc: string;
	price: number;
	total: number;
	available: number;
	className?: string;
}

function Bestitem(props: BestitemProps) {
	const {thumb,title,desc,price,total,available,className}=props;

	function formatNumber(isNumber: number) {
	  let formattedNumber = Number(isNumber)
		.toFixed(2)
		.replace(/\d(?=(\d{3})+\.)/g, "$&,");
	  const splitArray = formattedNumber.split(".");
	  if (splitArray.length > 1) {
		formattedNumber = splitArray[0];
	  }
	  return formattedNumber;
	}

	return (
		<div className={cx(s.news__item,  className && className)}>
			<a href="/none">
				<div className={s.thumb}><img src={thumb} alt="" /></div>
				<div className={s.info}>
					<div className={s.title}>{title}</div>
					<div className={s.desc}>{desc}</div>
					<div className={s.price}><span className={s.icon}><IconPrice /></span>{formatNumber(price)}</div>
				</div>
				<div className={s.hover}>
					<span>{available}/{formatNumber(total)}개 남음</span>
				</div>
			</a>
		</div>
	);
}

export default Bestitem;
