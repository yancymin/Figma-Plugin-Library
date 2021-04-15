import { useCallback, useEffect, useState } from "react";
import { AppStyle, GlobalStyles, HeaderStyle } from "../src/style.js";
// import Switch from "../src/components/Switch";
import logo from "../src/assets/logo.svg";
import zh from "../src/data/zh";
import iconLike from "../src/assets/nav-icon/like.svg";
import iconInstall from "../src/assets/nav-icon/install.svg";
import iconAll from "../src/assets/nav-icon/all.svg";
import iconIcon from "../src/assets/nav-icon/icon.svg";
import iconIllus from "../src/assets/nav-icon/illustration.svg";
import iconMobile from "../src/assets/nav-icon/mobile.svg";
import iconColor from "../src/assets/nav-icon/color.svg";
import iconText from "../src/assets/nav-icon/text.svg";
import iconMockup from "../src/assets/nav-icon/mockup.svg";
import iconChart from "../src/assets/nav-icon/chart.svg";
import iconCn from "../src/assets/nav-icon/chinese.svg";
import iconComponent from "../src/assets/nav-icon/component.svg";
import iconImage from "../src/assets/nav-icon/image.svg";
import iconCode from "../src/assets/nav-icon/code.svg";
import iconLayout from "../src/assets/nav-icon/layout.svg";
import icon3d from "../src/assets/nav-icon/3d.svg";
import iconDs from "../src/assets/nav-icon/dsystem.svg";
import iconAnimation from "../src/assets/nav-icon/animation.svg";
import iconFcool from "../src/assets/nav-icon/fcool.svg";
import iconPrototype from "../src/assets/nav-icon/prototype.svg";
import iconHandoff from "../src/assets/nav-icon/handoff.svg";
import iconSvg from "../src/assets/nav-icon/svg.svg";
import iconGame from "../src/assets/nav-icon/game.svg";
import iconPick from "../src/assets/nav-icon/pick.svg";

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
  const [tagActive, setTagActive] = useState("全部");
  const [allPlugins, setAllPlugins] = useState([]);
  const [plugins, setPlugins] = useState([]);
  const [icon, setIcon] = useState([]);
  const [illustration, setIllustration] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [color, setColor] = useState([]);
  const [text, setText] = useState([]);
  const [mock, setMock] = useState([]);
  const [chart, setChart] = useState([]);
  const [chinese, setChinese] = useState([]);
  const [component, setComponent] = useState([]);
  const [image, setImage] = useState([]);
  const [code, setCode] = useState([]);
  const [layout, setLayout] = useState([]);
  const [threeD, setThreeD] = useState([]);
  const [dSystem, setDSystem] = useState([]);
  const [animation, setAnimation] = useState([]);
  const [cool, setCool] = useState([]);
  const [prototype, setPrototype] = useState([]);
  const [handoff, setHandoff] = useState([]);
  const [svg, setSvg] = useState([]);
  const [game, setGame] = useState([]);
  const [picked, setPicked] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [sort, setSort] = useState("installCount");
  const [thumbnail, setThumbnail] = useState(true);

  let tagData = [
    {
      name: "全部",
      plugins: allPlugins,
      tags: [],
      all: [],
      set: () => {},
      icon: iconAll,
    },
    {
      name: "编辑精选",
      plugins: picked,
      tags: [
        "Unsplash",
        "Autoflow",
        "Content Reel",
        "Remove BG",
        "Better Font Picker",
        "Chinese Font Picker",
        "Similayer",
        "Mockup",
        "SkewDat",
        "Iconify",
        "Chinese User Data Generator",
      ],
      all: [],
      set: setPicked,
      icon: iconPick,
    },
    {
      name: "图标",
      plugins: icon,
      tags: ["icon"],
      all: [],
      set: setIcon,
      icon: iconIcon,
    },
    {
      name: "插画",
      plugins: illustration,
      tags: ["llustration"],
      all: [],
      set: setIllustration,
      icon: iconIllus,
    },
    {
      name: "移动端",
      plugins: mobile,
      tags: ["mobile", "ios", "android", "phone"],
      all: [],
      set: setMobile,
      icon: iconMobile,
    },
    {
      name: "颜色",
      plugins: color,
      tags: ["color", "palette", "Gradient"],
      all: [],
      set: setColor,
      icon: iconColor,
    },
    {
      name: "文字",
      plugins: text,
      tags: ["text", "typography", "font", "title", "Title"],
      all: [],
      set: setText,
      icon: iconText,
    },
    {
      name: "样机",
      plugins: mock,
      tags: ["mockup"],
      all: [],
      set: setMock,
      icon: iconMockup,
    },
    {
      name: "图表",
      plugins: chart,
      tags: ["chart", "Visualization"],
      all: [],
      set: setChart,
      icon: iconChart,
    },
    {
      name: "中文",
      plugins: chinese,
      tags: ["Chinese", "China", "chinese", "china", "中", "是", "的"],
      all: [],
      set: setChinese,
      icon: iconCn,
    },
    {
      name: "组件",
      plugins: component,
      tags: ["component", "Component", "master", "datech"],
      all: [],
      set: setComponent,
      icon: iconComponent,
    },
    {
      name: "图像",
      plugins: image,
      tags: ["image", "Image", "pic", "Pixel"],
      all: [],
      set: setImage,
      icon: iconImage,
    },
    {
      name: "代码",
      plugins: code,
      tags: [
        "code",
        "Code",
        "react",
        "vue",
        "css",
        "js",
        "html",
        "HTML",
        "javascript",
      ],
      all: [],
      set: setCode,
      icon: iconCode,
    },
    {
      name: "布局",
      plugins: layout,
      tags: ["ayout", "grid"],
      all: [],
      set: setLayout,
      icon: iconLayout,
    },
    {
      name: "3D",
      plugins: threeD,
      tags: ["3d", "3D"],
      all: [],
      set: setThreeD,
      icon: icon3d,
    },
    {
      name: "设计系统",
      plugins: dSystem,
      tags: [
        "design system",
        "Design System",
        "Design system",
        "token",
        "Token",
        "Material",
      ],
      all: [],
      set: setDSystem,
      icon: iconDs,
    },
    {
      name: "动画",
      plugins: animation,
      tags: ["animation", "Animation", "gif", "animate"],
      all: [],
      set: setAnimation,
      icon: iconAnimation,
    },
    {
      name: "Figma.Cool",
      plugins: cool,
      tags: ["Figma.Cool"],
      all: [],
      set: setCool,
      icon: iconFcool,
    },
    {
      name: "原型",
      plugins: prototype,
      tags: [
        "prototype",
        "ireframe",
        "arrow",
        "Slide",
        "slide",
        "Principle",
        "Framer",
      ],
      all: [],
      set: setPrototype,
      icon: iconPrototype,
    },
    {
      name: "交付",
      plugins: handoff,
      tags: ["hand-off", "handoff", "Hand-off", "Handoff"],
      all: [],
      set: setHandoff,
      icon: iconHandoff,
    },
    {
      name: "SVG",
      plugins: svg,
      tags: ["svg", "SVG"],
      all: [],
      set: setSvg,
      icon: iconSvg,
    },
    {
      name: "游戏",
      plugins: game,
      tags: ["game", "Game"],
      all: [],
      set: setGame,
      icon: iconGame,
    },
  ];

  useEffect(() => {
    let allData = [];

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        allData = [...data.plugins];
        allData.sort(compare(sort));
        allData.forEach((i) => {
          zh.forEach((t) => {
            if (i.name === t.name) {
              i.description = t.zh;
            }
          });
        });
        setPlugins(allData);
        setAllPlugins(allData);
      });
  }, []);

  const collectTags = useCallback((t, tag, s) => {
    if (!tag.all.includes(t)) {
      if (tag.name === "编辑精选") {
        if (t.name === s) {
          tag.all.push(t);
        }
      } else if (
        t.name.includes(s) ||
        t.description.includes(s) ||
        t.publisherName.includes(s)
      ) {
        tag.all.push(t);
      }
    }
  });

  useEffect(() => {
    allPlugins.map((t) => {
      tagData.map((j) => {
        j.tags.forEach((s) => {
          collectTags(t, j, s);
        });
        j.set(j.all);
      });
    });
  }, [allPlugins]);

  const thumbnailToggle = () => {
    setThumbnail(!thumbnail);
  };
  const tagSortHandle = (tag, name) => {
    setPlugins(tag);
    setTagActive(name);
    window.scrollTo(0, 0);
  };

  const searchHandle = (e) => {
    setPlugins(
      allPlugins.filter((t) => {
        let text =
          t.name.toLocaleLowerCase() + t.description.toLocaleLowerCase();
        return text.includes(e.target.value);
      })
    );
    window.scrollTo(0, 0);
  };

  return (
    <AppStyle className={"App"}>
      <GlobalStyles />
      <HeaderStyle>
        <img
          src={logo}
          alt="logo"
          className="logo"
          onClick={() => window.open("https://figma.cool")}
        />
        <ul>
          <li onClick={thumbnailToggle}>封面</li>
          {tagData.map((t) => {
            return (
              <li
                key={Math.random()}
                onClick={(e) => tagSortHandle(t.plugins, e.target.innerText)}
                className={tagActive.includes(t.name) ? "tagActive" : null}
              >
                <img src={t.icon} alt={t.name} />
                {t.name}
                <i>{t.plugins.length}</i>
              </li>
            );
          })}
        </ul>
      </HeaderStyle>
      <input
        placeholder="搜索插件..."
        onChange={(e) => searchHandle(e)}
        autoFocus
      />
      <main className={thumbnail ? `thumbnailView` : null}>
        {plugins.map((i) => {
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
                <div className="card-top">
                  <div className="name">
                    <img
                      src={`https://www.figma.com/community/plugin/${i.id}/icon`}
                      alt="icon"
                      className="icon"
                    />
                    <h3>{i.name} </h3>
                  </div>
                  <p>
                    {subString(
                      i.description
                        .replace(/(<p>)/gi, "")
                        .replace(/(<\/p>)/gi, "")
                        .replace(/(<strong>)/gi, "")
                        .replace(/(<\/strong>)/gi, "")
                        .replace(/(<br>)/gi, "")
                        .replace(/(<\/br>)/gi, "")
                        .replace(/(<h2>)/gi, "")
                        .replace(/(<\/h2>)/gi, "")
                        .replace(/(<h1>)/gi, "")
                        .replace(/(<\/h1>)/gi, "")
                        .replace(/(<h3>)/gi, "")
                        .replace(/(<\/h3>)/gi, "")
                        .replace(/(<h4>)/gi, "")
                        .replace(/(<\/h4>)/gi, "")
                        .replace(/(<h5>)/gi, "")
                        .replace(/(<\/h5>)/gi, "")
                        .replace(/(<h6>)/gi, "")
                        .replace(/(<\/h6>)/gi, "")
                        .replace(/(<li>)/gi, "")
                        .replace(/(<a>)/gi, "")
                        .replace(/(<\/a>)/gi, "")
                        .replace(/(<span>)/gi, "")
                        .replace(/(<\/span>)/gi, "")
                        .replace(/(<\/li>)/gi, ""),
                      100
                    )}
                  </p>
                </div>
                <div className="card-info">
                  {/* <span>{i.publisherName}</span> */}
                  <div>
                    <span>
                      <img src={iconLike} alt="like" />
                      <i>{i.likeCount.toLocaleString()}</i>
                    </span>
                    <span>
                      <img src={iconInstall} alt="install" />
                      <i>{i.installCount.toLocaleString()}</i>
                    </span>
                  </div>
                </div>
              </section>
            </a>
          );
        })}
      </main>
    </AppStyle>
  );
};

export default App;
