const { createContext, useState, useContext } = require("react");

const initialValue = {
  nickname: "",
  likedMovies: false,
};

const ProfileContext = createContext(initialValue);

export function ProfileProvider({ children }) {
  const [nickname, setProfile] = useState(initialValue.nickname);
  const [likedMovies, setLikedMovies] = useState(initialValue.likedMovies);

  const setNickname = (newNickName) => {
    setProfile(newNickName);
  };

  const setLikeMovies = () => {
    setLikedMovies(true);
  };

  const value = {
    nickname,
    setNickname,
    likedMovies,
    setLikeMovies,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export const useProfile = () => useContext(ProfileContext);

export default ProfileContext;
