function nodeDepths(root) {
	let ref = {count: 0}
	count(root, ref, -1)
	console.log("-------")
	return ref['count']
}

const count = (root, ref, level) => {
	if(!root) return
	level++
	ref['count'] += level
	count(root.left ? root.left : null, ref, level)
	count(root.right ? root.right : null, ref, level)
}