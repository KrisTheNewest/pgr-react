import React, {useEffect, memo} from "react";
import { Link, useParams  } from 'react-router-dom';
// import classNames from 'classnames';

import '../App.css';
import SkinData from "../compos/SkinData";

// const compare = (prev, next) => prev.cost === next.cost && prev.payload?.frameName === next.payload?.frameName;

function Gallery(props) {
	// useEffect(() => {
	// 	console.log("am i being gaslight from the Gallery")
	// });
	// console.log({props})
	const {cost} = useParams();
	const { payload: currentChara,  } = props;

	if (!currentChara) return ("please wait...");
	let currentIndex = currentChara.costumes.findIndex(c => c._id === cost);
	let {price, event} = currentChara.costumes[currentIndex];
	// if len === 0 inactive both
	console.time("array.at");
	let active = currentChara.costumes.length > 1;
	let bigger = currentChara.costumes.at(currentIndex + 1) ?? currentChara.costumes.at(0);
	// if (bigger > currentChara.costumes.length - 1) bigger = 0;
	let smaller = currentChara.costumes.at(currentIndex - 1) ?? currentChara.costumes.at(-1);
	// if (smaller < 0) smaller = currentChara.costumes.length - 1;currentIndex - 1;
	console.timeEnd("array.at")
	// const btnClasses = classNames("galleryBtn", active && "enabled");

	return (
		<main className="charaPreview">
			<div className="charaImage">
				{active ?
					<Link to={`/costumes/${currentChara._id}/${bigger?._id}`}
						className="galleryBtn enabled"
					>&lt;</Link>
					: <div className="galleryBtn">&lt;</div>
				}
				<img
					className="charaPic"
					srcSet={`https://raw.githubusercontent.com/KrisTheNewest/MayerBotPics/master/characters/char_109_fmout_1.png`}
					alt=""
				></img>
								{active ?
					<Link to={`/costumes/${currentChara._id}/${smaller?._id}`}
						className="galleryBtn enabled"
					>&lt;</Link>
					: <div className="galleryBtn">&lt;</div>
				}
			</div>
			<SkinData price={price} event={event}></SkinData>
		</main>
	);
}
Gallery.whyDidYouRender = {
	// logOnDifferentValues: true,
	customName: 'Gallery'
}
export default Gallery//, compare);
