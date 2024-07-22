const socket = io();

socket.on("showProducts", (products) => {
  const productContainer = document.querySelector("#products");
  productContainer.innerHTML = "";
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = product.title
    const price = document.createElement("p");
    price.innerHTML = "Precio: "+product.price
    const description = document.createElement("p");
    description.innerHTML = "Descripcion: "+product.description
    const category = document.createElement("p");
    category.innerHTML = "Categoria: "+product.category
    const div = document.createElement("div")
    div.classList.add("producto");
    div.append(li,description,category,price);
    productContainer.appendChild(div);
  });
});
socket.on("error", (messaje) => {
  Swal.fire(messaje);
});

const addProduct = () => {
  const productToAdd = {
    title: String(document.querySelector("#addTitle").value),
    description: String(document.querySelector("#addDescription").value),
    code: String(document.querySelector("#addCode").value),
    price: Number(document.querySelector("#addPrice").value),
    stock: Number(document.querySelector("#addStock").value),
    category: String(document.querySelector("#addCategory").value),
  };
  socket.emit("addProductFromView", productToAdd);
};

const deleteProduct = () => {
  const productId = Number(document.querySelector("#deleteProduct").value);
  socket.emit("deleteProductFromView", productId);
};
