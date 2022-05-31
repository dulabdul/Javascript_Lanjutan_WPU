// Latihan Filter, Map & Reduce

// Ambil semua elemen videonya
const videos = Array.from(document.querySelectorAll('[data-duration]'))

// pilih hanya yang "JAVASCRIPT LANJUTAN"
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

    // ambil durasi masing masing video
    .map(item => item.dataset.duration)

    // ubah durasi menjadi float, ubah menit menjadi detik
    .map(waktu => {
        // 11:18 => [11, 18] // split
        const parts = waktu.split(':')
            .map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })
    // jumlahkan semua detik
    .reduce((total, detik) => total + detik);

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di DOM

const totalDurasi = document.querySelector('.total-durasi');
const totalVideo = document.querySelector('.jumlah-video')
totalDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

const jmlhVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
totalVideo.textContent = `${jmlhVideo}`;

console.log(jam);