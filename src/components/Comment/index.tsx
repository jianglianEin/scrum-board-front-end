import SettingButton from "components/SettingButton";
import React from "react";
import style from "./style.module.css";

type Props = {
  avatar?: string;
  name: string;
  commentTime: string;
  content: string;
};

const avatarPlaceholder = process.env.PUBLIC_URL + "/img/user.png";

export default function Comment(props: Props) {
  return (
    <div className={style.comment}>
      <div className="avatar_container">
        <img src={props.avatar ?? avatarPlaceholder} alt="" className={style.avatar} />
      </div>
      <div className={style.content_container}>
        <div className={style.info}>
          <span className={style.username}>{props.name}</span>
          <span className={style.dot}>·</span>
          <span className={style.time}>{props.commentTime}</span>
          <SettingButton type="dot-v" size="1.2rem" />
        </div>
        <p className={style.content}>{props.content}</p>
      </div>
    </div>
  );
}
