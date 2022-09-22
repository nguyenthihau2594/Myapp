import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';


import s from './Game.module.scss';

import ImgBg from "../../../asset/images/thumbnail/home/img_game_bg.png";
import Imgthumb from "../../../asset/images/thumbnail/home/img_game_thumb.png";
import ImgLogo from "../../../asset/images/thumbnail/home/img_game_logo.png";

const games= [
  {
    bg: ImgBg,
    thumb: Imgthumb,
    logo: ImgLogo,
    title: "건쉽 배틀 토탈워페어1",
    ios: true,
    aos:true,
    online: false,
  },
  {
    bg: ImgBg,
    thumb: Imgthumb,
    logo: ImgLogo,
    title: "건쉽 배틀 토탈워페어2",
    ios: true,
    aos:true,
    online: false,
  },
  {
    bg: ImgBg,
    thumb: Imgthumb,
    logo: ImgLogo,
    title: "건쉽 배틀 토탈워페어3",
    ios: false,
    aos:false,
    online: true,
  },
    {
      bg: ImgBg,
      thumb: Imgthumb,
      logo: ImgLogo,
      title: "건쉽 배틀 토탈워페어4",
      ios: true,
      aos:true,
      online: true,
    }
]


function Game() {
  return (
    <div className={s.kv_banner}>
		<div className={s.big__title}>Game</div>
		<Swiper
			modules={[Navigation,Pagination]}
			spaceBetween={22}
			slidesPerView={3}
			navigation={{
			prevEl: '.game_prev',
			nextEl: '.game_next',
			}}
			pagination={{
			type: "fraction",
			el: ".game_pagination",
			}}
			className={s.swiper_game}
		>
			{games.map((item,index)=>(
			<SwiperSlide className={s.slider__item} key={index}>
				<div className={s.slider__info}>
					<div className={s.slider__img}>
						<div className={s.bg}><img src={item.bg} alt="" /></div>
						<div className={s.img}><img src={item.thumb} alt="" /></div>
						<div className={s.logo}><img src={item.logo} alt="" /></div>
					</div>
					<div className={s.slider__text}>
						<span className={s.title}>{item.title}</span>
						<ul className={s.btn_list}>
						{item.ios===true && <li className={s.btn_item}><button type="button" className={s.btn}>iOS</button></li>}
						{item.aos===true && <li className={s.btn_item}><button type="button" className={s.btn}>AOS</button></li>}
						{item.online===true && <li className={s.btn_item}><button type="button" className={s.btn}>online</button></li>}
						</ul>
					</div>
				</div>
			</SwiperSlide>
			))}
		</Swiper>
		<div className={s.control}>
			<button className={`game_prev ${s.btn_prev}`} ></button>
			<div className={`game_pagination ${s.game_pagination}`}></div>
			<button className={`game_next ${s.btn_next}`} ></button>
		</div>
    </div>
  );
}

export default Game;
