import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import classNames from 'classnames';

import '../App.css';
// import { Link } from 'react-router-dom';

function SkinHistory() {

	function test() {
		try {
			let old = JSON.parse(localStorage.getItem("visited"));
			return old ?? [];
		}
		catch (err) {
			console.warn("Reading localStorage failed!", err);
			return [];
		}
	}

	const [_history, setHistory] = useState(test);//todo error checking 

	function readHerStory () {
		console.log("Change to local storage!");
		setHistory(JSON.parse(localStorage.getItem("visited")));
	}
	
	useEffect(() => {
		window.addEventListener('storage', readHerStory);
		return () => window.removeEventListener('storage', readHerStory);
	}, []);
	
	return (
		<div className='history'>
			{_history.map(obj => 
				<Link key={obj.skinId} to={`/costumes/${obj.charaId}/${obj.skinId}`}>
					{`${obj.charaName} - ${obj.skinName}`}
				</Link>
				// <p>{obj}</p>
			)}
		</div>
	)
}

export default SkinHistory;