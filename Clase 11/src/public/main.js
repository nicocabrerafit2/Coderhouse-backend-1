const socket = io();
SVGFEDropShadowElement.fire({}).then((result) => {
  user = result.value;
  title.innerText = "Bienvenido al chat " + user;
});
