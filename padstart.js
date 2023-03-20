// padstart, padend, trim start , trim end


let minute = '4';
let hour = '8';
console.log(minute.padStart(4));
console.log(hour.padEnd(5,'0'));

let trimname= '    rahul   ';
console.log(trimname.length);

trimname=trimname.trimEnd();
console.log(trimname.length);