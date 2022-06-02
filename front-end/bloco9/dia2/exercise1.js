// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  // const joke = await fetch(API_URL, myObject).then(response => response.json()).then(data => data.joke);
  // document.querySelector('#jokeContainer').innerText = joke;

  try {
    const response = await fetch(API_URL, myObject);
    const data = await response.json();
    document.querySelector('#jokeContainer').innerText = data.joke;
  } catch(error) {
    console.log('Deu ruim!');
  }

};

window.onload = () => fetchJoke();