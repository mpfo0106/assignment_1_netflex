import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import styles from "./Header.module.scss";
import { useProfile } from "../../contexts/ProfileContext/profile.context";

function Header() {
  const { isLoggedIn, logOut } = useAuth();
  const { nickname } = useProfile();

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        NETFLEX
      </Link>

      <nav>
        <ul>
          {isLoggedIn ? (
            <div>
              <li>
                <button onClick={logOut}>로그아웃</button>
              </li>
              <p className={styles.headerNickname}>{nickname}</p>
            </div>
          ) : (
            <li>
              <Link to="/sign-in">로그인하기</Link>
            </li>
          )}
          <li>
            <Link to="/myPage">마이페이지</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
