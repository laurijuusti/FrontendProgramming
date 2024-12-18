export async function getMovies() {
  const response = await fetch('/api/movies');
  return response.json();
}

export async function addMovie(movie) {
  const response = await fetch('/api/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  });
  return response.json();
}

export async function searchMovies(name) {
  const response = await fetch(`/api/movies/search?name=${name}`);
  return response.json();
}
