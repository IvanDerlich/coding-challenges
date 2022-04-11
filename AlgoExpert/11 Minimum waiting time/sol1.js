function minimumWaitingTime(queries) {
	if (queries.length === 1) return 0
	queries.sort((a,b) => a-b)
	let sum = 0;
	const waitingTimes = queries.map((value, index) => {
		sum += value
		return sum
	})
	sum = 0
	const totalSums = waitingTimes.map((value, index) => {
		sum += value
		return sum
	})
  return totalSums[totalSums.length - 2]
}
