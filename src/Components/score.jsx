import '../Styles/styles.css';
function ScoreBoard ({score}) {
	return (
		<div className="scoreContainer">
			<p className="scores currentScore">{`Score: ${score.currentScore}`}</p>
			<p className="scores bestScore">{`Best Score: ${score.bestScore}`}</p>
		</div>
	)
}

function IncreaseScore (setScore, reset, checkWin) {
	setScore(prev => {
		const newScoreData = { ...prev, currentScore: prev.currentScore + 1 };
		checkWin(newScoreData, setScore);
		
		return {...prev, currentScore: prev.currentScore + 1}
	});
}

function SetBestScore (scoreData, setScore) {
	if (scoreData.currentScore > scoreData.bestScore) {
		setScore(prev => ({...prev, bestScore: scoreData.currentScore}));
	}
}

export { ScoreBoard, IncreaseScore, SetBestScore }