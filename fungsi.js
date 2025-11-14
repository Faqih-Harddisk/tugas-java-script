
function sapa() {
    console.log("Halo! Selamat datang di fungsi.");
}

sapa();

// 2. Fungsi dengan parameter dan return value
function hitungLuasPersegiPanjang(panjang, lebar) {
    let luas = panjang * lebar;
    return luas; // Mengembalikan nilai luas
}

// Memanggil fungsi dan menyimpan hasilnya
let luasTanah = hitungLuasPersegiPanjang(10, 5); // panjang=10, lebar=5
console.log("Luas Persegi Panjang: " + luasTanah + " meter persegi.");

// 3. Fungsi Ekspresi (Function Expression)
const kaliDua = function(angka) {
    return angka * 2;
};

console.log("Hasil kali dua dari 7: " + kaliDua(7));