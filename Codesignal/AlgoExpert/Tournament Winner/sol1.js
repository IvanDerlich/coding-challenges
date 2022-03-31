function tournamentWinner(competitions, results) {
	const winsPerTeam = {}
  competitions.forEach((match,index) => {
		if(results[index] === 1){						
			if(!winsPerTeam[match[0]]) {
				winsPerTeam[match[0]] = 1
			} else {
				winsPerTeam[match[0]]++
			}				
		}else{
			if(!winsPerTeam[match[1]]) {
				winsPerTeam[match[1]] = 1	
			} else {
				winsPerTeam[match[1]]++
			}	
		}
	})
	let maxWins = 0
	let winner = ''
	Object.keys(winsPerTeam).map((value, index) => {	
		if(maxWins < winsPerTeam[value]){
			maxWins = winsPerTeam[value]
			winner = value
		}
	})
  return winner;
}