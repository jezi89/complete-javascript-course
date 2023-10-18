// 'use strict';

// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     }

//     Person.prototype.calcAge = function () {
//         connsole.log(2037 - this.birthYear)
//         }
    
//     const jonas = new Person('Jonas', 991)
//     const matilda = new Person('Matilda', 2017);
//     const jack = new Person('Jack', 1975);

// jonas.calcAge

// console.log(jonas)
// Person.prototype.species = "Homosapiens";
// console.log(jonas.species, matilda.species)


const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}       

Car.prototype.brake = function() {  
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

const audi = new Car('Audi', 120);
const bmw = new Car('BMW', 95);
const mercedes = new Car('Mercedes', 100);

console.log(audi, bmw, mercedes)

audi.accelerate()*2;
audi.brake()*5;
bmw.accelerate();
mercedes.brake(2)
console.log(audi, bmw, mercedes)