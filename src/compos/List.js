import React, { useState, memo, useEffect } from 'react';
import { Link, useParams, NavLink } from "react-router-dom";
import classNames from 'classnames';
import '../App.css';

function List(props) {
	const { chara, payload } = props;

	const [openedDropDown, openDD] = useState(chara);
	if (payload.length === 0) return ("Please wait...");

	return (
		<aside className="charaList noScroll">
			<ul className='charaListFlat'>
				{payload.map(_chara =>
					<li key={_chara._id}>
						<button className={`btnList ${openedDropDown === _chara._id ? 'selected' : 'unselected'}`} onClick={() => openDD(_chara._id)}>
							{_chara.charaName} - {_chara.frameName}
						</button>
						<ul className={`charaListFlat ${openedDropDown === _chara._id ? 'show' : 'hide'}`}>
							{_chara.costumes.map(_costume =>
								<li key={_costume._id}>
									<NavLink to={`/costumes/${_chara._id}/${_costume._id}`} end>
										{_costume.skinName}
									</NavLink>
								</li>
							)}
						</ul>
					</li>
				)}
			</ul>
		</aside>
	)
}
List.whyDidYouRender = {
	// logOnDifferentValues: true,
	customName: 'List'
}
// function moviePropsAreEqual(prevProps, nextProps) {
// 	console.log({prevProps, nextProps})
// 	return false;classNames(`subListItem`)
//  }
export default List;