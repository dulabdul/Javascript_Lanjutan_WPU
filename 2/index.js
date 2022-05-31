// console.log(test);
// var test = 'ini testing';

// Creation Phase pada Global Context
// nama var akan didefinisikan sebagai undefined terlebih dahulu
// nama function ketika di console.log akan muncul function itu sendiri
// disebut juga sebagai konsep Hoisting
// window = global object
// this = window

// Execution Phase

// var nama = 'abdul';
// var umur = 18;

// console.log(sayHello())

// function sayHello() {
//     return `Hallo nama saya ${nama}, umur saya ${umur} tahun`;

// }

// Function membuat Local Excution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = 'Abdul Rahman';
// var username = '@dul.abdul21';

// function cetakURL() {
//     var instragamURL = 'https://instragam.com/';
//     return instragamURL + username;
// }

// console.log(cetakURL('@belindaekam'));

// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini B');

//         function c() {
//             console.log('ini C');
//         }
//         c();
//     }
//     b();
// }
// a();

function satu() {
    var nama = 'Abdul';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

function tiga() {
    var nama = 'linda';
    console.log(nama);
}
console.log(nama);
var nama = 'abel';
satu();
dua('Doddy');
tiga();
console.log(nama);