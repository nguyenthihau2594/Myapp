
import Newitem, {NewitemProps} from './Newitem';
import Button from '../Button/Button';

import s from './Newlist.module.scss';

type NewlistProps ={
	news: NewitemProps[];
};

function Newlist(props: NewlistProps) {
	const {news}=props;
return (
	<div className={s.news__wrap}>
		<div className={s.sub__title}>News</div>
		<div className={s.news__list}>
			{news.map((item: NewitemProps,index:number) => {
				return (
					<Newitem thumb={item.thumb} title={item.title} desc={item.desc} price={item.price} total={item.total} available={item.available} key={index}/>
				)
			})}
		</div>
		<Button kind="tertiary" as="button" className={s.btn_view}>모두보기</Button>
	</div>
)
}

export default Newlist;
