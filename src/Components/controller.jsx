import { useState } from 'react';
import Cards from './cards.jsx';
import { ScoreBoard, IncreaseScore, SetBestScore } from './score.jsx';
import FetchData from './data-fetch.jsx';

function Controller () {
	const [score, setScore] = useState({currentScore: 0, bestScore: 0});
	const [cards, setCards] = useState([]);
	const [isClicked, setIsClicked] = useState(false);

	FetchData(setCards);

	return (
		<div className="entire-page">
			<ScoreBoard score={score} />
			<div className="card-container">
				{cards.map((data, index) => (
					<Cards key={`card-${index}`} image={data.image} name={data.name}/>
				))}
			</div>
		</div>
	)
}

export default Controller