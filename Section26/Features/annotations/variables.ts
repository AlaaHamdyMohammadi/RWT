const apples: number = 5;

let colors: string[] = ['red', 'blue', 'green'];

class Car{

}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number} = {
    x: 10,
    y: 20
}

// Functions

const logNumber: (i: number) => void = (i: number) =>{
    console.log(i);
}