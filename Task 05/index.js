function palindrome (input) {
	
	let balik = "";
	for(let i = input.length -1;i>=0;i--){
		balik += input[i];
	}

	if(balik === input){
		return true;
	}else {
		return false;
	}
}

console.log(palindrome("kasur rusak"))