// CALLBACK
// SYNCHRONOUS CALLBACK
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Input Your Name:');
//     callback(nama);
// }

// tampilkanPesan(nama => {
//     alert(`Halo ${nama}`)
// });

// const mhs = [{
//         "nama": "Abdul Rahman",
//         "telepon": "0897242424",
//         "email": "dul.abdoel21@gmail.com",
//         "prodi": "Teknik Informatika",
//         "idDosen": 1
//     },
//     {
//         "nama": "Belinda",
//         "telepon": "0812365441",
//         "email": "belinda@gmail.com",
//         "prodi": "Teknik Informatika",
//         "idDosen": 2
//     },
//     {
//         "nama": "Sandhika",
//         "telepon": "08135258211",
//         "email": "sandhika@gmail.com",
//         "prodi": "Teknik Informatika",
//         "idDosen": 3
//     }
// ];
// console.log('mulai')
// mhs.forEach(m => console.log(m.nama));
// console.log('selesai')

// Asynchronous Callback
// VANILLA JAVASCRIPT
// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }
//     xhr.open('get', url);
//     xhr.send();
// }
// console.log('mulai')
// getDataMahasiswa('mahasiswa.json', result => {
//     const mhs = JSON.parse(result);
//     mhs.forEach(m => {
//         console.log(m)
//     });
// }, () => {

// })
// console.log('selesai')
console.log('mulai')
$.ajax({
    url: 'mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama))
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai')