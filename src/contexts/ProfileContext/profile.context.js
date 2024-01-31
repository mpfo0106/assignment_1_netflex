const { createContext, useState, useContext } = require("react");

const initialValue = {
  nickname: "",
  likedMovies: {}, //좋아요를 누른 영화 목록을 저장한다. 근데 중복되면 안됨으로 set 사용.
};

const ProfileContext = createContext(initialValue);

export function ProfileProvider({ children }) {
  const [nickname, setProfile] = useState(initialValue.nickname);
  const [likedMovies, setLikedMovies] = useState(initialValue.likedMovies);

  const setNickname = (newNickName) => {
    setProfile(newNickName);
  };

  const addLikedMovies = (movieId) => {
    setLikedMovies((prevLikedMovies) => {
      const updatedLikedMovies = { ...prevLikedMovies };
      if (updatedLikedMovies[movieId]) {
        delete updatedLikedMovies[movieId];
      } else {
        updatedLikedMovies[movieId] = true;
      }
      return updatedLikedMovies;
    });
  };

  const value = {
    nickname,
    setNickname,
    likedMovies,
    addLikedMovies,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext);

export default ProfileContext;
