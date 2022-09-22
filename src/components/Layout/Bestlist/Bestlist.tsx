
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
			{best.map((item: BestitemProps,index:number) => {

				// const {thumb, title, desc, price, total, available }= item;
				// return(
				// 	<Newitem thumb={thumb} title={title} desc={desc} price={price} total={total} available={available} key={index}/>
				// ) tuong duong voi code duoi
				return (
					<Bestitem thumb={item.thumb} title={item.title} desc={item.desc} price={item.price} total={item.total} available={item.available} key={index}/>
				)
			})}
		</div>
		<Button kind="tertiary" as="button" className={s.btn_view}>모두보기</Button>
	</div>
)
}

export default Bestlist;
