import { useEffect, useState } from 'react';

function MovieList() {
    const [movies, set_movies] = useState([
        { title: 'Inception', genre: 'Science Fiction', release_year: 2010 },
        { title: 'The Shawshank Redemption', genre: 'Drama', release_year: 1994 },
        { title: 'The Dark Knight', genre: 'Action', release_year: 2008 },
    ]);
    
    const [selected_genre, set_selected_genre] = useState('All Genres');
    const [genres, set_genres] = useState([]);
    
    useEffect(() => {
        const unique_genres = Array.from(new Set(movies.map((movie) => movie.genre)));
        set_genres([...unique_genres, 'All Genres']);
    }, [movies]);
    
    const handle_genre_change = (event) => {
        set_selected_genre(event.target.value);
    };
    
    const filtered_movies =
        selected_genre === 'All Genres'
            ? movies
            : movies.filter((movie) => movie.genre === selected_genre);
    
    return (
        <div className="movie-list-container">
            <h1>Movie List</h1>
            <div className="filter-container">
                <select id="genre-select" value={selected_genre} onChange={handle_genre_change}>
                {genres.map((genre) => (
                    <option key={genre} value={genre}>
                    {genre}
                    </option>
                ))}
                </select>
            </div>
            <div className="movie-list">
                {filtered_movies.map((movie) => (
                <div key={movie.title} className="movie-item" onClick={() => alert(`You clicked on "${movie.title}"`)}>
                    <h3>{movie.title}</h3>
                    <p>{movie.genre}</p>
                    <p>Released: {movie.release_year}</p>
                </div>
                ))}
            </div>
        </div>
    );
}

export default MovieList