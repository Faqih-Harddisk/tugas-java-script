// Perulangan FOR
console.log("--- Perulangan FOR (1 sampai 5) ---");
for (let i = 1; i <= 5; i++) {
    console.log("Iterasi ke-" + i);
}

// Perulangan WHILE
console.log("--- Perulangan WHILE (menghitung mundur) ---");
let hitung = 3;
while (hitung > 0) {
    console.log("Hitungan: " + hitung);
    hitung--; 
}

// Perulangan DO...WHILE
console.log("--- Perulangan DO...WHILE (minimal 1x eksekusi) ---");
let j = 0;
do {
    console.log("Eksekusi ke-" + j);
    j++;
} while (j < 1);