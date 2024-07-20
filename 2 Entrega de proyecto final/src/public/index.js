const socket = io();

socket.on('newProduct', (products) => {
  const productContainer = document.querySelector('#newProduct');
  productContainer.innerHTML = '';
  products.forEach(product => {
      const li = document.createElement('li');
      li.innerText = product.title
      productContainer.appendChild(li);
  })
})
socket.on("error",(messaje)=>{
  Swal.fire(messaje.messaje)
})




/*
div.appendChild(id)
div.appendChild(title)
div.appendChild(description)
div.appendChild(price)
div.appendChild(code)
div.appendChild(stock)
div.appendChild(category)
*/

const addProduct = ()=>{
const title = String (document.querySelector("#addTitle").value)
const description = String (document.querySelector("#addDescription").value)
const code = String ( document.querySelector("#addCode").value)
const price = Number (document.querySelector("#addPrice").value)
const stock = Number (document.querySelector("#addStock").value)
const category = String (document.querySelector("#addCategory").value)

const productToAdd = {title,description,price,code,stock,category}

socket.emit("addProductFromView",productToAdd)

  document.querySelector("#addTitle").value = ""
  document.querySelector("#addDescription").value = ""
  document.querySelector("#addCode").value =""
  document.querySelector("#addPrice").value= ""
   document.querySelector("#addStock").value = ""
  document.querySelector("#addCategory").value= ""
}

const deleteProduct = ()=>{
  const id = Number (document.querySelector("#deleteProduct").value)
  socket.emit("deleteProductFromView",id)

  document.querySelector("#deleteProduct").value = ""
}