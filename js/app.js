var girl = {
    name: 'Anne',
    age: 23,
    friends: ['Lily', 'Charles', 'Harry'],
    address: {
        flat: 12,
        building_name: 'Downing House',
        street: '34 Downing Street',
        postcode: 'SE1 1EW'
    },
    sayHello: function(name){
        console.log("Hola " + name);
    }
}

console.log(girl.name);
console.log(girl.address);

girl.sayHello('Emma');