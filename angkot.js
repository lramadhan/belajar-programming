// masukkan "undefined" sejumlah banyak kursi bila diperlukan.
let penumpang = [];

let tambahPenumpang = function(namaPenumpang, penumpang) {
	// Cek angkot kosong
	if ( penumpang.length == 0 ) {
		penumpang.push(namaPenumpang);
		return penumpang;
	} else {
		// Cek kursi dari awal
		for (let x = 0; x < penumpang.length; x++){
			// Cek apabila kursi kosong
			if (penumpang[x] == undefined) {
				return penumpang[x] = namaPenumpang;
			} else if (penumpang[x] == namaPenumpang) {
				console.log(namaPenumpang + " sudah ada di dalam.");
				return penumpang;
			} else if (x == (penumpang.length - 1)) {
				return penumpang.push(namaPenumpang);
			}
		}
	}
}

let hapusPenumpang = function(namaPenumpang, penumpang) {
	// Cek angkot kosong
	if ( penumpang.length == 0) {
		console.log("Angkot kosong, mau supir yang keluar?");
	} else {
		for (let x = 0; x < penumpang.length ; x++){
			if (penumpang[x] == namaPenumpang) {
				penumpang[x] = undefined;
				return penumpang;
			} else if ( x == (penumpang.length - 1)) {
				console.log(namaPenumpang + " tidak ada di dalam!")
				return penumpang;
			}
		}
	}
}
