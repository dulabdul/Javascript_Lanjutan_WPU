// FUNCTION EKSPRESI
// let ucapSalam = function (nama, waktu) {
//     return `Halo ${nama}, Selamat ${waktu} `
// };

// console.log(ucapSalam('Abdul', 'Sore'));

// ARROW FUNCTION

// let ucapSalam = (nama, waktu) => {
//     return `Halo ${nama}, Selamat ${waktu}`
// };

// console.log(ucapSalam('Abel', 'Pagi'));

// let mahasiswa = ['Abdul Rahman', 'Belinda Eka Mulyana', 'Zayech Savitri'];

// let jumlahHuruf = mahasiswa.map(nama => {
//     return nama.length;
// });

// console.log(jumlahHuruf)
// let jumlahHuruf = mahasiswa.map(nama => ({
//     nama,
//     jmlhHuruf: nama.length
// }));

// console.table(jumlahHuruf);

// Konsep This pada arrow function


// Constructor Function

// const Mahasiswa = function () {
//     this.nama = 'Abdul';
//     this.umur = 18;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama} dan umur saya ${this.umur}`);
//     }
// }

// const abdul = new Mahasiswa();


// Arrow Function

// const Mahasiswa = function () {
//     this.nama = 'Abdul';
//     this.umur = 18;
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama} dan umur saya ${this.umur}`);
//     }
// }

// const abdul = new Mahasiswa();

// Object Literal

// const mhs1 = {
//     nama: 'Abdul',
//     umur: 33,
//     sayHello: () => {
//         // console.log(`Halo, nama saya ${this.nama} dan umur saya ${this.umur}`);
//         console.log(this);
//     }
// }

// const Mahasiswa = function () {
//     this.nama = 'Abdul';
//     this.umur = 18;
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama} dan umur saya ${this.umur}`);
//     }
//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500)
// }

// const abdul = new Mahasiswa();


const box = document.querySelector('.box');

box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }
    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});