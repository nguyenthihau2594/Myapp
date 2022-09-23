import Layout from "../../Layout/Layout";
import KVMain from "../../component/KVMain/KVMain";
import Game from "../../component/Game/Game";
import Banner from "../../component/Banner/Banner";
import News from "../../component/NewList/Newlist";
import Best from "../../component/Bestlist/Bestlist";

import data from '../../component/NewList/DataNewlist.json';
import Bestdata from '../../component/Bestlist/DataBestlist.json';


import s from "./Home.module.scss";


function Home() {
	return (
		<Layout>
			<div className={s.home_page}>
				<section className={s.kv__main}><KVMain /></section>
				<section className={s.kv__main}><Game /></section>
				<section className={s.kv__main}><News news={data} /></section>
				<section className={s.kv__main}><Banner /></section>
				<section className={s.kv__main}><Best best={Bestdata} /></section>
			</div>
		</Layout>
  );
}

export default Home;
