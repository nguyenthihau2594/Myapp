import { ReactNode } from "react";
import LNB from "../component/LNB/LNB";
import LangSelect from "../component/LangSelect/LangSelect";
import Footer from "../component/Footer/Footer";
import { useScroll } from "../hooks/useScroll";
import { useWindowSize } from "../hooks/useWindowSize";

import { Outlet } from "react-router-dom";

import s from "./Layout.module.scss";
import cx from "classnames";

type LayoutProps = {
	children?: ReactNode;
  };

function Layout(props: LayoutProps) {
	const { children } = props;
	const isScroll = useScroll();
	const [windowWidth] = useWindowSize();

	return (
		<div className={s.wrap}>
			<nav className={isScroll && windowWidth <= 1024 ? cx(s.nav, s.is_hidden) : s.nav}>
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
