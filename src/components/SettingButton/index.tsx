import React, { useRef, useState } from "react";
import { IoMdMore, IoMdSettings } from "react-icons/io";
import { MdMoreHoriz } from "react-icons/md";
import Menu, { MenuItem } from "./Menu";
import style from "./style.module.css";

type Props = {
  size?: string;
  color?: string;
  hoverColor?: string;
  type?: "dot-v" | "dot-h" | "gear";
  menuItems?: Array<MenuItem>;
};

function icon(type: Props["type"]) {
  switch (type) {
    case "dot-v":
      return <IoMdMore size="100%" />;
    case "dot-h":
      return <MdMoreHoriz size="100%" />;
    case "gear":
      return <IoMdSettings size="100%" />;
    default:
      return <></>;
  }
}

export default function SettingButton(props: Props) {
  const type = props.type ?? "gear";
  const btnRef = useRef<HTMLButtonElement>(null);
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    if (showMenu) {
      return;
    }
    document.addEventListener(
      "click",
      () => {
        setShowMenu(false);
      },
      { once: true }
    );
    setShowMenu(true);
  }

  return (
    <div className="position-relative">
      <button
        ref={btnRef}
        onMouseEnter={() => {
          const btn = btnRef.current;
          if (btn !== null) {
            btn.style.color = props.hoverColor ?? "";
          }
        }}
        onMouseLeave={() => {
          const btn = btnRef.current;
          if (btn !== null) {
            btn.style.color = props.color ?? "";
          }
        }}
        className={style.setting_btn}
        style={{
          color: props.color ?? "",
          width: props.size ?? "",
          height: props.size ?? "",
        }}
        onClick={toggleMenu}>
        {icon(type)}
      </button>
      {showMenu ? <Menu items={props.menuItems} /> : null}
    </div>
  );
}
