m=0;
var y;
function start()
{
    y=setInterval(run,100);  //if you write var before y ,the car doesnot stop
function run(){
   if(m==1200){

   clearInterval(y);
   m=0;

}
else{
m+=10;
  var x= document.getElementById("img"); 
  x.style.marginLeft=m+'px';
}
}
}


function stop(){
   clearInterval(y)
}





// setInterval(run,100);
// m=0
// function run(){
// m+=5
//   var x= document.getElementById("img"); 
//   x.style.marginLeft=m+'px'
// }