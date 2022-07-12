import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movieList, setMovieList] = useState();
  const navigate = useNavigate();

  const handleDeleteSession = () => {
    localStorage.removeItem("loginCredentials");
    navigate("/register");
  };

  const fetchDetails = useCallback(async () => {
    const params = new URLSearchParams({
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting",
    }).toString();
    const { data } = await axios.post(
      "https://hoblist.com/api/movieList",
      params
    );
    setMovieList(data);
  }, []);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return (
    <div className="grid grid-cols-3 gap-5 m-10">
      {movieList
        ? movieList.result.map((movie) => (
            <MovieCard
              key={movie._id}
              director={movie.director[0]}
              genre={movie.genre}
              movieName={movie.title}
              poster={movie.poster}
              staring={movie.stars}
              votes={movie?.upVoted}
            />
          ))
        : "No Movies"}

      <Button text="Logout" type="button" onClick={handleDeleteSession} />
    </div>
  );
};

export default Home;
