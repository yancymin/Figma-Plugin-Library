import { useEffect, useState } from "react";
import { AppStyle } from "../src/style.js";

const url = "https://yuanqing.github.io/figma-plugins-stats/";

const App = () => {
  const [plugins, setPlugins] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPlugins([...data.plugins]);
      });
  }, []);

  function subString(str, n) {
    var r = /[^\x00-\xff]/g;
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
  plugins.sort(compare("installCount"));

  const pluginList = plugins.map((i) => {
    if (i.id)
      return (
        <a
          key={Math.random()}
          href={`https://www.figma.com/community/plugin/${i.id}`}
          title={i.description}
          target="_blank"
        >
          <img src={`https://www.figma.com/community/plugin/${i.id}/icon`} />
          <h3>{i.name} </h3>
          <p>{subString(i.description, 40)}...</p>
          <span>{i.publisherName}</span>
          <span>Install Count: {i.installCount}</span>
        </a>
      );
  });

  return <AppStyle className={"App"}>{pluginList}</AppStyle>;
};

export default App;
