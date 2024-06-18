import http from "http";
const server = http.createServer((req, res) => {
  return res.end("Serivor andando creado con http");
});

const PORT = 8080;

server.listen(PORT, () => {
  console.log("Servidor creado con http corriendo en http://localhost:" + PORT);
});
