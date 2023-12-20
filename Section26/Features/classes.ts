class Vehicle{
    drive(): void{
        console.log('hello');
    }
}

class Car extends Vehicle{
    drive(): void{
        console.log('hello from car');
    }
}

const car = new Car();
car.drive();