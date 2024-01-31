import React, { useState } from "react";
import styles from "./MyPage.module.scss";
import { useProfile } from "../../contexts/ProfileContext/profile.context";
import { useAuth } from "../../contexts/auth.context";

function MyPage() {
  const { isLoggedIn } = useAuth();
  const { nickname, setNickname } = useProfile();
  const [nowNickname, setNowNickName] = useState(nickname);

  const handleSave = () => {
    if (isLoggedIn) {
      setNickname(nowNickname);
      alert("닉네임이 수정되었습니다!");
    } else {
      alert("로그인을 먼저 해야합니다.");
    }
  };

  return (
    <div>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={nowNickname}
          onChange={(e) => setNowNickName(e.target.value)}
          className={styles.input}
          placeholder="닉네임을 입력해 주세요"
        />
        <button className={styles.button} onClick={handleSave}>
          닉네임 저장
        </button>
      </form>
    </div>
  );
}

export default MyPage;
