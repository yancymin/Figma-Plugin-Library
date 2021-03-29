import { useEffect, useState } from "react";
import { HeaderStyle } from "./HeaderStyle";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <HeaderStyle>
      <img src={logo} alt="logo" />
      <ul>
        <li>新旧</li>
        <li>下载量</li>
        <li>点赞数</li>
        <li>封面</li>
      </ul>
    </HeaderStyle>
  );
};

export default Header;
