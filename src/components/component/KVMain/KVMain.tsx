import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';


import s from './KVMain.module.scss';
import Button from "../Button/Button";

import ImgKV from "../../../asset/images/thumbnail/home/img_kv.png";


function KVMain() {
  return (
    <div className={s.kv_banner}>
		<Swiper
			modules={[ Navigation,Pagination]}
			spaceBetween={80}
			slidesPerView={1}
			loop={false}
			navigation={{
			prevEl: '.prev',
			nextEl: '.next',
			}}
			pagination={{
			clickable: true,
			el: ".kv_pagination" }}
			className={s.swiper_kv}
		>
			<SwiperSlide className={s.slider__item}>
			<div className={s.slider__content}>
				<div className={s.slider__img}><img src={ImgKV} alt='' /></div>
				<div className={s.slider__info}>
				<div className={s.title}>지구는<br />
					미소녀가 지킬께!<br />
					히어로볼Z</div>
				<div className={s.desc}>
					미소녀 히어로 시대 개막!<br />
					다양한 캐릭터들과 신나는 모험을.
				</div>
				<ul className={s.btn_list}>
					<li><Button kind='primary' as="button"  className={s.btn_more}>자세히 보기</Button></li>
					<li><Button kind='primary__white' as="button" className={s.btn_start}>게임 시작하기</Button></li>
				</ul>
				</div>
			</div>
			</SwiperSlide>
			<SwiperSlide className={s.slider__item}>
			<div className={s.slider__content}>
			<div className={s.slider__img}><img src={ImgKV} alt='' /></div>
			<div className={s.slider__info}>
				<div className={s.title}>지구는<br />
				미소녀가 지킬께!<br />
				히어로볼Z</div>
				<div className={s.desc}>
				미소녀 히어로 시대 개막!<br />
				다양한 캐릭터들과 신나는 모험을.
				</div>
				<ul className={s.btn_list}>
				<li><Button kind='primary' as="button"  className={s.btn_more}>자세히 보기</Button></li>
				<li><Button kind='primary__white' as="button" className={s.btn_start}>게임 시작하기</Button></li>
				</ul>
			</div>
				</div>
			</SwiperSlide>
			<SwiperSlide className={s.slider__item}>
			<div className={s.slider__content}>
			<div className={s.slider__img}><img src={ImgKV} alt='' /></div>
			<div className={s.slider__info}>
				<div className={s.title}>지구는<br />
				미소녀가 지킬께!<br />
				히어로볼Z</div>
				<div className={s.desc}>
				미소녀 히어로 시대 개막!<br />
				다양한 캐릭터들과 신나는 모험을.
				</div>
				<ul className={s.btn_list}>
				<li><Button kind='primary' as="button"  className={s.btn_more}>자세히 보기</Button></li>
				<li><Button kind='primary__white' as="button" className={s.btn_start}>게임 시작하기</Button></li>
				</ul>
			</div>
				</div>
			</SwiperSlide>
		</Swiper>
		<div className={`kv_pagination`}></div>
		<button className={`prev ${s.btn_prev}`} ></button>
		<button className={`next ${s.btn_next}`} ></button>
    </div>
  );
}

export default KVMain;
