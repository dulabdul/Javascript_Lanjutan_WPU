// Looping

// const mhs = [{
//         nama: 'Abdul Rahman',
//         email: 'dul.abdoel21@gmail.com'
//     },
//     {
//         nama: 'Rahman',
//         email: 'rahman@gmail.com'
//     },
//     {
//         nama: 'Asep',
//         email: 'asep@gmail.com'
//     }
// ]

// const el = `<div class="mhs">
// ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
// </ul>`).join('')}
// </div>`;


// Pengkondisian
// ternary

// const lagu = {
//     judul: 'Tetap Dalam Jiwa',
//     penyanyi: 'Isyana Sarasvati',
//     feat: 'Riyan Putra'
// }

// const el = `
// <div class="lagu">
// <ul>
// <li>${lagu.judul}</li>
// <li>${lagu.penyanyi} ${lagu.feat ? `(feat . ${lagu.feat})` : ''} </li>
// </ul>
// </div>
// `;

// NESTED
// HTML Fragments Bersarang

const mhs = {
    nama: 'Abdul Rahman',
    semester: 5,
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem informasi',
        'Perancangan Sistem Interaktif',
        'Perancangan Sistem Berorientasi Object'
    ]
};

function cetakMataKuliah(mataKuliah) {
    return `
    <ol>
    ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `
}

const el = `<div class="mahasiswa">
<p>${mhs.nama}</p>
<p>${mhs.semester}</p>
<h4>Mata Kuliah</h4>
${cetakMataKuliah(mhs.mataKuliah)}
</div>`
document.body.innerHTML = el;