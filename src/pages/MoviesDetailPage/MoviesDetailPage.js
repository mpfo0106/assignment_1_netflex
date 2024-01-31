import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/api";
import getTMDBImgSrc from "../../utils/getTMDBImgSrc";
import styles from "./MoviesDetailPage.module.scss";
import { useAuth } from "../../contexts/auth.context";
import { useProfile } from "../../contexts/ProfileContext/profile.context";
function MoviesDetailPage() {
  const { isLoggedIn } = useAuth();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { likedMovies, addLikedMovies } = useProfile();

  const isLiked = likedMovies[movieId];

  useEffect(() => {
    api.movies.getMovie(movieId).then((movie) => setMovie(movie));
  }, [movieId]);

  if (movie === null) return null;

  return (
    <div className={styles.wrapper}>
      <section className={styles.mainInfo}>
        <img
          className={styles.posterImg}
          src={getTMDBImgSrc(movie.poster_path)}
          alt={movie.title}
        />

        <div className={styles.mainInfoRight}>
          <h1 className={styles.title}>{movie.title}</h1>
          <p className={styles.overview}>{movie.overview}</p>

          <ul className={styles.genres}>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <strong>{movie.vote_average}</strong>

          {isLoggedIn && (
            <button
              className={styles.button}
              onClick={() => addLikedMovies(movieId)}
            >
              {isLiked ? "좋아요 취소" : " 좋아요"}
            </button>
          )}
        </div>
      </section>

      <section>
        <img src={getTMDBImgSrc(movie.backdrop_path)} alt={movie.title} />
      </section>
    </div>
  );
}

export default MoviesDetailPage;
