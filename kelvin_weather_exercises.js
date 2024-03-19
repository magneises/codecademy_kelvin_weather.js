// TASK 1 AND 2
// The forecast today is 293 Kelvin. To start, create a variable named kelvin, and set it equal to 293.

// variable kelvin has value of 293
let kelvin = 0;
console.log('This is kelvin: ' + kelvin)

// TASK 3 AND 4
// converting kelvin to celsius
let celsius = kelvin - 273;
console.log('This is celsius: ' + celsius)

// TASK 5 AND 6
// calculating Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
console.log('This is Fahrenheit (decimal): ' + fahrenheit);

// TASK 7 AND 8
// using Math.floor to round up to the nearest whole number
fahrenheit = Math.floor(fahrenheit);
console.log('This is Fahrenheit (rounded): ' + fahrenheit);

// TASK 9 AND 10
// Use console.log to print string interpolation
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// TASK 11 AND 12: Change Kelvin to 0, what's - Kelvin in Fahrenheit?
// Kelvin of 0 is -460 in Fahrenheit

let newton = celsius * (33/100);
// console.log(`This is Newtons (rounded): ` ${newton});
newton = Math.floor(newton);
console.log('This is Newtons: ' + newton);
console.log(`This is Newtons (interpolation method): ${newton}`);
