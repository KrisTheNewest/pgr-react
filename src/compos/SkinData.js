import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import '../App.css';

function SkinData(props) {
	const { price, event, } = props;
	// const currentData = 0;
	const [currentData, setData] = useState(0);
	const {cost} = useParams();
	let data = event.map((e, index, arr) => {
		let temp = {};
		temp.event = e;
		temp.price = price[index] ?? price[index - 1] ?? price[0];
		return temp;
	});
	useEffect(() => {
		setData(0);
	}, [cost])
	let currentInfo = data[currentData];
	// console.log(currentInfo);
	if (!currentInfo) return ("please wait...");
	return (
		<div className="skinData">
			<aside className="eventList">
				{data.map((dataItem, index) =>
					<button 
						className={classNames(`dataBtn `, currentData === index && "selectedData")} 
						key={index}
						onClick={() => setData(index)}
					>
						{index}
					</button>
				)}
			</aside>
			<div className="priceData">
				<table className="dataTable">
					<thead>
						<tr>
							<th>Price</th>
							<th>Currency</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{currentInfo.price.value}</td>
							<td>{currentInfo.price.currency}</td>
						</tr>
					</tbody>
				</table>
				<article className="comment prettyScroll">
					<p>
						{currentInfo.price.name}?
					</p>
				</article>
			</div>
			<div className="eventaData">
				<table className="dataTable">
					<thead>
						<tr>
							<th>Region</th>
							<th>Start</th>
							<th>Finish</th>
							<th>Rerun</th>
							<th>Discounted</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							{/* the datas are stupid */}
							<td>{currentInfo.event.region}</td>
							<td>{new Date(currentInfo.event.start).toDateString()}</td>
							<td>{new Date(currentInfo.event.finish).toDateString()}</td>
							<td>{currentInfo.event.rerun}</td>
							<td>{currentInfo.event.disc}</td>
						</tr>
					</tbody>
				</table>
				<article className="comment prettyScroll">
					<p>
					{currentInfo.event.name}?
					</p>
				</article>
			</div>
		</div>
	)
}

export default SkinData;