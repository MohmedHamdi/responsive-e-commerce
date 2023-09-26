let bodyCart =document.querySelector(".cart") ;
console.log(bodyCart);
let cardIcon=document.querySelector('.card-icon');
let closeCart=document.querySelector(".close-cart") ;
console.log(closeCart);
let cartProduct=document.querySelector(".cart-product");
console.log(cartProduct);
let Total=document.querySelector('.total');
console.log(Total);
let arrCart=[];
closeCart.onclick=function(){
   console.log("yes");
   bodyCart.setAttribute('id','hide')
}
cardIcon.onclick=function(){
bodyCart.removeAttribute('id');
}

let shopProduct =document.querySelector('.shop-product');
let product;
product=[
    {
        id:0,
        price:120,
        srcImage:"image/shose1.jpg",
        btn:"   <button class=\"btn btn-outline-light\"></button> ",
    },

    {
        id:1,
        price:150,
        srcImage:"image/spot5.jpg",
        btn:"   <button class=\"btn btn-outline-light\" ></button> ",
    },
    {
        id:2,
        price:190,
        srcImage:"image/white3.jpg",
        btn:"   <button class=\"btn btn-outline-light\"></button> ",
    },
    {
        id:2,
        price:110,
        srcImage:"image/bag3.jpg",
        btn:"   <button class=\"btn btn-outline-light\"></button> ",
    },
    {
        id:2,
        price:220,
        srcImage:"image/bag1.jpg",
        btn:"   <button class=\"btn btn-outline-light\"></button> ",
    },
    {
        id:2,
        price:270,
        srcImage:"image/white1.jpg",
        btn:"   <button class=\"btn btn-outline-light\"></button> ",
    },
    {
        id:2,
        price:222,
        srcImage:"image/spot4.jpg",
        btn:"   <button class=\"btn btn-outline-light\"></button> ",
    },
    {
        id:2,
        price:90,
        srcImage:"image/white4.png!sw800",
        btn:"   <button class=\"btn btn-outline-light\"></button> ",
    },
    {
        id:2,
        price:100,
        srcImage:"image/shose5.webp",
        btn:"   <button class=\"btn btn-outline-light\"></button> ",
    },
    {
        id:2,
        price:160,
        srcImage:"image/spot9.jpg",
        btn:"   <button class=\"btn btn-outline-light\"></button> ",
    },
  

];


    let allCard=document.querySelector('.All-card');
    console.log(allCard);
    let card2=``;
    for(let i=0;i<product.length;i++){
    card2+=`
        <div class="card-pro">
        <img src=${product[i].srcImage} alt="">
        <p class="price">${product[i].price} $</p>
        <button class="btn btn-outline-info" onclick="addToCart(${i})" >Add to cart</button>
       </div>
      
        `
       
    }
    
    allCard.innerHTML+=card2;
    let allProductCart=document.querySelector('.all-div-cart-product');
let add;
let suum=0;


function addToCart(i){
  
add={
   src1: product[i].srcImage,
   priceC:product[i].price,
  

},


arrCart.push(add);

displayElment();

}
//=========display elment in cart





let tb=``;
let temb=0;
function displayElment(){
   suum=0;
        for(let i=0;i<arrCart.length;i++)
        {
            tb+=`
            <div class="cart-product ">
            <img src=${arrCart[i].src1} alt="">
            <p class="col-2">${arrCart[i].priceC}</p>
            <h2 class="delet-product" onclick="deletFromCart(${i})" ><i class="fa-solid fa-trash" ></i></h2>
          </div>
            `
          suum+=arrCart[i].priceC;
        }
    
        allProductCart.innerHTML=tb;
        Total.innerHTML="Total : "+ suum +"  $";
        
        sum=0;
       

       
    
  tb=``;
   
}
    



//==========delet from cart========
let arr=[];
function deletFromCart(i){
    tb=``;
allProductCart.innerHTML=tb;

arrCart.splice(i,1);
displayElment();

}

