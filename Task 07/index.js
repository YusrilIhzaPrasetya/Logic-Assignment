function bintang (jumlah) {
	let hasil = "";
	for(let i = 0 ; i <= jumlah;i++){
		for(let j = 0; j <= i; j++){
			hasil += "*";
		}
		hasil += "\n";
	}
	return hasil;
}

console.log(bintang(10))
