function nodeDepths(root, level = -1) {
	if(!root) return 0
	level++
	return nodeDepths(root.left, level)
	+ nodeDepths(root.right, level)
	+ level
}   