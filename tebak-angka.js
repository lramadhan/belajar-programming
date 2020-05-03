// Angka Komputer
let comp = 0;
comp = Math.floor((Math.random() * 10) + 1);;

// Perhitungan
for (let x = 3; x > 0; x--) {
	let p = parseInt(prompt("Tebak angka dari 1-10"));
	if (p === comp) {
		alert("Benar");
		x = 0;
	} else if (p > comp) {
		alert("Terlalu besar. \n Sisa kesempatan " + (x - 1));
	} else {
		alert("Terlalu kecil. \n Sisa kesempatan " + (x - 1));
	}
}

alert("Jawabannya adalah "+ comp);
