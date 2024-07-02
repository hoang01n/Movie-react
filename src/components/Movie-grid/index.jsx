import React, {useCallback, useContext, useEffect, useState} from "react";
import "./Movie-grid.scss";
import MovieCard from "../../components/Movie-card";

import {useParams, useNavigate} from "react-router-dom";
import Button, {OutlineButton} from "../Button";

import Input from "../Input";
import tmdbApi, {category, movieType, tvType} from "../../api/tmdbApi";
import {Context} from "../../context/AppProvider";
const MovieGrid = (props) => {
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const {setHidenLoading} = useContext(Context);
  const {keyword} = useParams();
  useEffect(() => {
    const getList = async () => {
      let response = null;
      setHidenLoading(false);

      const params = {page: page, query: keyword};
      if (!keyword) {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, {params});
            break;
        }
      } else {
        response = await tmdbApi.Search(props.category, {params});
      }
      setItems(response.results);
      setTotalPage(response.total_pages);
      setHidenLoading(true);
    };
    getList();
  }, [props.category, keyword]);

  const loadMore = async () => {
    let response = null;

    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (props.category) {
        case category.movie:
          response = await tmdbApi.getMoviesList(movieType.upcoming, {
            params,
          });
          break;
        default:
          response = await tmdbApi.getTvList(tvType.popular, {params});
          break;
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      };
      response = await tmdbApi.Search(props.category, {params});
    }
    setItems([...items, ...response.results]);
    setPage(page + 1);
  };

  return (
    <>
      <div className="section mb-3">
        <MovieSearch category={props.category} keyword={keyword} />
      </div>
      <div className="movie-grid">
        {items.map((item, i) => (
          <MovieCard item={item} category={props.category} key={i} />
        ))}
      </div>
      {page < totalPage ? (
        <div className="movie-grid__loadmore">
          <OutlineButton className="small" onClick={loadMore}>
            Load more
          </OutlineButton>
        </div>
      ) : null}
    </>
  );
};

const MovieSearch = (props) => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");

  const gotoSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      navigate(`/${category[props.category]}/search/${keyword}`);
      console.log("nam", keyword);
    }
  }, [keyword, props.category, navigate]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        gotoSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);

    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [keyword, gotoSearch]);

  return (
    <div className="movie-search">
      <Input
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button className="small" onClick={gotoSearch}>
        search
      </Button>
    </div>
  );
};

export default MovieGrid;
