var btnmoins=document.getElementsByClassName("btn-moins")
var btnplus=document.getElementsByClassName("btn-plus")
console.log(btnmoins);
console.log(btnplus)

for(let plus of btnplus){
    plus.addEventListener('click',function(){
        plus.previousElementSibling.innerHTML++;
        totalprice()
    })
}

for(let minus of minusBtn){

minus.addEventListener('click', function (){

if ( minus.nextElementSibling.innerText >0 ){
    minus.nextElementSibling.innerText--;
}
totalprice()
})

};

let deletebtn = document.querySelectorAll('.btn-delete');

for (let i=0 ; i < deletebtn.length ;i++){
    deletebtn[i].addEventListener('click', function(){
        deletebtn[i].parentElement.parentElement.remove();
        totalprice()
    })
 
}
let hearts=document.getElementsByClassName('fa-heart');
console.log(hearts,"hearts") 
for (let i of hearts) {
  i.addEventListener("click",function(){
    if(i.style.color==="grey"){
      i.style.color="red"

    }else{
      i.style.color="grey"
    }
  })
}

// totalprice
function totalprice(){
    var prixproduit = document.getElementsByClassName("price")
    var quantity = document.getElementsByClassName("quantity")
    let some = 0 
    for(let i = 0; i < prixproduit.length;i++) {
      some += quantity[i].innerText *prixproduit[i].innerText
    }
    console.log('some',some)
    document.getElementById('prix-total').innerText = some
  }


