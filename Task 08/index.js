function bintang (jumlah) {
	let hasil = "";

 for (var i=0;i<=jumlah;i++){
        for (var j=i;j<=jumlah;j++){
            hasil += " ";
        }
        for (var k=0;k<=i;k++){
            hasil += "*";
        }
        for (var l=0;l<=i-1;l++){
            hasil += "*";
        }
        hasil += "\n";
    }
    return hasil;
}
console.log(bintang(10))