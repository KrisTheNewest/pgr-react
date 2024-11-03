import React from 'react';
// import pgrIcon from './icon.webp';
import '../App.css';
import "../Landing.css"
import { Link } from "react-router-dom";

function About() {
	return (
		<main className='m'>
			<section>
				<hgroup>
					<h1>Punishing Gray Raven coatings acquisition by Senus</h1>
					<p>See <Link className='a' to="/">the actual gallery</Link></p>
				</hgroup>
				<p>
					If you see any mistake or have a suggestion contact me. <br></br>
					Discord: Senus#0297      Reddit: u/Senus9 <br></br>
				</p>
				<p>
					Most of the info are taken from CN wiki. <br></br>
					<a className='a' href="https://wiki.biligame.com/zspms/%E9%A6%96%E9%A1%B5">https://wiki.biligame.com/zspms/%E9%A6%96%E9%A1%B5</a><br></br>
				</p>
				<p>
					Expect seasonal coatings event schedule to change from CN event schedule.
				</p>
				<img className='bird' src='https://upload.wikimedia.org/wikipedia/commons/3/35/R%C3%A9union_stonechat_%28Saxicola_tectes%29_male.jpg'
					alt="Réunion stonechat, a grey bird sitting on a branch of a tree"
				></img>
				<p>
					<br></br>
					I will only put the coating names that are in Global server.
				</p>
				<p>Most of the coatings that cost CB will cost RC during their debut patch. </p>
				<p>RC cost of CB coatingsjsx-a11y/img-redundant-alt is 2x the CB cost </p>

			</section>
			<aside>
				<h2>Legend</h2>
				<p>Date format: DD/MM/YY</p>
				<h3 className='bent'>background colours <br></br>AKA accessibility nightmare for everyone</h3>
				<ul className='blank'>
					<li>
						Costs coating blueprints
					</li>
					<li>
						Event coating
					</li>
					<li>
						Costs less than 100RC
					</li>
					<li>
						Costs more than 100RC
					</li>
					<li>
						Gacha coating
					</li>
				</ul>
				<h3 className='bent'>acronynms</h3>
				<ul className='blank'>
					<li>
						CB = Coating Blueprints
					</li>
					<li>
						RC = Rainbow Cards
					</li>
					<li>
						BC = Black Cards
					</li>
					<li>
						CN = Chinese server
					</li>
					<li>
						EN = Global server
					</li>
					<li>
						RE = Rerun
					</li>
					<li>
						JP = Japanese server
					</li>
				</ul>
			</aside>

		</main>
	)
}

export default About;