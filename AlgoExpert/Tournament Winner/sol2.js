function tournamentWinner(competitions, results) {
	const scores = {}
	let currentWinner = ''
  competitions.forEach((match,index) => {
		const winningTeam = results[index] === 1 
			? [match[0]][0]
			: [match[1]][0]
		if (!scores[winningTeam]) scores[winningTeam]=0
		scores[winningTeam]++		
		if(!scores[currentWinner] || scores[currentWinner] < scores[winningTeam])
			currentWinner = winningTeam
	})	
  return currentWinner;
}