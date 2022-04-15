import http from "http";
import url from "url";

const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;

  const num1 = parseInt(query.num1);
  const num2 = parseInt(query.num2);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`${num1 + num2}`);
});
server.listen(8000, () => {
  console.log("Server Start http://localhost:8000");
});
