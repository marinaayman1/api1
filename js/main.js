function getApi(){
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function(){
        
   if  ( this.readyState==4 &&  this.status==200){
    var ahmed =  this.responseText;
var ali=JSON.parse(ahmed);
var mohamed=ali.products;
var myText="";  
    for(var i=0;i<mohamed.length;i++){
    var cartoona =`<div class="col-md-4 text-center mb-5 ">
          <img src="${mohamed[i].images[0]}"  style="height:350px" class="img-fluid">
               <h4>${mohamed[i].title}</h4>
             <h6>${mohamed[i].price}$</h6>
                </div>
  
                ` ;
                myText = myText + cartoona;

   }
   document.querySelector(".test").innerHTML = myText;

   }
}

xhttp.open("GET","https://dummyjson.com/products",true);
xhttp.send();

}
getApi();