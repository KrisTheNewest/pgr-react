import React from 'react';
import { NavLink, } from "react-router-dom";
// import classNames from 'classnames';

import pgrIcon from '../icon.webp';
import '../App.css';

function NavBar() {
	return (
		<nav className="navBar">
			{/* <img className="navImg" srcSet={pgrIcon} alt="the icon of pgr, a darkhaired girl with red highlights" ></img> */}
			<form>
				<input>
				</input>
			</form>
			<NavLink to="/costumes"
					className={({ isActive }) =>
					isActive ? "navBtnActive" : ""}>
						Gallery
			</NavLink>
			<NavLink to="/about"
					className={({ isActive }) =>
					isActive ? "navBtnActive" : ""}>
						About/Legend
			</NavLink>
			<NavLink to="/calendar"
					className={({ isActive }) =>
					isActive ? "navBtnActive" : ""}>
						Calendar
			</NavLink>
		</nav>
	)
}
// NavBar.whyDidYouRender = {
// 	logOnDifferentValues: true,
// 	customName: 'Nav'
// }
export default NavBar;