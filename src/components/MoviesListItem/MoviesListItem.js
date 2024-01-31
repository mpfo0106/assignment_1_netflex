import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import getTMDBImgSrc from "../../utils/getTMDBImgSrc";
import styles from "./MoviesListItem.module.scss";
import { useProfile } from "../../contexts/ProfileContext/profile.context";

function MoviesListItem({ movie }) {
  const { isLoggedIn } = useAuth();
  const { likedMovies, addLikedMovies } = useProfile();

  // const isLiked = likedMovies[movie.id];
  const isLiked = likedMovies.some((likedMovie) => likedMovie.id === movie.id);

  return (
    <Link to={`/movies/${movie.id}`} className={styles.wrapper}>
      <img src={getTMDBImgSrc(movie.backdrop_path)} alt={movie.title} />
      <h6>{movie.title}</h6>

      {isLoggedIn && (
        <button
          className={styles.button}
          onClick={() => {
            if (isLiked) {
              alert("좋아요를 취소했습니다");
              // removeLikedMovie(movie.id);
            } else {
              alert("좋아요를 눌렀습니다");
              // addLikedMovie(movie.id);
            }
            addLikedMovies(movie);
          }}
        >
          {isLiked ? "좋아요 취소" : " 좋아요"}
        </button>
      )}
    </Link>
  );
}

export default MoviesListItem;
