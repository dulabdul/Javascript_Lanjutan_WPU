// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai')
//     }, 2000);
// });
// coba.then(() => console.log(coba))

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const time = 5000;
        if (time < 5000) {
            setTimeout(() => {
                resolve('selesai')
            }, time);
        } else {
            reject('Kelamaan!');
        }
    });
}

// const coba = cobaPromise();
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba))

async function cobaAsncy() {
    try {
        const coba = await cobaPromise();
        console.log(coba)
    } catch (err) {
        console.log(err);
    }

}

cobaAsncy();