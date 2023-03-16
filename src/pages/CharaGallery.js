import React, { useState, useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import '../App.css';

import List from "../compos/List";
import Gallery from "../compos/Gallery"

const compare = (prev, next) => prev.chara === next.chara;

//TODO: move to gallery
// function DisplayContainer(props) {
	
// 	console.log({cost})
// 	return  <Gallery cost={cost} payload={props.payload} ></Gallery>;
// }

function EntireContainer() {
	const {chara} = useParams();
	return <CharaGallery chara={chara}></CharaGallery>;
}

const CharaGallery = memo((props) => {
	const {chara} = props;
	const [allCharas, setAllCharas] = useState([]);
	
	useEffect(() => {
		axios.get("http://localhost:5000/costumes")
		.then(response => {
			setAllCharas(response.data.characters);
		});
	}, [chara]);

	let tempChara = allCharas.find(c => c._id === chara);

	return (
		<div className='fullGallery'>
			<List chara={chara} payload={allCharas}></List>
			<Gallery payload={tempChara} ></Gallery>
		</div>
	)

},  compare);

export default EntireContainer;