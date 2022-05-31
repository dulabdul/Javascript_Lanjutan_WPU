// const kerjakanTugas = (matakuliah, selesai) => {
//     console.log(`Mulai mengerjakan tugas ${matakuliah} ...`)
//     selesai();
// }

// const selesai = () => {
//     alert('Selesai Mengerjakan Tugas!')
// }

// kerjakanTugas('Matematika', selesai);

// let total = 0,
//     count = 1;
// while (count <= 10) {
//     total += count;
//     count += 1;
// }

// console.log(total);

// Filter, Map & Reduce

// FOR

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]

// // Mencari Angka => 3
// const newAngka = [];

// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }

// }
// console.log(newAngka);

// Filter

// const newAngka = angka.filter(function (a) {
//     return a >= 3;
// });

//Arrow Function 

// const newAngka = angka.filter(a => a >= 3);

// console.log(newAngka)

// MAP

// const newAngka = angka.map(a => a * 2);

// console.log(newAngka);

// REDUCE
// Jumlahkan seluruh elemen pada array

// const newAngka = angka.reduce((accumulator, currentValue) =>
//     accumulator + currentValue, /* Bisa diisi nilai, tapi secara default bernilai 0*/);
// console.log(newAngka);

// Method Chaining
// cari angka > 5
// kalikan 3
// jumlahkan

const hasil = angka.filter(a => a > 5)
    .map(a => a * 3)
    .reduce((a, b) => a + b)

console.log(hasil);