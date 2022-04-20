const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

function renderMovies(filter = ''){
    const movieList = document.getElementById('movie-list');

    if(movies.length === 0){
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }

    movieList.innerHTML = "";
    const filteredMovies = !filter
      ? movies //if no filter is set, we use all movies.
      : movies.filter(movie => movie.info.title.includes(filter)); //if a filter is set, we use the filtered value.
    
    filteredMovies.forEach( (movie) => {
        const movieEl = document.createElement('li');
        const { info, ...otherProps } = movie;  //this pulls out every value for the key ''info'' in movie, and puts in this ''info'' const.
        //allowing us to swap movie.info.something everywhere to just, info.something. otherProps collect all the other fields.
        //if we coded info: movieInfo then this information can only be retrieved by the custom name movieInfo
        let text = movie.getFormattedTitle() + ' - ';
        for (const key in info){
            if(key !== 'title'){ //if key is not title, we know this is the property the user entered.
                text = text + `${key}: ${info[key]}`; //creating a string with the key, and the value associated with it (using [] notation.)
            }
        }
        movieEl.textContent = text;
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
        id: Math.random(), //quick solution to id generate. (not reliable)
        getFormattedTitle() {
            return this.info.title.toUpperCase();
        }
    };

    movies.push(newMovie);
    renderMovies();
};

function searchMovieHandler(){
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
}


addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);