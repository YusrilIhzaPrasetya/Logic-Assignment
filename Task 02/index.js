function countWord (word) {
	let space=0;
	
	for (let i = 0; i < word.length;i++) {
		word[i] === " "?space += 1 : " ";
	}
	return word.length ? space + 1 : 0;
}

console.log(countWord("ihza ihza ihza"))