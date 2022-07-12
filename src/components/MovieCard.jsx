import React from "react";

const MovieCard = ({ votes, movieName, poster, genre, director, staring }) => {
  return (
    <div className="flex flex-col border-2 p-2 space-y-3">
      <div className="flex flex-row space-x-2">
        <div className="flex flex-col justify-between items-center">
          <p className="font-medium">Votes</p>
          <p>{votes && votes.length}</p>
        </div>
        <div className="w-24">
          <img src={poster} alt={movieName} className="h-full rounded-sm" />
        </div>
        <div>
          <p className="font-medium text-base">{movieName}</p>
          <p>Genre: {genre}</p>
          <p>Director:{director}</p>
          <p>
            Staring:{" "}
            {staring.map((data) => (
              <span key={data}>{data}</span>
            ))}
          </p>
        </div>
      </div>
      <div>
        <button className="w-full p-2 bg-cyan-800 text-white rounded-md">
          Watch Later
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
