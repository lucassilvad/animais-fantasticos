export default function fetchBitcoin(url, target) {
  const btcText = document.querySelector(target);
  fetch(url)
    .then((btcResponse) => btcResponse.json())
    .then(
      (btcJSON) =>
        (btcText.innerText = `R$  ${(1 / btcJSON.BRL.sell).toFixed(7)}`.replace(
          ".",
          ","
        ))
    )
    .catch((erro) => console.log(Error(erro)));
}
