import { useEffect, useState } from "react";
import "./App.css";

import SearchBar from "./components/searchBar";
import MovieGrid from "./components/MovieGrid";

import { getPopularMovies, searchMovies } from "./services/tmdb";

function App() {
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    loadPopularMovies();
  }, []);

  const loadPopularMovies = async () => {
    try {
      setLoading(true);

      const data = await getPopularMovies();

      setMovies(data);
    } catch (err) {
      setError("Failed to load movies.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    try {
      setLoading(true);

      const data = await searchMovies(query);

      setMovies(data);
    } catch (err) {
      setError("Search failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">

      <h1>Netflix Lite</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <h2>Loading...</h2>}

      {error && <h2>{error}</h2>}

      {!loading && !error && (
        <MovieGrid movies={movies} />
      )}

    </div>
  );
}

export default App;