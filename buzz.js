var numeros=100;



for(i=1;i<=100;i++){
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
     true;
 }else{
     false ;
 }
}
