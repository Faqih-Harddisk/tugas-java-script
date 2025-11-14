
let orang = {
    namaDepan: "Joko",
    namaBelakang: "Susilo",
    usia: 30,
    pekerjaan: "Developer",


    sapaLengkap: function() {
        return "Halo, nama saya " + this.namaDepan + " " + this.namaBelakang + ".";
    },

    tambahUsia: function(tahun) {
        this.usia += tahun;
        console.log("Usia baru: " + this.usia);
    }
};

// Mengakses properti objek
console.log("Nama Lengkap: " + orang.namaDepan + " " + orang.namaBelakang);
console.log("Pekerjaan: " + orang["pekerjaan"]); // Cara lain mengakses properti

// Memanggil metode objek
console.log(orang.sapaLengkap());

// Mengubah properti objek
orang.pekerjaan = "Manajer Proyek";
console.log("Pekerjaan baru: " + orang.pekerjaan);

// Memanggil metode untuk mengubah properti
orang.tambahUsia(1);