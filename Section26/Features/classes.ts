class Vehicle{
    protected honk(): void{
        console.log('hello');
    }
}

class Car extends Vehicle{
    private drive(): void{
        console.log('hello from car');
    }
    startDriving(): void{
        this.drive();
        this.honk();
    }
}

const car = new Car();
car.startDriving();