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

// Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number, y: number} = JSON.parse(json) // convert string into object
console.log(coordinates);

// variable whose type cannot be inferred correctly

let numbers = [-10, 20, 0];
let numberAboveZero: boolean | number = false;

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
        numberAboveZero = numbers[i];
    }
}