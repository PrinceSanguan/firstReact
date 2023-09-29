import { useState, useEffect } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const staticData = {
  Search: [
    {
      Title: "One Piece Episode 1",
      Year: "2004",
      Type: "anime",
      Poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8c/One_Piece_-_Season_1_-_DVD_1_-_Japanese.jpg",
      SourceLink: "https://yugenanime.tv/watch/798/one-piece/1/",
    },
    {
      Title: "Batman v Superman: Dawn of Justice",
      Year: "2016",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      SourceLink:
        "https://www.bilibili.tv/en/video/2005812974?bstar_from=bstar-web.homepage.recommend.all",
    },
    {
      Title: "The Batman",
      Year: "2022",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg",
      SourceLink:
        "https://www.bilibili.tv/en/video/2040508241?bstar_from=bstar-web.homepage.recommend.all",
    },
    // Add more movie objects as needed
  ],
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    // Replace the API call with the static data
    setMovies(staticData.Search);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchMovies(searchTerm);
    }
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>PrinceSanguanNetflix</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.Poster} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Wala yung Movies Na Hinahanap mo!</h2>
        </div>
      )}
    </div>
  );
};

export default App;
