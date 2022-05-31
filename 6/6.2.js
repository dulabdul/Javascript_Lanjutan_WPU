// Destructuring Function
// Array

// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// const [jumlah, kali] = kalkulasi(2, 3);

// console.log(jumlah)
// console.log(kali)

// const [jumlah, bagi, kali, kurang] = kalkulasi(2, 3);

// console.log(bagi);

// Object

// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// };

// const {
//     tambah,
//     kali,
//     kurang,
//     bagi
// } = kalkulasi(2, 3);

// console.log(kali)

// Destricturing Function Arguments

// const mhs1 = {
//     nama: 'Abdul Rahman',
//     umur: 18,
//     email: 'dulabdol1331@gmail.com'
// }

// function cetakMhs(mhs) {
//     return `Halo nama saya ${mhs .nama}, umur saya adalah ${mhs.umur}`;
// }

// console.log(cetakMhs(mhs1))

// Destructuring Function Object

const mhs1 = {
    nama: 'Abdul Rahman',
    umur: 18,
    email: 'dulabdol1331@gmail.com',
    nilai: {
        tugas: 80,
        uts: 70,
        uas: 90
    }
}

function cetakMhs({
    nama,
    umur,
    nilai: {
        tugas,
        uts,
        uas
    }
}) {
    return `Halo nama saya ${nama}, umur saya adalah ${umur} dan nilai UAS saya adalah ${uas}, uts : ${uts}, tugas : ${tugas}`;
}

console.log(cetakMhs(mhs1))