const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

function renderMovies(){
    const movieList = document.getElementById('movie-list');

    if(movies.length === 0){
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }

    movieList.innerHTML = "";

    movies.forEach( (movie) => {
        const movieEl = document.createElement('li');
        movieEl.textContent = movie.info.title;
        movieList.append(movieEl);
    });
}

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if( title.trim()=== "" || extraName.trim() === "" || extraValue.trim() === ""){ //valid input check
        return;
    }

    const newMovie = {
        info: {
            title, //if key and value names are equal (derived dinamycally) from a variable of same name
            [extraName]: extraValue
        },
        id: Math.random() //quick solution to id generate. (not reliable)
    };

    movies.push(newMovie);
    renderMovies();
};


addMovieBtn.addEventListener('click', addMovieHandler);