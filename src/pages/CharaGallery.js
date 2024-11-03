import React, { useState, useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import '../App.css';

import List from "../compos/List";
import Gallery from "../compos/Gallery";

const compare = (prev, next) => prev.chara === next.chara;

//TODO: move to gallery
// function DisplayContainer(props) {

// 	console.log({cost})
// 	return  <Gallery cost={cost} payload={props.payload} ></Gallery>;
// }

function EntireContainer() {
	const { chara } = useParams();
	return <CharaGallery chara={chara}></CharaGallery>;
}

const CharaGallery = memo((props) => {
	const { chara } = props;
	const [ allCharas, setAllCharas ] = useState([]);
	const [ loading, isLoading ] = useState(true);

	useEffect(() => {
		axios.get("http://localhost:5000/costumes")
			.then(response => {
				setAllCharas(response.data.characters);
				// setTimeout(() => {
				isLoading(false);
				// }, 5000);
			});
	}, []);

	const tempChara = allCharas.find(c => c._id === chara);
	if (loading) return "Please wait...";
	return (
		<div className='fullGallery'>
			<List chara={chara} payload={allCharas}></List>

			{tempChara && <Gallery payload={tempChara} ></Gallery>}
			{/* {tempChara ?
					<Link to={`/costumes/${currentChara._id}/${bigger?._id}`}
						className="galleryBtn enabled"
					>&lt;
					</Link>
					: <div className="galleryBtn">&lt;</div>
				} */}
		</div>
	)

}, compare);

export default EntireContainer;