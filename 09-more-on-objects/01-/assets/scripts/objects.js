const addMovieBtn = document.getElementById('add-movie-btn');
const searchButton = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }

  movieList.innerHTML = '';

  const filteredMovies = !filter
    ? movies
    : movies.filter(movie => movie.info.title.includes(filter));

  filteredMovies.forEach(movie => {
    const movieEl = document.createElement('li');
    const { info, ...otherProps } = movie;
    let { getFormattedTitle } = movie;
    // getFormattedTitle = getFormattedTitle.bind(movie);
    // getFormattedTitle.call(movie)
    // const { title: movieTitle } = info;
    let text = `${getFormattedTitle.apply(movie)} -> `;
    console.log(otherProps);
    for (const key in info) {
      if (key !== 'title' && key !== '_title') {
        text += `${key} : ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    // movieEl.textContent = `${movie.info.title} - ${movie.info[extraName]}`;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (
    // title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    return;
  }

  const newMovie = {
    info: {
      set title(val) {
        if (val.trim() === '') {
          this._title = 'DEFAULT';
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      // title, // same as title: title when the key are the same and derived from a variable}
      [extraName]: extraValue
    },
    id: Math.random().toString(),
    getFormattedTitle() {
      console.log(this);
      return this.info.title.toUpperCase();
    }
  };
  newMovie.info.title = title;
  console.log(newMovie.info.title);
  movies.push(newMovie);
  renderMovies();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchButton.addEventListener('click', searchMovieHandler);
