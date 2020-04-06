import Avatar from "components/Avatar";
import SettingButton from "components/SettingButton";
import { MenuItem } from "components/SettingButton/Menu";
import CardModel from "models/Card";
import React, { useState } from "react";
import className from "utils/class-name";
import style from "./card.module.css";
import Priority from "./Priority";

type Props = {
  card: CardModel.Info;
  onClick?: () => void;
};

export default function Card(props: Props) {
  const [moving, setMoving] = useState(false);

  function handleDragStart() {
    // change style AFTER drag start.
    setTimeout(setMoving, 0, true);
  }

  function handleDragEnd() {
    setMoving(false);
  }

  const movingClass = moving ? style.moving : "";

  const cardSettingMenu: Array<MenuItem> = [
    {
      label: "Update Card",
      onClick() {},
    },
  ];

  return (
    <div
      data-card-id={props.card.id}
      className={className(style.card, movingClass)}
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onClick={props.onClick}>
      <div className={style.header}>
        <p className={style.title}>{props.card.title}</p>
        <SettingButton type="dot-h" size="1rem" menuItems={cardSettingMenu} />
      </div>
      <p className={style.description}>{props.card.description ?? "None"}</p>
      <div className={style.footer}>
        <Avatar size="1rem" name={props.card.processor ?? "None"} gap="0.5rem" />
        <Priority priority={props.card.priority} />
      </div>
    </div>
  );
}
