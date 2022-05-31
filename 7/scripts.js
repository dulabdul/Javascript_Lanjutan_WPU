// const mhs = ["Abdul", "Sandhika", "Linda"];

// PENGGUNAAN FOR

// for (let i = 0; i < mhs.length; i++) {
//   console.log(`Mahasiswa ${mhs[i]} nomor ke- ${i + 1}`);
// }

// PENGGUNAAN FOREACH
// mhs.forEach((m, i) => console.log(`Mahasiswa ${m} nomor ke- ${i + 1}`));

// FOR OF..
// ARRAY
// for (const [i, m] of mhs.entries()) {
//   console.log(`Ini adalah mahasiswa bernama ${m}, nomor absen ke- ${i + 1}`);
// }

// Looping STRING

// const nama = "Abdul";

// for (const n of nama) {
//   console.log(n);
// }

// NODELIST

// const liNama = document.querySelectorAll(".nama");

// liNama.forEach((n) => console.log(n.textContent));

// for (n of liNama) {
//   console.log(n.innerHTML);
// }

// ARGUMENTS

// function jumlahAngka() {
//   return [1, 2, 3, 4, 5].reduce((a, i) => a + i);
//   [1, 2, 3, 4, 5].forEach((a) => (jumlah += a));
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }

// console.log(jumlahAngka(1, 2, 3, 4, 5));

// FOR..in

const mhs = {
  nama: "Abdul",
  umur: 18,
  email: "abdoel@gmail.com",
};

for (m in mhs) {
  console.log(mhs[m]);
}
