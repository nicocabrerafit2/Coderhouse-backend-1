class TicketManager {
  id = 1;
  #precioBaseDeGanancia = 1.15;
  constructor() {
    this.events = [];
  }

  getEvents() {
    return this.events;
  }
  addEvent(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    const newEvent = {
      id: this.id++,
      nombre,
      lugar,
      precio: precio * this.precioBaseDeGanancia,
      capacidad,
      fecha,
      participantes: [],
    };
    this.events.push(newEvent);
  }
  addUser(eventId, userId) {
    const existEventOrUserRegisted = this.events.some(
      (event) =>
        event.id === eventId &&
        !event.participantes.some((participante) => participante.id === userId)
    );
    if (!existEventOrUserRegisted) {
      console.log("Evento no existente o usuario ya registrado");
    }
    const eventIndex = this.events.findIndex((event) => event.id === eventId);
    this.events[eventIndex].participantes.push(userId);
  }

  ponerEventoEnGira(eventId, lugar, fecha) {
    const eventIndex = this.events.findIndex((event) => event.id === eventId);
  }
}

const tiketera = new TicketManager();

console.log(tiketera.addEvent());
console.log(tiketera.addUser(1, 1));
console.log(tiketera.getEvents());
