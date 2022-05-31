// Cara untuk membuat object pada javascript
// 1. Object Literal

// let mahasiswa = {
//     nama: 'Abdul',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Tadaimaaa!!!`);
//     }
// }

// 2. Function Declration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};

//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!!`);
//     }
//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain!!!`)
//     }

//     return mahasiswa;
// }
// let abdul = Mahasiswa('Abdul', 10);


// 3. Constructor Function
// function Mahasiswa(nama, energi) {

//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!!`);
//     }
//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain!!!`)
//     }
// }
// let abdul = new Mahasiswa('Abdul', 10);

// 4. Object.create

// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan!!`);
//     },
//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat Bermain!!!`);
//     },
//     tidur: function (time) {
//         this.energi += time * 2;
//         console.log(`Halo ${this.nama}, Selamat Tidurr!!`)
//     }
// };

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }
// let abdul = Mahasiswa('Abdul', 10);

// 5. Property

function Mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

}
Mahasiswa.prototype.makan = function (porsi) {
    this.energi += porsi;
    return `Halo ${this.nama} Selamat Makan!!`
}
Mahasiswa.prototype.tidur = function (jam) {
    this.energi -= jam;
    return `Halo ${this.nama} Selamat tidur!!`
}
Mahasiswa.prototype.main = function (time) {
    this.energi += time * 2;
    return `Halo ${this.nama} Selamat Bermain!`;
}

let abdul = new Mahasiswa('abdul', 10);
// TOKEN GITHUB
// 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