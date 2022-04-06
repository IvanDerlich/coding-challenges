function branchSums(root) {
	console.log(root.value)
	console.log("---")
	if (root === null ) return
	if (root.left === null && root.right === null)
		return root.value
	return [
		root.left ? branchSums(root.left) : undefined,
		root.right ? branchSums(root.right) : undefined
	]
		.flat()
 		.filter(val => val)
 		.map(value => value + root.value)
}