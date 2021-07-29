function nama (kata1) {

	let hasil = "";

for(i=0;i<kata1.length;i++){
	if ((i+1) % 2 == 0){
		hasil += kata1[i]
	}
	
	}
	return hasil
}


console.log(nama('yusril'));