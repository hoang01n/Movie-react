import React, {useContext, useEffect, useRef, useState} from "react";
import apiConfig from "../../api/apiConfig";
import tmdbApi, {category, movieType} from "../../api/tmdbApi";
import "./hero-slide.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {Autoplay} from "swiper/modules";

import Button, {OutlineButton} from "../Button";
import {useNavigate} from "react-router-dom";
import Modal, {ModalContent} from "../Modal";
import {Context} from "../../context/AppProvider";
// import {useHistory} from "react-router";
function HeroSlide() {
  const [movieItem, setMovieItem] = useState([]);
  const {setHidenLoading} = useContext(Context);

  useEffect(() => {
    const getMovie = async () => {
      setHidenLoading(false);
      const params = {page: 1};
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });

        setMovieItem(response.results.slice(1, 10));
        setHidenLoading(true);
        // console.log("data", response);
      } catch {
        console.log("err lõi");
      }
    };
    getMovie();
  }, []);

  return (
    <div className="hero-slide">
      <Swiper
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        modules={[Autoplay]}
        // modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {movieItem.map((item, i) => (
          <SwiperSlide key={i}>
            {/* <img src={apiConfig.originalImage(item.backdrop_path)} /> */}
            {({isActive}) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {movieItem.map((item, i) => (
        <TrailerModal key={i} item={item} />
      ))}
    </div>
  );
}
const HeroSlideItem = (props) => {
  // let history = useHistory();
  let navigate = useNavigate();
  const item = props.item;
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);
    if (!modal) {
      console.log(`Modal with id modal_${item.id} not found`);
      return;
    }

    const videos = await tmdbApi.getVideos(category.movie, item.id);

    if (videos.results.length > 0) {
      const videoSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
      modal
        .querySelector(".modal__content > iframe")
        .setAttribute("src", videoSrc);
    } else {
      modal.querySelector(".modal__content").innerHTML = "NO trailer";
    }
    modal.classList.toggle("active");
  };
  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{backgroundImage: `url(${background})`}}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => navigate("/movie/" + item.id)}>
              Watch now
            </Button>
            <OutlineButton onClick={setModalActive}>
              Watch trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

const TrailerModal = (props) => {
  const item = props.item;
  const iframeRef = useRef(null);

  const onclose = () => iframeRef.current.setAttribute("src", "");

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onclose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};

export default HeroSlide;
