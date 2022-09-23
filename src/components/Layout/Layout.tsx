import s from "./Banner.module.scss";

import ImgBanner from "../../../asset/images/thumbnail/home/img_banner.png";

function Banner() {
  return (
    <div className={s.banner}>
      <img src={ImgBanner} alt="" />
    </div>
  );
}

export default Banner;
