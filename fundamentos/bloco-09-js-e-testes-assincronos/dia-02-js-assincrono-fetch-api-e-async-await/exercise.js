const showCrypto = async () => {
  const url = 'https://api.coincap.io/v2/assets';
  const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest';
  const endpoint = '/currencies/usd.min.json';
  const dollarUrl = baseUrl + endpoint;

  const cryptoList = document.getElementById('cryptoList');

  const brl = await fetch(dollarUrl)
    .then((response) => response.json())
    .then((data) => data.usd.brl);

  fetch(url)
    .then((response) => response.json())
    .then(({ data }) => {
      const tenCoins = data.filter((coin, index) => index <= 9);

      tenCoins.forEach(({ id, symbol, priceUsd} ) => {
        const li = document.createElement('li');
        li.innerText = `${id} (${symbol}): ${(Number(priceUsd) * brl).toFixed(2)}`;
        cryptoList.appendChild(li);
      })
    });
}

showCrypto();