 var img1=document.getElementById("flower1")
 var img2=document.getElementById("flower2")
 var img3=document.getElementById("flower3")
 var img4=document.getElementById("flower4")
 var img5=document.getElementById("flower5")
 var img6=document.getElementById("flower6")
item1.addEventListener("dragover",(e)=> e.preventDefault())
item2.addEventListener("dragover",(e)=> e.preventDefault())
item3.addEventListener("dragover",(e)=> e.preventDefault())
item4.addEventListener("dragover",(e)=> e.preventDefault())
item5.addEventListener("dragover",(e)=> e.preventDefault())
item6.addEventListener("dragover",(e)=> e.preventDefault())

item1.addEventListener("drop" ,() =>{
    
    item1.appendChild(flower1)
})
item2.addEventListener("drop" ,() =>{
    
    item2.appendChild(flower2)
})
item3.addEventListener("drop" ,() =>{
    
    item3.appendChild(flower3)
})
item4.addEventListener("drop" ,() =>{
    
    item4.appendChild(flower4)
})
item5.addEventListener("drop" ,() =>{
    
    item5.appendChild(flower5)
})
item6.addEventListener("drop" ,() =>{
    
    item6.appendChild(flower6)
})





let selectedFlower = null


flower1.addEventListener("touchend", () => { selectedFlower = flower1 })
flower2.addEventListener("touchend", () => { selectedFlower = flower2 })
flower3.addEventListener("touchend", () => { selectedFlower = flower3 })
flower4.addEventListener("touchend", () => { selectedFlower = flower4 })
flower5.addEventListener("touchend", () => { selectedFlower = flower5 })
flower6.addEventListener("touchend", () => { selectedFlower = flower6 })


item1.addEventListener("touchend", () => {
    if(selectedFlower) item1.appendChild(selectedFlower)
})
item2.addEventListener("touchend", () => {
    if(selectedFlower) item2.appendChild(selectedFlower)
})
item3.addEventListener("touchend", () => {
    if(selectedFlower) item3.appendChild(selectedFlower)
})
item4.addEventListener("touchend", () => {
    if(selectedFlower) item4.appendChild(selectedFlower)
})
item5.addEventListener("touchend", () => {
    if(selectedFlower) item5.appendChild(selectedFlower)
})
item6.addEventListener("touchend", () => {
    if(selectedFlower) item6.appendChild(selectedFlower)
})




var products =document.querySelectorAll(".cards .card")
var cart =document.getElementById("cart")
var showPrice =document.getElementById("showPrice")
var totalPrice=0
var priceRusilt=document.getElementById("priceRusilt")
products.forEach((product) => {
    var buyButton=product.querySelector("button")
    
    product.onclick =function(){
        
var price = Number(product.dataset.price)
// console.log(price)/
totalPrice += price


    var card =product.querySelector(".card1").cloneNode(true)
    // console.log(card)/
    cart.append(card)
     showPrice.classList.remove("hidden")
    card.querySelector("button").remove()
    var removeButton=document.createElement("button")
    removeButton.innerText="remove"
    removeButton.className="btn btn-error rounded-full w-full mt-3 py-2 text-xs font-bold bg-[#ff9fab]  "
    card.querySelector("button")
    card.append(removeButton)
removeButton.onclick=function(){
   totalPrice-=price
card.remove()
if(cart.children.length === 0){
   showPrice.classList.add("hidden")
   priceRusilt.innerHTML = ""
}
    }
    }
})



showPrice.onclick = function(){
  var finalPrice = totalPrice;
  if(totalPrice > 1500){
    finalPrice = totalPrice * 0.8
    priceRusilt.innerHTML = `
      <div class="alert alert-success ">
      <span dir="ltr" class="font-bold text-[#ff9fab]"> 20%</span>انت حصلت علي خصم
      </div>
      <p class="mt-5 font-bold ">total: ${totalPrice} EG</p>
      <p class="mt-5 font-bold ">final Price: ${finalPrice} EG</p>
    `
  } else {
    priceRusilt.innerHTML = `
      <p>total: ${totalPrice} EG</p>
    `
  }
}





var search =document.getElementById("search")
var cards= document.querySelectorAll(".card")

search.oninput=function(){
    var value = search.value
    // console.log(value)/
    cards.forEach(function(card){
var titleEl = card.querySelector(".title")
var name = titleEl.innerText
// console.log(name)ظ
if(name.includes(value)){
    card.style.display=""
}else{
     card.style.display="none"
}
    })
}