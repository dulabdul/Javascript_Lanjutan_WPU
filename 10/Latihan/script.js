$('.search-button').on('click', function () {
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=8227dd59&s=' + $('.input-keyword').val(),
        success: result => {
            const movies = result.Search;
            let cards = '';
            movies.forEach(m => {
                cards += showMovie(m);
            });
            $('.movie-container').html(cards);

            // ketika tombol detail di-klik
            $('.modal-detail-button').on('click', function () {
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=8227dd59&i=' + $(this).data('imdbid'),
                    success: m => {

                        const movieDetail = showMovieDetail(m);
                        $('.modal-body').html(movieDetail);
                    },
                    error: (e) => {
                        console.log(e.responseText);
                    }

                })
            })
        },
        error: (e) => {
            console.log(e.responseText);
        }
    });

});


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