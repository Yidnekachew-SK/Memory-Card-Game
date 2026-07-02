import '../Styles/styles.css';
import Randomizer from './shuffle.jsx';
import { IncreaseScore, SetBestScore } from './score.jsx';

function Cards({data, cards, setCards, score, setScore, reset, checkWin }) {

	const HandleCardClick = (id) => {
		const card = cards.find(card => card.id === id);
		
		if (card.isClicked) {
			SetBestScore(score, setScore);
			reset();
		} else {
			IncreaseScore(setScore, reset, checkWin);
			setCards(prev => {
				const updatedCards = prev.map(card => 
					card.id === id ?
					{...card, isClicked: true} : card );

				return Randomizer(updatedCards);
			});
		}
	}

	return (
		<div className="cards" onClick={() => HandleCardClick(data.id)}>
			<img src={data.image} alt={`image of ${data.name}`}></img>
			<p>{data.name}</p>
		</div>
	)
}

export default Cards