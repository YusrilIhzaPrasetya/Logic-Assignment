function hurufVokal (kata) {

	typeof kata !== "string" ? console.log("Masukan huruf"):"";

	let vokal = ["a","i","u","e","o"];
	let jumlahVokal = 0;

	function vokalLoop(katai){
		for(let i = 0;i<vokal.length;i++){
			if (vokal[i] === katai){
				return true;
			}
		}
			return false;
	}

	for(let i = 0; i < kata.length;i++){
		vokalLoop(kata[i])? jumlahVokal += 1 : "";
	}

	return jumlahVokal;
}

console.log(hurufVokal("hello"))	