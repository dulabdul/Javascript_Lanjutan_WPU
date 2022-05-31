// function init() {
//     // let nama = 'Abdul'; //local variable
//     return function tampilNama(nama) { // inner function(closure*) // anonymous function
//         console.log(nama); // akses ke parent variable
//     }
// }
// let panggilNama = init();

// panggilNama('Abdul');


// FUNCTION FACTORIES

// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, Semoga harimu happy!!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// console.dir(selamatMalam)



// PRIVATE METHOD

let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());