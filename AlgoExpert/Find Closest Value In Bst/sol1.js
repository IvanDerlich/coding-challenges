function findClosestValueInBst(tree, target) {
	const array = buildArray(tree)
	let closest = array[0],
			closestDistance = Math.abs(target - closest);
	array.forEach(element=> {
		const distance = Math.abs(element - target)
		if (distance < closestDistance) {
			closestDistance = distance
			closest = element
		}
	})
  return closest;	
}
const buildArray = tree => {
	if(!tree)	return
	const subArray = [
		buildArray(tree.left),
		tree.value,
		buildArray(tree.right),
	].filter(element => element !== undefined);
	return subArray.flat()
}