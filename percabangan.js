let nilai = 75;
let kkm = 70;

if (nilai >= kkm) {
    // Blok ini dieksekusi jika kondisi di atas benar
    console.log("Selamat, Anda LULUS!");
} else if (nilai >= 60 && nilai < kkm) {
    // Blok ini dieksekusi jika kondisi if salah, tapi kondisi else if benar
    console.log("Anda mendapat remedial.");
} else {
    // Blok ini dieksekusi jika semua kondisi di atas salah
    console.log("Maaf, Anda TIDAK LULUS.");
}

let hari = 3;
let namaHari;

switch (hari) {
    case 1:
        namaHari = "Senin";
        break;
    case 7:
        namaHari = "Minggu";
        break;
    default:
        namaHari = "Hari kerja atau akhir pekan lainnya";
}

console.log("Hari ke-" + hari + " adalah " + namaHari);