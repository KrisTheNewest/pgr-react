import React from 'react';
import { NavLink, } from "react-router-dom";
import styled from 'styled-components';
// import classNames from 'classnames';

import pgrIcon from '../icon.webp';
import '../App.css';

const PrettyNavLink = styled(NavLink)`
padding-left: 15px;
padding-right: 15px;
display: flex;
justify-content: center;
align-items: center;
color: #b80e23;
	&:hover {
		background-color: #1e1e1e;
	}
	&.active {
		
		background-color: #1e1e1e;
	}
`;
function NavBar() {
	return (
		<nav className="navBar">
			{/* <img className="navImg" srcSet={pgrIcon} alt="the icon of pgr, a darkhaired girl with red highlights" ></img> */}
			<form>
				<input>
				</input>
			</form>
			<PrettyNavLink to="/costumes">
						Gallery
			</PrettyNavLink>
			<PrettyNavLink to="/about">
						About/Legend
			</PrettyNavLink>
			<PrettyNavLink to="/calendar">
						Calendar
			</PrettyNavLink>
		</nav>
	)
}
NavBar.whyDidYouRender = {
	logOnDifferentValues: true,
	customName: 'Nav'
}
export default NavBar;