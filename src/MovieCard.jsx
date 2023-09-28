import React from "react";

const MovieCard = ({ movie }) => {
  const sourceLink = movie.SourceLink; // Replace "SourceLink" with the actual property name in your static data

  const handleCardClick = () => {
    if (sourceLink) {
      window.open(sourceLink, "_blank");
    }
  };

  return (
    <div
      className="movie"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <div>
        <p>{movie.Year}</p>
      </div>

      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
