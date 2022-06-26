var proName=document.getElementById('name');
var seller=document.getElementById('seller');
var price=document.getElementById('price');
var dis=document.getElementById('dis');

var creatBtn=document.getElementById('creat');
var readBtn=document.getElementById('read');
var updateBtn=document.getElementById('update');
var deleteAllBtn=document.getElementById('deleteAll');

var readA=document.getElementById('readA');
var creatA=document.getElementById('creatA');
var upA=document.getElementById('upA');
var deleteA=document.getElementById('deleteA');

var search=document.getElementById('search');


var table=document.getElementById('table');



if(localStorage.getItem("products")){

    var products=JSON.parse(localStorage.getItem("products"));
}
else{
    var products=[];
    localStorage.setItem("products",JSON.stringify(products));
}

read();

creatBtn.addEventListener('click',function(){
    creat();
   
});

readBtn.addEventListener('click',function(){
    read();
    creatA.classList.add("d-none");
    readA.classList.remove("d-none");
    upA.classList.add("d-none");
    deleteA.classList.add("d-none");
    
    
})

deleteAllBtn.addEventListener('click',function(){
    localStorage.removeItem("products");
    products="";
    table.innerHTML="";

    creatA.classList.add("d-none");
    readA.classList.add("d-none");
    upA.classList.add("d-none");
    deleteA.classList.remove("d-none");
})


function creat(){
    var product={
        proName:proName.value,
        seller:seller.value,
        price:price.value
    }
     //to store in local storage
     products.push(product);
     localStorage.setItem("products",JSON.stringify(products));

    // console.log(products);
    clearInput();

    creatA.classList.remove("d-none");
    readA.classList.add("d-none");
    upA.classList.add("d-none");
    deleteA.classList.add("d-none");
    
    clearAlert();
}

function read(){
   var res=``;
    
    for(var i=0;i<products.length;i++){
      res+=`
       <tr>
       <td>${i}</td>
       <td>${products[i].proName}</td>
       <td>${products[i].seller}</td>
       <td>${products[i].price}</td>
       <td><button class="btn text-dark bg-opacity-50 text-center" onclick="up(${i})"><i class="fa fa-wrench text-dark" aria-hidden="true"></i></button></td>
       <td><a href="#" class="tn bg-light text-dark text-center" onclick="deleteP(${i})"><i class="fa fa-trash" aria-hidden="true"></i></a></td>
       </tr>
      `
    }
    table.innerHTML=res;
   
}

function up(id){
        
        proName.value=products[id].proName;
         seller.value=products[id].seller;
         price.value=products[id].price;

         updateBtn.addEventListener('click',function(){
        
         products[id].proName= proName.value;
         products[id].seller=seller.value;
         products[id].price=price.value;

        //  clearInput();
        localStorage.setItem("products",JSON.stringify(products));

        // clearInput();

         creatA.classList.add("d-none");
         readA.classList.add("d-none");
         upA.classList.remove("d-none");
         deleteA.classList.add("d-none");
        // clearAlert(); 
         clearInput();
         })
         
}


function deleteP(id){
    products.splice(id,1);
    localStorage.setItem("products",JSON.stringify(products));

    creatA.classList.add("d-none");
    readA.classList.add("d-none");
    upA.classList.add("d-none");
    deleteA.classList.remove("d-none");

    clearAlert();

}

search.onkeydown=function(){
    out=``;
    for(var i=0;i<products.length;i++){
        if(products[i].proName.toLowerCase().includes(search.value.toLowerCase())){
        out+=`
            <tr>
            <td>${i}</td>
            <td>${products[i].proName}</td>
            <td>${products[i].seller}</td>
            <td>${products[i].price}</td>
            <td><button class="btn bg-light text-dark bg-opacity-50 text-center" onclick="up(${i})"><i class="fa fa-wrench text-dark" aria-hidden="true"></i></button></td>
            <td><a href="#" class="tn bg-light text-dark text-center" onclick="deleteP(${i})"><i class="fa fa-trash" aria-hidden="true"></i></a></td>
            </tr>
           `
         }
         table.innerHTML=out;
    }
}


function clearInput(){
         proName.value="";
         seller.value="";
         price.value="";
}

function clearAlert(){
    creatA.classList.add("d-none");
    readA.classList.add("d-none");
    upA.classList.add("d-none");
    deleteA.classList.add("d-none");
}
dis.value="products count: "+products.length;
/*
<i class="fa fa-wrench text-dark" aria-hidden="true"></i>
*/ 
