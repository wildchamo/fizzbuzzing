var numeros=100;

if (esdivisible(20,5)){
    console.log("es divisible");
}else{
    console.log("no es divisble ");
}


for(i=1;i<=numeros;i++){

if(esdivisible(i,3)&&esdivisible(i,5)){
    document.write("Fizzbuzz <br>" )
}else if(esdivisible(i,3)){
    document.write ("Fizz <br>")
}else if(esdivisible(i,5)){
    document.write ("Buzz <br>")
}
else{
    document.write(i+"<br>");
}
}
alert("holaa!");

function esdivisible(number, dividor){
 if(number % dividor==0){
     return true;
 }else{
     return false ;
 }
}
