const addMovieBtn = document.getElementById('add-movie-btn');
const searchButton = document.getElementById('search-btn');

const movies = [];

const renderMovies = () => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }

  movieList.innerHTML = '';

  movies.forEach(movie => {
    const movieEl = document.createElement('li');

    movieEl.textContent = movie.info.title;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      title, // same as title: title when the key are the same and derived from a variable}
      [extraName]: extraValue
    },
    id: Math.random()
  };

  movies.push(newMovie);
  renderMovies();
};

addMovieBtn.addEventListener('click', addMovieHandler);
