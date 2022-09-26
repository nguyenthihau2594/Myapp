import Layout from "../../Layout/Layout";
import KVMain from "../../component/KVMain/KVMain";
import Game from "../../component/Game/Game";
import Banner from "../../component/Banner/Banner";
import News from "../../component/NewList/Newlist";
import Best from "../../component/Bestlist/Bestlist";

import data from '../../component/NewList/DataNewlist.json';
import Bestdata from '../../component/Bestlist/DataBestlist.json';


import s from "./Home.module.scss";
import cx from "classnames";


function Home() {
	return (
		<Layout>
			<div className={s.home_page}>
				<section className={cx(s.kv__main, s.section)}><KVMain /></section>
				<section className={cx(s.game, s.section)}><Game /></section>
				<section className={cx(s.news, s.section)}><News news={data} /></section>
				<section className={cx(s.banner, s.section)}><Banner /></section>
				<section className={cx(s.best, s.section)}><Best best={Bestdata} /></section>
			</div>
		</Layout>
  );
}

export default Home;
