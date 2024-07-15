const socket = io();

socket.emit(
  "mensaje",
  "Saludos soy un cliente",
  console.log("Cliente:Saludos soy un cliente")
);
socket.on("respuesta", (data) => {
  console.log(data);
});
socket.emit(
  "mensaje2",
  "Perfecto saluda a todos los clientes",
  console.log("Cliente:Perfecto saluda a todos los clientes")
);
socket.on("respuestaATodosLosConectados", (data) => {
  console.log(data);
});
