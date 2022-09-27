
import Newitem, {NewitemProps} from './Newitem';
import Button from '../Button/Button';

import s from './Newlist.module.scss';
import { useState } from 'react';

type NewlistProps ={
	news: NewitemProps[];
	onClickItem?(): void;
};

function Newlist(props: NewlistProps) {
	const {news, onClickItem}=props;

	const [title, setTitle] = useState('');

	const handleTitle = (item: NewitemProps) => {
		setTitle(item.title);
	}
	
	return (
		<div className={s.news__wrap}>
			<div className={s.sub__title}>News</div>
			<div className={s.news__list}>
				{news.map((item: NewitemProps,index:number) => {
					return (
						<Newitem thumb={item.thumb} title={item.title} desc={item.desc} price={item.price} total={item.total} available={item.available} key={index} onClickAdd={() => {handleTitle(item)}} />
					)
				})}
			</div>
			<Button kind="tertiary" as="button" className={s.btn_view} onClick={onClickItem}>모두보기</Button>
			{title && <p>{title}</p>}
		</div>
	)
}

export default Newlist;
