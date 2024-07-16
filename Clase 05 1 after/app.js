class TicketManager {
  id = 1;
  #precioBaseDeGanancia = 1.15;
  constructor() {
    this.events = [];
  }

  getEvents() {
    return this.events;
  }
  addEvent({ nombre, lugar, precio, capacidad = 50, fecha = new Date() }) {
    const newEvent = {
      id: this.id++,
      nombre,
      lugar,
      precio: precio * this.#precioBaseDeGanancia,
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
    const eventFinded = this.events.find((event) => event.id === eventId);
    const newEvent = {
      ...eventFinded,
      id: this.id++,
      lugar,
      fecha,
      participantes: [],
    };
    this.events.push(newEvent);
  }
}

const tiketera = new TicketManager();

// const eventPrueba = {
//   nombre: "arjona",
//   lugar: "buenos aires",
//   precio: 1000,
//   capacidad: 600,
//   fecha: "20204-04-29",
// };

// console.log(tiketera.addEvent(eventPrueba));
// console.log(tiketera.addUser(1, 1));
// console.log(tiketera.ponerEventoEnGira(1, "cordoba", "2028-01-21"));
// console.log(tiketera.getEvents());
