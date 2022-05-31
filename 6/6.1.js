// Array
// const coba = ['satu', 'dua', 'tiga'];

// const [a, b, c] = coba;
// console.log(a);
// console.log(b);
// console.log(c);

// Object

// const mhs = {
//     nama: 'Abdul Rahman',
//     umur: 33,
//     email: 'dulabdol1331@gmail.com'
// };

// const {
//     nama,
//     umur,
//     email
// } = mhs;

// console.log('Perkenalkan nama saya ' + nama);

// Destructuring variable/Assigment

// Destructuring Array

// const perkenalan = ['halo', 'saya', 'nama', 'Abdul Rahman'];

// const [salam, satu, dua, nama] = perkenalan;

// console.log(satu + ' ' + nama);

// skipping items

// const perkenalan = ['halo', 'saya', 'nama', 'Abdul Rahman'];

// const [salam, , , nama] = perkenalan;

// console.log(salam);

//swap items

// let a = 1;
// let b = 2;

// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);

// Rest Parameter
// const [a, b, ...values] = [1, 2, 3, 4, 5];

// console.log(values);


// Destructuring Object

// Assigment tanpa deklarasi object

// ({
//     nama,
//     umur
// } = {
//     nama: 'Abdul Rahman',
//     umur: 33
// });

// console.log(nama);

// assignt ke variable baru

// Assigment tanpa deklarasi object

// ({
//     nama: n,
//     umur: u
// } = {
//     nama: 'Abdul Rahman',
//     umur: 33
// });

// console.log(u); 

// Memberikan default value

// const mhs = {
//     nama: 'Abdul Rahman',
//     umur: 33,
//     email: 'dulabdol1331@gmail.com'
// }

// const {
//     nama,
//     umur,
//     email = 'email@gmail.com'
// } = mhs;
// console.log(email)

// memberi nilai default + assign ke variable baru

// const mhs = {
//     nama: 'Abdul Rahman',
//     umur: 33,
//     email: 'dulabdol1331@gmail.com'
// }

// const {
//     nama: n,
//     umur: u,
//     email: e = 'email@gmail.com'
// } = mhs;
// console.log(n)

// Rest Parameter

// const mhs = {
//     nama: 'Abdul Rahman',
//     umur: 33,
//     email: 'dulabdol1331@gmail.com'
// }

// const {
//     nama,
//     ...value
// } = mhs;
// console.log(value)

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function


const mhs = {
    id: 123,
    nama: 'Abdul Rahman',
    umur: 33,
    email: 'dulabdol1331@gmail.com'
}

function getId({
    id
}) {
    return id;
}

console.log(getId(mhs))