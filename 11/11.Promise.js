// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=8227dd59&s=avengers',
//     success: m => {
//         console.log(m);
//     }
// })

// FETCH METHOD

// fetch('http://www.omdbapi.com/?apikey=8227dd59&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));

// PROMISE
// Object yang merepresentasikan keberhasilan/kegagalan sebuah event yang asynchronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fullfied / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch )

// CONTOH 1 PROMISE
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve('Janji telah di tepati!');
//     } else {
//         reject('Ingkar janji...');
//     }
// });

// janji1
//     .then(response => console.log('OK! :' + response))
//     .catch(response => console.log('NOT OK :' + response));

// CONTOH 2 PROMISE
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu')
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('Tidak ditepati setelah beberapa waktu')
//         }, 2000);
//     }
// });

// console.log('mulai');
// // console.log(janji2
// //     .then(() => console.log(janji2))
// //     .catch(() => console.log(janji2))
// // );

// janji2
//     .finally(() => console.log('Selesai menunggu'))
//     .then(response => console.log('OK! :' + response))
//     .catch(response => console.log('NOT OK :' + response));
// console.log('selesai')

// PROMISE all

const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            director: 'Abdul',
            actor: 'Abdul, Linda'
        }])
    }, 1000)
});


const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Jakarta',
            suhu: 30,
            kondisi: 'Hujan lebat'
        }])
    }, 500)
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
    // .then(response => console.log(response))
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });