let mark = 90;
if (mark>=80 && mark<=100){
    console.log('A++');

}else if(mark>=70 && mark<=80){
  console.log('A+');
 
}else if (mark>=50 && mark<=70){
  console.log('A');

}else if (mark>=60 && mark<=50){
  console.log('A-');

}else if (mark>=30 && mark<=40){
  console.log('B');
}


let number = -10;
switch(true){
  case number > 0:
    console.log('This is a positive number');
    break;

  case number === 0:
    console.log('This is a zero number');
    break;
  case number<0:
    console.log('This is a negative number');
    break;
}  