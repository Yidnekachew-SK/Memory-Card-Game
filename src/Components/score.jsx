function ScoreBoard ({score}) {
	return (
		<div>
			<p>`Score: ${score.currentScore}`</p>
			<p>`Best Score: ${score.bestScore}`</p>
		</div>
	)
}

function IncreaseScore (score, setScore) {
	setScore(prev => ({...prev, currentScore: score + 1}));
}

function SetBestScore (gameScore, scoreData, setScore) {
	if (gameScore > scoreData.bestScore) {
		SetScore(prev => ({...prev, bestScore: {gameScore}}));
	}
}

export { ScoreBoard, IncreaseScore, SetBestScore }