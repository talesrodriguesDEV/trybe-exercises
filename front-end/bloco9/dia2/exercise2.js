
const fetchCoins = async () => {
  const coinCapURL = 'https://api.coincap.io/v2/assets';

  const coinsArray = await fetch(coinCapURL)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());
  // console.log(coinsArray);
  return coinsArray;
}

const displayCoins = async () => {
  const coinsArray = await fetchCoins();
  const ul = document.querySelector('#coins-list');
  coinsArray
    // .filter((coin, index) => index < 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');
      newLi.innerText = `${coin.name} (${coin.symbol}): ${Number(coin.priceUsd).toFixed(2)}`;
      ul.appendChild(newLi);
    })
}

window.onload = displayCoins;