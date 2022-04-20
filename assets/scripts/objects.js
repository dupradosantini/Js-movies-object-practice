const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

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
    console.log(newMovie);
};


addMovieBtn.addEventListener('click', addMovieHandler);