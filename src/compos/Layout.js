import React from 'react';
import {Outlet} from "react-router-dom";
import NavBar from './NavBar';

import '../App.css';

function Base() {
	return (
		<div className='base autoMargin'>
			<NavBar />
			<Outlet></Outlet>
			<footer className='feet'>
				<span style={{fontSize: "small"}}>Made by</span>
				<p>
					Krystina<span style={{fontSize: "small"}}> (website and coding)</span><br></br>
					Senus<span style={{fontSize: "small"}}> (data gathering)</span><br></br>
				</p>
				<p>
					Powered by React™, Express™ and MongoDB™
				</p>
			</footer>
		</div>
	)
}

export default Base;