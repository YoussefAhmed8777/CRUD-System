var productNameInput = document.getElementById('productName');
var productCategoryInput = document.getElementById('productCategory');
var productPriceInput = document.getElementById('productPrice');
var productDescInput = document.getElementById('productDesc');

var productsBox = [];

if (localStorage.getItem("allProducts")){
  productsBox = JSON.parse(localStorage.getItem("allProducts"));
  displayProducts();  
}

function addProduct(){

  var product = {
    name:productNameInput.value,
    category:productCategoryInput.value,
    price:productPriceInput.value,
    description:productDescInput.value,
  };
  productsBox.push(product);
  displayProducts();
  clearInput();
  localStorage.setItem("allProducts", JSON.stringify(productsBox));
}

function displayProducts(){
  var cartona="";
  for(var i=0; i<productsBox.length; i++) {
    cartona+= `
          <div class="col-md-3 rounded-3">
          <div class="content-img">
            <img src="./Imgs/2.jpg" class="w-100 text-center" alt="">
          </div>
          <div class="content p-3">
            <p>${productsBox[i].category}</p>
            <h4 class="p-0">${productsBox[i].name}</h4>
            <p>Price : ${productsBox[i].price} EGP</p>
            <p>${productsBox[i].description}</p>
            <button onclick="getProductDetails(${i})" type="button" class="btn btn-outline-success w-100 mb-2">Update</button>
            <button onclick="deleteProduct(${i})" type="button" class="btn btn-outline-danger w-100 mb-2">Delete</button>
          </div>
      </div>
    `
  }
  document.getElementById('demo').innerHTML=cartona;
}

          /* <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>  */



function clearInput(){
  productNameInput.value ="";
  productCategoryInput.value ="";
  productPriceInput.value ="";
  productDescInput.value ="";
}

function deleteProduct(index){
  productsBox.splice(index,1);
  displayProducts();
  localStorage.setItem("allProducts", JSON.stringify(productsBox));
}

var superIndex;

function getProductDetails(index){

  superIndex=index

  document.getElementById("btn-updt").style.display="block"
  document.getElementById("btn-add").style.display="none"

  productNameInput.value = productsBox[index].name
  productCategoryInput.value = productsBox[index].category
  productPriceInput.value = productsBox[index].price
  productDescInput.value = productsBox[index].description
}

function updateProduct(){
  
  productsBox[superIndex].name = productNameInput.value
  productsBox[superIndex].category = productCategoryInput.value
  productsBox[superIndex].price = productPriceInput.value 
  productsBox[superIndex].description =productDescInput.value 

  displayProducts();
  localStorage.setItem("allProducts", JSON.stringify(productsBox));
  clearInput();

  document.getElementById("btn-updt").style.display="none"
  document.getElementById("btn-add").style.display="block"
}