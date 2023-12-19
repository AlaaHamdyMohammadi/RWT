const add = (a: number, b: number) : number => {
    return a + b;
}

function divide(a: number, b: number): number{
    return a / b;
}

// Anonymous functions
const muliply = function(a: number, b: number){
    return a * b;
}

// Destructure

const logWeather = ({date, weather}: {date: Date; weather: string}): void => {
    console.log(date, weather);
}