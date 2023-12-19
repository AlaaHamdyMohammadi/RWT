const carMakers: (string | number)[] = ['ford', 'toyota', 'chevy', 10];

// Help with inference when extracting values
const myCar = carMakers.pop();
const valid = carMakers.push(10)

// Flexible types
const importantDates = []