fetch('https://free-food-menus-api-production.up.railway.app/burgers').then((data)=>{
    return data.json();
}).then((completedata)=>{
    let data1 ="";
    
    completedata.map((values)=>{
        data1+=` <div class="card">
        <h1 class="title">${values.id}</h1>
        <img src=${values.img} alt="" class="images">
        <p>${values.name}</p>
        <p class="price">${values.price}</p>
        <p class="country">${values.country}</p>
   </div>`
    })
   
    document.getElementById("cards").innerHTML=data1;

}).catch((err)=>{
    console.log(err);
})


    setTimeout(()=>{
       alert('Order is diliver thanks')
    },9000)

