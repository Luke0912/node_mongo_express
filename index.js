import fs from "fs";
import { createServer } from "http";
import url from "url";

const server = createServer((req, res) => {
  const { url: pathName } = req;
  console.log("url: ", pathName);

  switch (pathName) {
    case "/":
    case "/overview":
      res.end("This is OVERVIEW");
      break;
    case "/product":
      res.end("This is Product");
      break;
    default:
      res.writeHead(404,{
        "Content-type":"text/html",
        "my-own-header":"Hello- World"
      });
      res.end('<h1>Page not Found</h1>');
      break;
  }
});

server.listen(8000, () => {
  console.log("Listening to port 8000");
});
