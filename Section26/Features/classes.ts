class Vehicle{
  

    constructor(public color: string){
       
    };

    protected honk(): void{
        console.log('hello');
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color)

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