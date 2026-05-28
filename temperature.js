 //celsius temperatures
const celsiusTemps = [0, 10, 20, 30, 40];
//convert to fahrenheit using map method

const fahrenheitTemps = celsiusTemps.map(temp => (temp * 9/5) + 32);

console.log(fahrenheitTemps);