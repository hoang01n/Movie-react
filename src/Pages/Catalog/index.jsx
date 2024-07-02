import React from "react";
import {useParams} from "react-router-dom";
import {category as cate} from "../../api/tmdbApi";
import PageHeader from "../../components/Page-header";
import MovieGrid from "../../components/Movie-grid";
const Catalog = () => {
  const {category} = useParams();

  return (
    <div>
      <PageHeader>{category === cate.movie ? "Movie" : "TV Series"}</PageHeader>

      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category} />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
