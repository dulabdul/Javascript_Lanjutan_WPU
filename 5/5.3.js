// Tagged Templates

// const nama = "Abdul Rahman";
// const umur = 18;

// function coba(strings, ...values) {
//   //   let result = "";

//   //   strings.forEach((str, i) => {
//   //     result += `${str}${values[i] ? values[i] : ""}`;
//   //   });

//   //   return result;

//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ""}`,
//     ""
//   );
// }

// const str = coba`Halo nama saya ${nama}, saya berumur ${umur} tahun.`;

// console.log(str);

// Highlight

const nama = "Abdul Rahman";
const umur = 18;
const email = "dulabdol1331@gmail.com";

function coba(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str} <span class="hl"> ${values[i] || ""}</span>`,
    ""
  );
}

const str = coba`Halo nama saya ${nama}, saya berumur ${umur} tahun, alamat email : ${email}.`;

document.body.innerHTML = str;
