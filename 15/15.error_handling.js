const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
    try {
        const inputKeyword = document.querySelector('.input-keyword');
        const movies = await getMovies(inputKeyword.value);
        updateUI(movies);
    } catch (err) {
        updateUIError(err);
    }
});

function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=8227dd59&s=' + keyword)
        .then(movies => {
            if (!movies.ok) {
                throw new Error(movies.statusText);
            }
            return movies.json();
        })
        .then(movies => {
            if (movies.Response === 'False') {
                throw new Error(movies.Error);
            }
            return movies.Search;
        })
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

function updateUIError(err) {
    const movieError = getMovieError(err);
    const movieErrorContainer = document.querySelector('.movie-container');
    movieErrorContainer.innerHTML = movieError;
}

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

function getMovieError(err) {
    return `<div class="alert alert-danger" role="alert">
    ${err}
  </div>`;
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