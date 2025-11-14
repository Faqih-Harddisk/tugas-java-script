
let namaPengguna = prompt("Silakan masukkan nama Anda:");

let tahunLahir = prompt("Masukkan tahun lahir Anda:");
let tahunSaatIni = new Date().getFullYear();
let usia = tahunSaatIni - parseInt(tahunLahir); 
alert("Halo, " + namaPengguna + "! Usia Anda sekitar " + usia + " tahun.");

console.log("Input Nama: " + namaPengguna);
console.log("Perkiraan Usia: " + usia);