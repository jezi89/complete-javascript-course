// 'use strict';

// const Person = function(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     }

//     Person.prototype.calcAge = function () {
//         console.log(2037 - this.birthYear)
//         }
    
//     const jonas = new Person('Jonas', 991)
//     const matilda = new Person('Matilda', 2017);
//     const jack = new Person('Jack', 1975);

// jonas.calcAge

// console.log(jonas)
// Person.prototype.species = "Homosapiens";
// console.log(jonas.species, matilda.species)

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function(make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`)
// }       

// Car.prototype.brake = function() {  
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`)
// }

// const audi = new Car('Audi', 120);
// const bmw = new Car('BMW', 95);
// const mercedes = new Car('Mercedes', 100);

// console.log(audi, bmw, mercedes)

// audi.accelerate()*2;
// audi.brake()*5;
// bmw.accelerate();
// mercedes.brake(2)
// console.log(audi, bmw, mercedes) 

// added new commit message

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class CarCl {
//     constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//     }

// accelerate() {
//             this.speed += 10;
//             console.log(`${this.make} is going at ${this.speed} km/h`)    
// }

// brake() {  
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`)
// }

// get speedUS() {
//  return this.speed/1.6
// }

// set speedUS(speed) {
//     this.speed = speed * 1.6

// }
// }
// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS)
// console.log(ford);
// ford.accelerate();
// ford.brake(2)
// ford.speedUS = 50;
// console.log(ford);

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

  
const Car = function (args) {
    this.make = args.make;
    this.speed = args.speed;
}

Car.prototype.brake = function (_brake) {
    this.speed -= _brake;
    console.log(`Car going at ${this.speed} km/h`);
  };

const EV = function(args) {
Car.call(this, args);
this.charge = args.chargeTo;
};

EV.prototype = Object.create(Car.prototype)

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
    console.log(`Battery charged to ${this.charge}%`);
  };

  EV.prototype.accelerate = function () {
    if (this.speed < 300 && this.charge > 0) {
      this.speed += 20;
      this.charge -= 1;
      console.log(`'Tesla' going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }
  };

  const tesla = new EV({
    make: 'Tesla',
    speed: 120,
    charge: 23
  });

  tesla.accelerate();  // Should increase speed and decrease charge
  tesla.brake(10);     // Should decrease speed
  tesla.chargeBattery(90); // Should set charge to 90%