import React from "react";
import {Link} from "react-router-dom";
import Button from "../Button";
import apiConfig from "../../api/apiConfig";
import {category} from "../../api/tmdbApi";
import "./movie-card.scss";

const MovieCard = (props) => {
  const item = props.item;

  const link = "/" + category[props.category] + "/" + item.id;
  //   const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
  return (
    <Link to={link}>
      <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
        <Button>
          <box-icon color="white" name="play"></box-icon>
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

export default MovieCard;
