  // apply the cached theme on load 
function savedTheme(body){
    console.log('saved theme called');
    const theme = localStorage.getItem('theme')
  
if(theme){
   
    body.classList.add(theme);
}
}
function theme(body){
    
    if(body.classList.contains("light")){
        body.classList.replace('light','dark');
        localStorage.setItem('theme','dark');
    }else{
        body.classList.replace('dark','light');
        localStorage.setItem('theme','light');
    }
}
  
 
function callHomeProducts(){
    for(var i=0;i<4;i++)
    {
        document.getElementById("cards").innerHTML += '<div class="card card-bg my-3 mx-3" style="width: 18rem;"><img  src="'+products[i].image+'" class="card-img-top " alt="..."><div class="card-body"><h5 class="card-title">'+products[i].name+'</h5><p class="card-text card-subtitle">'+products[i].smallDesc+'</p><p class="card-text" style="color: #bf9456;font-weight: bold; ">'+products[i].price+'</p> <a href="#" class="btn btn-secondary inverted" href="../pages/productdetail.html" style="background-color: #bf9456;">View More</a></div></div>'
    }
}
function callallProducts(){
    for(var i=0;i<products.length;i++)
    {
        document.getElementById("product-cards").innerHTML += '<div class="card card-bg my-3 mx-3" style="width: 18rem;"><img  src="'+products[i].image+'" class="card-img-top " alt="..."><div class="card-body"><h5 class="card-title">'+products[i].name+'</h5><p class="card-text card-subtitle">'+products[i].smallDesc+'</p><p class="card-text" style="color: #bf9456;font-weight: bold; ">'+products[i].price+'</p> <a href="#" class="btn btn-secondary inverted" style="background-color: #bf9456;">View More</a></div></div>'
    }
}
function callHomeEquipments(){
    for(var i=0;i<4;i++)
    {
        document.getElementById("equipment-home-cards").innerHTML += '<div class="card card-bg my-3 mx-3" style="width: 18rem;"><img src="'+equipments[i].image+'" class="card-img-top " alt="..."><div class="card-body"><h5 class="card-title">'+equipments[i].name+'</h5><p class="card-text card-subtitle">'+equipments[i].smallDesc+'</p><p class="card-text" style="color: #bf9456;font-weight: bold; ">'+equipments[i].price+'</p> <a href="#" class="btn btn-secondary" style="background-color: #bf9456;">Go somewhere</a></div></div>'
    }
}
function callallEquipments(){
    for(var i=0;i<equipments.length;i++)
    {
        document.getElementById("equipment-cards").innerHTML += '<div class="card card-bg my-3 mx-3" style="width: 18rem;"><img src="'+equipments[i].image+'" class="card-img-top " alt="..."><div class="card-body"><h5 class="card-title">'+equipments[i].name+'</h5><p class="card-text card-subtitle">'+equipments[i].smallDesc+'</p><p class="card-text" style="color: #bf9456;font-weight: bold; ">'+equipments[i].price+'</p> <a href="#" class="btn btn-secondary" style="background-color: #bf9456;">Go somewhere</a></div></div>'
    }
}
function callHomeremedies(){
    for(var i=0;i<3;i++)
    {
        document.getElementById("remedies-home-cards").innerHTML += ' <div class="card post-card my-3 mx-3 p-0" ><div class"post-img"><img class="card-img-top img-responsive" src="'+remedies[i].image+'" alt="card image cap" title="'+remedies[i].title+'"> </div><div class="card-body"><h4 class="card-title p-2">'+remedies[i].title+'</h4><p class="card-text">'+remedies[i].smallDesc+'</p>            <p class="card-text" style="color: #bf9456;"><small>'+remedies[i].lastUpdate+'</small></p>        </div></div>'
    }
}
 
function callAllHomeremedies(){
    for(var i=0;i<remedies.length;i++)
    {
        document.getElementById("remedies-cards").innerHTML += ' <div class="card post-card my-3 mx-3 p-0" ><div class"post-img"><img class="card-img-top img-responsive" src="'+remedies[i].image+'" alt="card image cap" title="'+remedies[i].title+'"> </div><div class="card-body"><h4 class="card-title p-2">'+remedies[i].title+'</h4><p class="card-text">'+remedies[i].smallDesc+'</p>            <p class="card-text" style="color: #bf9456;"><small>'+remedies[i].lastUpdate+'</small></p>        </div></div>'
    }
}
 