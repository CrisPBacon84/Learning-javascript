// function user (name,age){
//     const userObje = {
//         name,
//         age,
//         walk: function(){
//             console.log('rahul going to college');
//         },
//     };
//     return userObje;
// }

// const user1 = user('rahul',19);
// const user2 = user('kumar',33);
// console.log(user1,user2);


// Homeaddress using factory functions and constructor functions

const homeAddress1 = homeAddress('A','B','C');
const homeAddress2 = homeAddress('X','Y','Z');

function homeAddress(street,city,zipCode){
    return{
        street,
        city,
        zipCode,
    };
}
console.log(homeAddress1);
console.log(homeAddress2);