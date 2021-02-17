const findAllPermutations = string => {
	let permutations = []
	if (string.length < 2) {
		return [string]
	}

	for (let i = 0; i < string.length; i++) {
		let start = string[i]
		let remaining = string.slice(0, i) + string.slice(i + 1)
		let subPermutations = findAllPermutations(remaining)
		subPermutations.forEach(perm => {
			permutations.push(start + perm)
		})
	}
	return permutations
}
