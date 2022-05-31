// REST/SISA PARAMETER

// function myFunction() {
// return `a = ${a}, b = ${b}, sisanya ${myArgs}`;
// return myArgs;
// return [...arguments];
//     return Array.from(arguments);
// }

// console.log(myFunction(1, 2, 3, 4, 5))

// function jumlahkan(...angka) {

// let total = 0
// for (const a of angka) {
//     total += a;
// }


// return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5))

// ARRAY DESTRUCTURING

// const kelompok1 = ['Abdul', 'Linda', 'Marquez', 'Rossi', 'Abel'];
// const [ketua, wk, ...anggota] = kelompok1;

// console.log(ketua);

// OBJECT DESTRUCTURING

// const team = {
//     pm: 'Pak Chris',
//     itSupport1: 'Abdul',
//     itSupport2: 'Putra',
//     backEnd: 'Alex',
//     frontEnd: 'Jonny'
// }
// const {
//     pm,
//     ...myTeam
// } = team
// console.log(myTeam)

// FILTERING

function filterBy(type, ...values) {
    return values.filter(v => typeof v === type)
}

console.log(filterBy('string', 1, 3, 'Abdul', true, 10, false, 'Linda'))