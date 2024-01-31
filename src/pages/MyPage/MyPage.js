import React, { useState } from "react";
import styles from "./MyPage.module.scss";
function MyPage() {
  const [nickname, setNickname] = useState("");
  return (
    <div>
      MyPage
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className={styles.input}
          placeholder="아이디를 입력해 주세요"
        />
      </form>
    </div>
  );
}

export default MyPage;
