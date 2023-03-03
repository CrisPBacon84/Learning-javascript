// rest parameter

function muliply(...args){
    console.log(args);

    let mulp = 1;
    for (let num of args){
        mulp = mulp * num ;
    }
     return mulp;
}
console.log(muliply(2,6,4,7,4));