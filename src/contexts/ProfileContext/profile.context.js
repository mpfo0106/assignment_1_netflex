const { createContext, useState, useContext } = require("react");
//객체로 likedMovies 넣기
const initialValue = {
  nickname: "",
  likedMovies: [], //좋아요를 누른 영화 목록을 저장한다. movieId 들 저장.
};

const ProfileContext = createContext(initialValue);

export function ProfileProvider({ children }) {
  const [nickname, setProfile] = useState(initialValue.nickname);
  const [likedMovies, setLikedMovies] = useState(initialValue.likedMovies);

  const setNickname = (newNickName) => {
    setProfile(newNickName);
  };

  // const addLikedMovies = (movieId) => {
  //   setLikedMovies((prevLikedMovies) => {
  //     if (prevLikedMovies.includes(movieId)) {
  //       return prevLikedMovies.filter((id) => id !== movieId);
  //     } else {
  //       return [...prevLikedMovies, movieId];
  //     }
  //   });
  // };
  const addLikedMovies = (movie) => {
    setLikedMovies((prevLikedMovies) => {
      const isAlreadyLiked = prevLikedMovies.some(
        (likedMovie) => likedMovie.id === movie.id
      );
      if (isAlreadyLiked) {
        return prevLikedMovies.filter(
          (likedMovie) => likedMovie.id !== movie.id
        ); //like 안된것들만. 좋아요한건 delete
      } else {
        return [...prevLikedMovies, movie];
      }
    });
  };
  // const addLikedMovies = (movieId) => {
  //   setLikedMovies((prevLikedMovies) => {
  //     const updatedLikedMovies = { ...prevLikedMovies };
  //     if (updatedLikedMovies[movieId]) {
  //       delete updatedLikedMovies[movieId];
  //     } else {
  //       updatedLikedMovies[movieId] = true;
  //     }
  //     return updatedLikedMovies;
  //   });
  // };

  // const addLikedMovie = (movieId) => {
  //   setLikedMovies((prevLikedMovies) => {
  //     return [...prevLikedMovies, movieId];
  //   });
  // };

  // const removeLikedMovie = (movieId) => {
  //   setLikedMovies((prevLikedMovies) => {
  //     return prevLikedMovies.filter((id) => id !== movieId);
  //   });
  // };

  const value = {
    nickname,
    setNickname,
    likedMovies,
    addLikedMovies,
    // addLikedMovie,
    // removeLikedMovie,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext);

export default ProfileContext;
