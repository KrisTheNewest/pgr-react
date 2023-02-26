import React, { useState } from 'react';
// import classNames from 'classnames';

import '../App.css';

function List(props) {
	// console.log(items);
	const {payload, setChara, setCost, currentChara } = props;
	const [openedDropDown, openDD] = useState(currentChara);

	return (
		<aside className="charaList prettyScroll">
			<ul className='charaListFlat'>
				{payload.map(chara =>
					<li key={chara.id}>
						<button className={`btnList ${openedDropDown === chara.id ? 'selected' : 'unselected'}`} onClick={() => openDD(chara.id)}>
							{chara.name}
						</button>
						<ul className={`charaListFlat ${openedDropDown === chara.id ? 'show' : 'hide'}`}>
							{chara.costumes.map(costume => 
								<li key={costume.id}>
									<button className='subListItem' onClick={() => {setChara(chara.id); setCost(costume.id)}}>
										{costume.name}
									</button>
								</li>
							)}
						</ul>
					</li>
				)}
			</ul>
		</aside>
	)
}

export default List;