
import Bestitem, {BestitemProps} from "./Bestitem";
import Button from '../Button/Button';

import s from './Bestlist.module.scss';

type BestlistProps ={
	best: BestitemProps[];
};

function Bestlist(props: BestlistProps) {
	const {best}=props;
	return (
		<div className={s.news__wrap}>
			<div className={s.sub__title}>Best</div>
			<div className={s.news__list}>
			<Bestitem thumb={best[0].thumb} title={best[0].title} desc={best[0].desc} price={best[0].price} total={best[0].total} available={best[0].available} className={s.is_big} />
			<div className={s.news__list__right}>
				{best.slice(1, 9).map((item: BestitemProps,index:number) => {
					return (
						<Bestitem thumb={item.thumb} title={item.title} desc={item.desc} price={item.price} total={item.total} available={item.available} key={index}/>
					)
				})}
			</div>	
			</div>
			<Button kind="tertiary" as="button" className={s.btn_view}>모두보기</Button>
		</div>
	)
}

export default Bestlist;
