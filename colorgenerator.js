const gcolor=()=>{
   const randomno=Math.floor(Math.random()* 16777215)
   const randomCode = "#" + randomno.toString(16);
   document.getElementById("text").innerHTML=randomCode 
   document.body.style.backgroundColor=randomCode
   console.log(randomno);
   console.log(randomCode);
   
} 
document.getElementById("btn").addEventListener("click",gcolor)
gcolor();
setInterval(() => {gcolor()} 
, 1000);