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
      Title: "Yowamushi Pedal Episode 1",
      Year: "20019",
      Type: "anime",
      Poster:
        "https://animetourism88.com/application/files/3516/7827/0929/Web_YP_KV3.jpg",
      SourceLink:
        "https://www1.animixplayer.top/watch/yowamushi-pedal-episode-1-e9334",
    },
    {
      Title: "Naruto Episode 1",
      Year: "2008",
      Type: "anime",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
      SourceLink: "https://www7.gogoanime.me/naruto-episode-1",
    },
    {
      Title: "Dragon Ball Z Episode 1",
      Year: "1997",
      Type: "anime",
      Poster:
        "https://resizing.flixster.com/zZRHfRmW-YrKjgXyV6sWYRlN3YU=/206x305/v2/https://flxt.tmsimg.com/assets/p186420_b_v8_aq.jpg",
      SourceLink: "https://www.facebook.com/watch/?v=281939798884822",
    },
    {
      Title: "3 Idiots",
      Year: "2005",
      Type: "movie",
      Poster:
        "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
      SourceLink:
        "https://www.bilibili.tv/en/video/2006735646?bstar_from=bstar-web.homepage.recommend.all",
    },
    // Add more movie objects as needed
  ],
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = (title) => {
    // Filter movies based on the search term
    const filteredMovies = staticData.Search.filter((movie) =>
      movie.Title.toLowerCase().includes(title.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchMovies(searchTerm);
    }
  };

  useEffect(() => {
    // Initialize movies with all static data
    setMovies(staticData.Search);
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
