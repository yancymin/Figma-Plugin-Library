import { useEffect, useState } from "react";
import { AppStyle } from "../src/style.js";
// import Header from "../src/components/Header";
import reset from "react-style-reset/string";
import { createGlobalStyle } from "styled-components";
import logo from "../src/assets/logo.svg";
import { HeaderStyle } from "../src/components/HeaderStyle";

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    top: 0 !important;
  }

  #google_translate_element {
    z-index: 100;
    position: fixed;
    right: 20px;
    top: 10px;

    select {
      background: #333;
      color: rgb(245 245 247 / 80%);
      width: 100px;
      border-radius: 3px;
      padding: 2px 0;

      &:focus {
        outline: none !important;
      }
    }
  }

  .goog-te-banner-frame, #goog-gt-tt {
 visibility: hidden !important;
  display: none;
  height: 0;
}

.skiptranslate {
  height: 27px;
  overflow: hidden;
}

.goog-text-highlight {
  box-shadow: none;
  background-color: unset;
}
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
  const [icon, setIcon] = useState([]);
  const [illustration, setIllustration] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [sort, setSort] = useState("installCount");
  const [thumbnail, setThumbnail] = useState(false);

  useEffect(() => {
    let allData = [];
    let allIcon = [];
    let allIllustration = [];
    let allMobile = [];
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        allData = [...data.plugins];
        allData.sort(compare(sort));
        setPlugins(allData);

        allData.map((t) => {
          if (t.name.includes("icon") || t.description.includes("icon")) {
            allIcon.push(t);
          }
        });
        setIcon(allIcon);

        allData.map((t) => {
          if (
            t.name.includes("llustration") ||
            t.description.includes("llustration")
          ) {
            allIllustration.push(t);
          }
        });
        setIllustration(allIllustration);

        allData.map((t) => {
          if (
            t.name.includes("mobile") ||
            t.description.includes("mobile") ||
            t.name.includes("ios") ||
            t.description.includes("android") ||
            t.name.includes("phone") ||
            t.description.includes("phone")
          ) {
            allMobile.push(t);
          }
        });
        setMobile(allMobile);
      });
  }, []);

  const inputValueHandle = () => {
    setInputValue(e.target.value);
    let data = []
  };

  const Header = () => {
    const likeSortHandle = () => {
      setSort("likeCount");
    };
    const downSortHandle = () => {
      setSort("installCount");
    };
    const thumbnailToggle = () => {
      setThumbnail(!thumbnail);
    };
    const iconSortHandle = () => {
      setPlugins(icon);
    };
    const illustrationSortHandle = () => {
      setPlugins(illustration);
    };
    const mobileSortHandle = () => {
      setPlugins(mobile);
    };
    return (
      <HeaderStyle>
        {/* <img src={logo} alt="logo" /> */}
        <ul>
          {/* <li onClick={timeSortHandle}>新旧</li> */}
          <li onClick={downSortHandle}>安装量</li>
          <li onClick={likeSortHandle}>点赞数</li>
          <li onClick={thumbnailToggle}>封面</li>
          <li onClick={iconSortHandle}>图标</li>
          <li onClick={illustrationSortHandle}>插画</li>
          <li onClick={mobileSortHandle}>移动端</li>
          <li onClick={mobileSortHandle}>颜色</li>
          <li onClick={mobileSortHandle}>文字</li>
          <li onClick={mobileSortHandle}>样机</li>
          <li onClick={mobileSortHandle}>组件</li>
          <li onClick={mobileSortHandle}>图像</li>
          <li onClick={mobileSortHandle}>代码</li>
          <li onClick={mobileSortHandle}>布局</li>
          <li onClick={mobileSortHandle}>中文</li>
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
            className="cover"
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
          <p>{subString(i.description.replace(/(<p>)/gi, "").replace(/(<\/p>)/gi, "").replace(/(<strong>)/gi, "").replace(/(<\/strong>)/gi, "").replace(/(<br>)/gi, "").replace(/(<\/br>)/gi, "").replace(/(<h2>)/gi, ""), 100)}...</p>
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
      <input
        onChange={(e) => {
          inputValueHandle(e);
        }}
      />
      <main className={thumbnail ? `thumbnailView` : null}>{pluginList}</main>
    </AppStyle>
  );
};

export default App;
