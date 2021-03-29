import { useEffect, useState } from "react";
import { AppStyle } from "../src/style.js";
// import Header from "../src/components/Header";
import reset from "react-style-reset/string";
import { createGlobalStyle } from "styled-components";
import logo from "../src/assets/logo.svg";
import { HeaderStyle } from "../src/components/HeaderStyle";

const GlobalStyles = createGlobalStyle`
  ${reset}
`;

const url = "https://yuanqing.github.io/figma-plugins-stats/";

function subString(str, n) {
  var r = "";
  var m;

  if (str.replace(r, "**").length > n) {
    m = Math.floor(n / 2);

    for (var i = m, l = str.length; i < l; i++) {
      if (str.substr(0, i).replace(r, "**").length >= n) {
        return str.substr(0, i);
      }
    }
  }

  return str;
}

function compare(p) {
  return function (m, n) {
    var a = m[p];
    var b = n[p];
    return b - a;
  };
}

const App = () => {
  const [plugins, setPlugins] = useState([]);
  const [sort, setSort] = useState("installCount");
  const [thumbnail, setThumbnail] = useState(false);

  useEffect(() => {
    let allData = [];
    console.log("1");
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        allData = [...data.plugins];
        allData.sort(compare(sort));
        setPlugins(allData);
      });
  }, []);

  const Header = () => {
    const likeSortHandle = () => {
      setSort("likeCount");
      console.log("likeCount");
    };
    const downSortHandle = () => {
      setSort("installCount");
      console.log("installCount");
    };
    const thumbnailToggle = () => {
      setThumbnail(!thumbnail);
      console.log("thumbnailToggle");
    };
    return (
      <HeaderStyle>
        <img src={logo} alt="logo" />
        <ul>
          {/* <li onClick={timeSortHandle}>新旧</li> */}
          <li onClick={downSortHandle}>安装量</li>
          <li onClick={likeSortHandle}>点赞数</li>
          <li onClick={thumbnailToggle}>封面</li>
        </ul>
      </HeaderStyle>
    );
  };

  const pluginList = plugins.map((i) => {
    return (
      <a
        key={Math.random()}
        href={`https://www.figma.com/community/plugin/${i.id}`}
        target="_blank"
        rel="noreferrer"
      >
        {thumbnail ? (
          <img
            src={`https://www.figma.com/community/plugin/${i.id}/thumbnail`}
            alt="thumbnail"
            loading="lazy"
          />
        ) : null}
        <section>
          <div className="name">
            <img
              src={`https://www.figma.com/community/plugin/${i.id}/icon`}
              alt="icon"
              className="icon"
            />
            <h3>{i.name} </h3>
          </div>
          <p>{subString(i.description, 40)}...</p>
          <span>{i.publisherName}</span>
          <span>{i.likeCount}</span>
          <span>Install Count: {i.installCount}</span>
        </section>
      </a>
    );
  });

  return (
    <AppStyle className={"App"}>
      <GlobalStyles />
      <Header />
      <main className={thumbnail ? `thumbnailView` : null}>{pluginList}</main>
    </AppStyle>
  );
};

export default App;
