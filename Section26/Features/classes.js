var Vehicle = /** @class */ (function () {
    function Vehicle(color) {
        this.color = color;
    }
    ;
    Vehicle.prototype.honk = function () {
        console.log('hello');
    };
    return Vehicle;
}());
var vehicle = new Vehicle('orange');
console.log(vehicle.color);
// class Car extends Vehicle{
//     private drive(): void{
//         console.log('hello from car');
//     }
//     startDriving(): void{
//         this.drive();
//         this.honk();
//     }
// }
// const car = new Car();
// car.startDriving();
