const user = {
    name:'rahul',
    age: 20,
    isMarried: false,
    selectColor : null,
    calculateAge: function(){
        console.log(`i am ${this.age} rahul kumar`);
    } 
};
user.calculateAge();