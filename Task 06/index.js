function pecahCoin (uang) {
	
	let pecahanUang=[1000,500,200,100,50,20,10,5,1];
	let hasil = "";

	function cekUang(pecahan){
		while (uang >= pecahan) {
			hasil += pecahan+",";
			uang -= pecahan;
		}
	}

	for(i=0;i < pecahanUang.length;i++){
		cekUang(pecahanUang[i]);
	}
	return hasil;
}

console.log(pecahCoin(1762))