const fs = require("fs");
const files = fs.readdirSync("../Images").filter(x => x.includes("png")).filter(x => !x.includes('@'));
const ex =
  "{\n" +
  files.map(x => `"${x.split(".png")[0]}": require("./${x}"),`).join("\n") +
  "}";
const res = "export default " + ex;
fs.writeFileSync("../Images/index.js", res);