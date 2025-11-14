
let buah = ["Apel", "Mangga", "Jeruk", "Pisang"];

// Mengakses elemen Array (indeks dimulai dari 0)
console.log("Buah pertama: " + buah[0]);
console.log("Buah ketiga: " + buah[2]); 

// Panjang Array
console.log("Jumlah buah: " + buah.length); 

// Menambah elemen ke akhir Array
buah.push("Anggur");
console.log("Setelah ditambah: " + buah);

// Menghapus elemen terakhir
let buahDihapus = buah.pop();
console.log("Buah yang dihapus: " + buahDihapus);
console.log("Array sekarang: " + buah);

// Melakukan iterasi/perulangan pada Array
console.log("--- Daftar Buah ---");
for (let i = 0; i < buah.length; i++) {
    console.log((i + 1) + ". " + buah[i]);
}