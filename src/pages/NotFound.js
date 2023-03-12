import React from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';

function Notfound() {
	const navigate = useNavigate();
	return (
		<main>
			<div style={{display: "flex"}}>
				<hgroup>
					<h1>404: Not Found</h1>
					<p>Did you lost your way?</p>
				</hgroup>
				<img width="200px" srcSet='https://cdn.discordapp.com/attachments/411849480455979008/1081972887939977367/15.png' alt='Liv from pgr a white haired girl with pink eyes sobbing while looking at documents'></img>
			</div>
			<button className='backBtn' onClick={() => navigate(-1)}>Go back...</button>
		</main>
	)
}

export default Notfound;