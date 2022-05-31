// SPREAD OPERATOR

// console.log(...mhs[1]);

// Menggabungkan 2 Array

// const mhs = ['Abdul', 'Linda', 'Dinda'];
// const dosen = ['Ade', 'Hendra', 'Wanda'];
// const orang = [...mhs, 'Fajar', ...dosen]
// const orang = mhs.concat(dosen)

// console.log(orang)

// MENGCOPY NILAI ARRAY

// const mhs = ['Abdul', 'Linda', 'Dinda'];
// // const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = 'Asep';
// console.log(mhs1);


// const liMhs = document.querySelectorAll('li')
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs)
// console.log(liMhs[0].textContent);


const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;