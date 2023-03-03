// let friends = ['hello','rahul','kumar'];
// console.log(friends);
// console.log(friends[1]);
// console.log(friends.length);


// adding elemnts
// const numbers =[12,13,14,17,18];
// numbers.splice(3,0,15,16)
// // numbers.unshift(9,10,11);
// // numbers.push(19,20,21);
// console.log(numbers);



//finding object in an array

// const doctors = [
// {name: 'rahul',age :19},
// {name: 'kumar',age:44},
// ];
// const result =doctors.find(function(doctors){
//     return doctors.age > 30;
// });
// console.log(result);

//iterating an array
// const numbers = [1,2,3,4,5];
// for (let index=0; index<numbers.length;index++){
//     console.log(index,numbers[index]);
// };
// for (let num of numbers){
//     console.log(num);
// };
// numbers.forEach(function(num,index){
//     console.log(num,index);
// });


//sortig an array

// const numbers =[6,7,3,8,9];
// numbers.sort();
// numbers.reverse();
// console.log(numbers);

// let doctors = [
//     {name:'rahul',age:19},
//     {name:'hello',age:77},
// ];
// doctors.sort(function(d1,d2){
//     if(d1.age > d2.age) return +1;
//     if(d1.age === d2.age) return 0;
//     if(d1.age< d2.age) return -1;
// }).reverse();
// console.log(doctors);



//array method - every , some

// const numbers = [9,-4,5,8,5];
// const data = numbers.every(function(num){
//     return num>0;
// })
// console.log(data);

// split and join

// let numbers = [1,2,3,4];
// let joinArray = numbers.join(' ');
// console.log(joinArray);

// let message = 'hi my name is rahul';
// const arrayMessage = message.split(' ');
// console.log(arrayMessage);



// Es6 features : arrays and object destructuring

// function greeting(user){
//     const {name,age,address} = user;
//     const {long,lat} = address;
//     console.log(`hello ${name} and age ${age} form ${long}, ${lat}`);
// }

// const user = {
//     name: 'rahul',
//     age : 19,
//     address : {
//         long : 888.9990,
//         lat : 777.55550,
//     },
// };

// greeting(user);

// let [a,b,c,d] = [1,2,3,4];
// console.log(a,b,c,d);




// Es6 Data Structure : Set

// let set = new Set();


// set.add(100);
// set.add(300);
// set.add(200);
// set.add(100);
// set.add(200);
// console.log(set);
// console.log(set.size);
// set.delete(200);    

// console.log(set);
// console.log(set.size);

// for (let el of set){
//     console.log(el);
// }
// set.forEach((el) => console.log(el));
// set.clear();
// console.log(set);


// Es6 Data Structures : Map

let map = new Map();
map.set('mango','aam');
map.set('banana','kela');
map.set('score',100);
console.log(map);

for(let el of map){
    console.log(el);
}
console.log(map.has('hibsiabvi'));

map.delete('banana');
console.log(map);