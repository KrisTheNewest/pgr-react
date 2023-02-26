import React from 'react';
import pgrIcon from '../icon.webp';
// import charaImg from "./chara_bianca.png";
import '../App.css';
import { Link, Outlet, useLocation, } from "react-router-dom";
import classNames from 'classnames';


function Base(props) {
	// console.log("should this rerender or stay the same?")
	let location = useLocation();
	// let urlParams = useParams();
	console.log(location.pathname)
	return (
		<div className='base autoMargin'>
			<nav className="navBar">
				<img className="navImg" srcSet={pgrIcon} alt="the icon of pgr, a darkhaired girl with red highlights" ></img>
				<h1>Hello world!</h1>
				<ul>
					<li className={classNames("navBtn", location.pathname === "/" && "navBtnActive")}> <Link to="/">Gallery</Link></li>	
					<li className={classNames("navBtn", "navBtnMid", location.pathname === "/about" && "navBtnActive")}> <Link to="/about">About/Legend</Link></li>	
					<li className={classNames("navBtn", location.pathname === "/calendar" && "navBtnActive")}> <Link to="/calendar">Calendar</Link></li>	
				</ul>
				{/* {props.navLink.forEach((link, i) => {
					<a href={link.url} className={"comment " + (props.highlight === i ? 'red' : 'grey')} >{link.name}</a>
				})} */}
			</nav>

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