

const mehsullarinYerlesheceyiYer=document.querySelector("#mehsullar")
window.addEventListener("DOMContentLoaded", getMelumatlariGetir)


async function getMelumatlariGetir(){
const unvan="https://fakestoreapi.com/products"

try{
  const cavab= await fetch(unvan)
  const mehsullar= await cavab.json()
for(let i=0; i<mehsullar.length; i++){

mehsullarinYerlesheceyiYer.innerHTML+=` <div class="col-12 col-md-6 col-lg-3">

<div class="card my-2 p-2">
    <img src="${mehsullar[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${mehsullar[i].title}</h5>
      <p class="card-text">${mehsullar[i].description.slice(20)}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>

</div>`
}




}

catch(xeta){
    console.log("Serverde bash veren hata", xeta.message)
}

}

