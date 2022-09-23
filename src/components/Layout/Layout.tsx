import { ReactNode } from "react";
import LNB from "../component/LNB/LNB";
import LangSelect from "../component/LangSelect/LangSelect";
import Footer from "../component/Footer/Footer";

import { Outlet } from "react-router-dom";

import s from "./Layout.module.scss";

type LayoutProps = {
	children?: ReactNode;
  };

function Layout(props: LayoutProps) {
	const { children } = props;
	return (
		<div className={s.wrap}>
			<nav className={s.nav}>
				<LNB />
			</nav>
			<div className={s.main}>
				<div className={s.language}><LangSelect /></div>
				<Outlet />
				{children}
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
	);
}

export default Layout;
