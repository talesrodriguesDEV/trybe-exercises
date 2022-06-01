// Exercício 1
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  setTimeout(() => console.log("Returned planet: ", mars.name), 4000);
};

getPlanet(); // imprime Marte depois de 4 segundos


// Exercício 2
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = () => setTimeout(() => console.log(`Mars temperature is: ${getMarsTemperature()} degrees Celsius`), messageDelay());

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo


// Exercício 3
const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...
const sendMarsTemperatureWithCallbacks = (callback) => callback(getMarsTemperature());

sendMarsTemperatureWithCallbacks(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperatureWithCallbacks(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo


// Exercício 4
const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

const success = () => Math.random() >= 0.6;

// definição da função sendMarsTemperature...
const sendMarsTemperatureWithError = (action, error) => success() ? action(getMarsTemperature()) : error('Robot is busy');

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperatureWithError(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperatureWithError(greet, handleError);
