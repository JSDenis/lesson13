var a = "У  меня 5 яблок";

var b = 6;
/* 
if(b > 7){
    alert("У меня много яблок");
} 
else {
    alert(a);
} */

b=b-1;

switch(b){
    case 6: alert("У меня 6 яблок!");
    break;
    case 7: alert("7");
     break; 
    default: alert("Default значение");
    break;
}

var sumNum;

function sum(c,d){
    sumNum = c + d;
    return sumNum; 
} 

console.log("Сумма будет равна " + sum(17, 50));

//document.write("Сумма будет равна " + sum(17, 50));
