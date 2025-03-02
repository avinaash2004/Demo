const API_KEY = 'YOUR_TMDB_API_KEY'; // Replace with your TMDB API key
const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY;

document.addEventListener('DOMContentLoaded', () => {
    fetchMovies();
    
    document.getElementById('reviewForm').addEventListener('submit', function(event) {
        event.preventDefault();
        submitReview();
    });
});

// Fetch popular movies from TMDb API
async function fetchMovies() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        displayMovies(data.results);
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

// Display movies in the UI
function displayMovies(movies) {
    const reviewsList = document.getElementById('reviewsList');
    reviewsList.innerHTML = ''; // Clear previous reviews
    movies.forEach(movie => {
        const movieItem = document.createElement('li');
        movieItem.textContent = `${movie.title} (${movie.release_date})`;
        reviewsList.appendChild(movieItem);
    });
}

// Submit a review
function submitReview() {
    const movieTitle = document.getElementById('movieTitle').value;
    const reviewText = document.getElementById('reviewText').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;

    const reviewItem = document.createElement('li');
    reviewItem.className = 'review-item';
    reviewItem.innerHTML = `<strong>${movieTitle}</strong> <br> ${reviewText} <br> Rating: ${rating} stars`;
    
    document.getElementById('reviewsList').appendChild(reviewItem);
    
    // Clear the form
    document.getElementById('reviewForm').reset();
}