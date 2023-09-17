import React, { useEffect, memo } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
// import classNames from 'classnames';

import '../App.css';
import SkinData from "../compos/SkinData";

// const compare = (prev, next) => prev.cost === next.cost && prev.payload?.frameName === next.payload?.frameName;

function Gallery(props) {

	const { cost } = useParams();
	const { payload: currentChara, } = props;
	const allCostumes = currentChara.costumes;
	
	const currentIndex = allCostumes.findIndex(c => c._id === cost) ?? 0;
	const currentSkin = allCostumes[currentIndex];

	useEffect(() => {
		try {
			// if (!currentChara) return;
			let {charaName, _id: charaId } = currentChara;
			let {_id: skinId , skinName} = currentSkin;
			if (localStorage.getItem("visited")) {
				let exists = JSON.parse(localStorage.getItem("visited"))
					.filter(i => i.skinId !== skinId)
					.concat({
						charaId,
						skinId,
						skinName,
						charaName
					});
				if (exists.length > 10) exists.shift();
				dispatchEvent(new Event("storage"));
				localStorage.setItem("visited", JSON.stringify(exists));
			}
			else {
				localStorage.setItem("visited", JSON.stringify([]));
			}
			console.log(skinName);
		} 
		catch (err) {
			console.warn(err);
		}
	}, [currentChara, currentSkin])
	// if (!currentChara) return ("please wait...");
	console.time("array.at");
	let active = allCostumes.length > 1;
	let bigger = allCostumes.at(currentIndex + 1) ?? allCostumes.at(0);
	// if (bigger > allCostumes.length - 1) bigger = 0;
	let smaller = allCostumes.at(currentIndex - 1) ?? allCostumes.at(-1);
	// if (smaller < 0) smaller = allCostumes.length - 1;currentIndex - 1;
	console.timeEnd("array.at")
	// const btnClasses = classNames("galleryBtn", active && "enabled");

	return (
		<main className="charaPreview">
			<div className="charaImage">
				{active ?
					<Link to={`/costumes/${currentChara._id}/${bigger._id}`}
						className="galleryBtn enabled"
					>&lt;
					</Link>
					: <div className="galleryBtn">&lt;</div>
				}
				<img
					className="charaPic"
					srcSet={`https://raw.githubusercontent.com/KrisTheNewest/MayerBotPics/master/characters/char_109_fmout_1.png`}
					alt=""
				></img>
				{active ?
					<Link to={`/costumes/${currentChara._id}/${smaller._id}`}
						className="galleryBtn enabled" >
						&gt;
					</Link>
					: <div className="galleryBtn">&gt;</div>
				}
			</div>
			<SkinData price={currentSkin.price} event={currentSkin.event}></SkinData>
		</main>
	);
}
Gallery.whyDidYouRender = {
	// logOnDifferentValues: true,
	customName: 'Gallery'
}
export default Gallery//, compare);
