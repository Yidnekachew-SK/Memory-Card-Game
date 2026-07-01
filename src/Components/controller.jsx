import '../Styles/styles.css';
import { useState, useEffect } from 'react';
import Cards from './cards.jsx';
import { ScoreBoard, IncreaseScore, SetBestScore } from './score.jsx';
import FetchData from './data-fetch.jsx';
import Randomizer from './shuffle.jsx';

function Controller () {
	const [score, setScore] = useState({currentScore: 0, bestScore: 0});
	const [cards, setCards] = useState([]);
	const [defaultCards, setDefaultCards] = useState([]);
	
	useEffect(() => {
		FetchData(setCards, setDefaultCards);   
	}, [])

	const ResetCards = () => {
		setScore(prev => ({...prev, currentScore: 0}));
		setCards(defaultCards)
	}

	return (
		<div className="entirePage">
			<h2 className="title">Memory Card Game</h2>
			<p className="rule">Do not click the same card twice!</p>
			<ScoreBoard score={score} />
			<div className="cardContainer">
				{cards.map((data, index) => (
					<Cards key={data.id} data={data} cards={cards} setCards={setCards} 
						score={score} setScore={setScore} reset={ResetCards}/>
				))}
			</div>
			<footer>
				<a href="https://github.com/Yidnekachew-SK/Memory-Card-Game">
					<p>Yidnekachew-SK</p>
					<img src="./src/assets/github.svg"></img>
				</a>
			</footer>
		</div>
	)
}

export default Controller