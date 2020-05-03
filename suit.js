let main = true;
while ( main )
{// Menangkap pilihan player
let p = prompt("Pilih: gajah, semut, orang");

// Pilihan Komputer
let comp = Math.random();
if ( comp < 0.34) {
	comp = "gajah";
} else if (comp < 0.67) {
	comp = "semut";
} else {
	comp = "orang";
}
// Rules
let hasil = '';
if (p == comp) {
	hasil = "Seri";
} else if ( p == "orang") {
	hasil = (comp == "gajah") ? "Kalah" : "Menang";
} else if ( p == "gajah") {
	hasil = (comp == "semut") ? "Kalah" : "Menang";
} else if ( p == "semut") {
	hasil = (comp == "orang") ? "Kalah" : "Menang";
} else {
	hasil = "Error Input!";
}

// Tampilkan
alert('P: ' + p + ' vs Comp: ' + comp + '.\n Anda ' + hasil + '!');
main = confirm("Main lagi?");
}
