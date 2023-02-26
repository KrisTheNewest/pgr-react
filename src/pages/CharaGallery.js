import React, { useState } from 'react';

import '../App.css';

// import Nav from "../compos/Nav";
import List from "../compos/List";
import Gallery from "../compos/Gallery"
import SkinData from "../compos/SkinData";
const payload = [
	{
		id: "123", 
		name: "Chara A", 
		costumes: [{
			id: "char_010_chen_1",
			name:"Costume 1A",
			data: "Placeholder 1A"
		},
		{
			id: "char_010_chen_2",
			name:"Costume 2A",
			data: "Placeholder 2A"
		},]
	},
	{
		id: "124", 
		name: "Chara B", 
		costumes: [{
			id: "char_017_huang_1",
			name:"Costume 1B",
			data: "Placeholder 1B"
		}]
	},
]
function CharaGallery() {
		
	// query them database with basically the same setup as static express pages
	// use array methods to grab specific shit

	// use <react-calendar>??

	// TODO: use react-navbar let navBtnHigh = params === "main" ? 0 : params === "calendar" ? 1 : 2; 
	const [currentChara, setChara] = useState('123'); //ID? array index? only needed for the list
	const [currentCost,  setCostume] = useState('char_010_chen_1'); //array index? state? needed for the list and the data
	// const [currentData,  setData] = useState(''); //ID? array index? state? inside SkinData probably not
	
	// function switchChara(newChara) {
	// 	setChara(newChara.name);
	// 	setCostume(newChara.costumes[0].id);
	// 	setData(newChara.costumes[0].data);
	// }

	return (
		<div className='fuckung'>
			<List payload={payload} setChara={setChara} setCost={setCostume} currentChara={currentChara} currentCost={currentCost}></List>
			{/* <Gallery></Gallery> */}
			<SkinData></SkinData>
			{console.log(payload.find(c => c.id === currentChara))}
			<Gallery payload={payload.find(c => c.id === currentChara)} setCost={setCostume} currentCost={currentCost}></Gallery>
			{/* <SkinData payload={payload.currentChara.currentCost.data[0]} currentData={currentData} setData={setData} ></SkinData> */}
		</div>
	)
}

export default CharaGallery;