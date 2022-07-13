"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    Car.prototype.honk = function () {
        console.log('Honk!');
    };
    Car.prototype.openTheDoor = function (door) {
        console.log("".concat(door, " open!"));
    };
    Car.prototype.closeTheDoor = function (door) {
        console.log("".concat(door, " close!"));
    };
    Car.prototype.turnOn = function () {
        console.log('On!');
    };
    Car.prototype.turnOff = function () {
        console.log('Off!');
    };
    Car.prototype.speedUp = function () {
        console.log('Vruuum!');
    };
    Car.prototype.speedDown = function () {
        console.log('- Brake noise -');
    };
    Car.prototype.stop = function () {
        console.log('Stop!');
    };
    Car.prototype.turn = function (direction) {
        console.log("Turning ".concat(direction, "."));
    };
    return Car;
}());
exports["default"] = Car;
