import React from "react";
// import pgrIcon from './icon.webp';
// import charaImg from "./chara_bianca.png";
import '../App.css';

function Gallery(props) {
	const {payload, currentCost } = props
	return (
		<main className="charaPreview">
			{/* <button className="galleryBtn" onClick={() => setCost(payload.costumes.find(c => currentCost === c.id))}>&lt;</button> */}
			<button className="galleryBtn" >&lt;</button>
			<img
				className="autoMargin charaImage"
				srcSet={`https://raw.githubusercontent.com/KrisTheNewest/MayerBotPics/master/characters/${payload.costumes.find(c => currentCost === c.id).id}.png`}
				// srcSet="{}"
				alt=""
			></img>
			<button className="galleryBtn">&gt;</button>
		</main>
	);
}

export default Gallery;
