import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from './NavBar';
import SkinHistory from './SkinHistory';
import Footer from './Footer';

import '../App.css';

function Base() {
	return (
		<div className='base autoMargin'>
			<NavBar />
			<Outlet></Outlet>
			<SkinHistory />
			<Footer />
		</div>
	)
}

export default Base;