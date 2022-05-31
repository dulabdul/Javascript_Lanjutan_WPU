// Fetch

// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function () {

//     const inputKeyword = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=8227dd59&s=' + inputKeyword.value)
//         .then(movies => movies.json())
//         .then(movies => {
//             const movie = movies.Search;
//             let cards = '';
//             movie.forEach(m => cards += showMovie(m))
//             const movieContainer = document.querySelector('.movie-container');
//             movieContainer.innerHTML = cards;

//             // ketika tombol detail di klik

//             const modalDetailButton = document.querySelectorAll('.modal-detail-button');
//             modalDetailButton.forEach(btn => {
//                 btn.addEventListener('click', function () {
//                     const imdbId = this.dataset.imdbid;
//                     fetch('http://www.omdbapi.com/?apikey=8227dd59&i=' + imdbId)
//                         .then(movies => movies.json())
//                         .then(m => {
//                             const movieDetail = showMovieDetail(m);
//                             const modalBody = document.querySelector('.modal-body');
//                             modalBody.innerHTML = movieDetail;
//                         })
//                 })
//             })
//         })
// });

const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
});

function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=8227dd59&s=' + keyword)
        .then(movies => movies.json())
        .then(movies => movies.Search)
}

function updateUI(movie) {
    let cards = '';
    movie.forEach(m => cards += showMovie(m))
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

// event binding

document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('modal-detail-button')) {
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMoviesDetail(imdbid);
        updateUIDetail(movieDetail);
    }
});

function getMoviesDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=8227dd59&i=' + imdbid)
        .then(movies => movies.json())
        .then(m => m);
};

function updateUIDetail(m) {
    const movieDetail = showMovieDetail(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}

function showMovie(m) {
    return `<div class="col-md-4 my-3">
    <div class="card">
        <img src="${m.Poster}" class="card-img-top" alt="${m.Title}">
        <div class="card-body">
            <h5 class="card-title">${m.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
            <a href="#" class="btn btn-primary modal-detail-button" data-imdbid="${m.imdbID}" data-bs-toggle="modal" data-bs-target="#exampleModal">Movie Details</a>
        </div>
    </div>
</div>`;
};

function showMovieDetail(m) {
    return `<div class="container-fluid">
    <div class="row">
            <div class="col-md-3">
                <img src="${m.Poster}" class="img-fluid" alt="${m.Title}">
            </div>
            <div class="col-md">
                <ul class="list-group">
                    <li class="list-group-item">
                        <h4>${m.Title} (${m.Year})</h4>
                    </li>
                    <li class="list-group-item"><b>Director :</b> ${m.Director}</li>
                    <li class="list-group-item"><b>Actors :</b> ${m.Actors}</li>
                    <li class="list-group-item"><b>Writer :</b> ${m.Writer}</li>
                    <li class="list-group-item"><b>Sinopsis :</b> ${m.Plot}</li>
                </ul>
            </div>
        </div>
    </div>`;
}