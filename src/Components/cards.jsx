import '../Styles/styles.css';
import { useEffect } from 'react';
import Randomizer from './shuffle.jsx';
import { IncreaseScore, SetBestScore } from './score.jsx';

function Cards({data, cards, setCards, score, setScore, reset}) {

	const HandleCardClick = (id) => {
		const card = cards.find(card => card.id === id);

		console.log('id ' + id);
		console.log(data)
		
		if (card.isClicked) {
			SetBestScore(score, setScore);
			console.log(score);
			reset();
		} else {
			IncreaseScore(setScore);
			setCards(prev => {
				const updatedCards = prev.map(card => 
					card.id === id ?
					{...card, isClicked: true} : card );

				return Randomizer(updatedCards);
			});
		}
	}
	useEffect(() => {
	  console.log("score updated:", score.currentScore);

	}, [score]);

	return (
		<div className="cards" onClick={() => HandleCardClick(data.id)}>
			<img src={data.image} alt={`image of ${data.name}`}></img>
			<p>{data.name}</p>
		</div>
	)
}

export default Cards