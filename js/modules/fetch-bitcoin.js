export default function initFetchBitcoin() {
  const btcUrl = "https://blockchain.info/ticker";
  const btcText = document.querySelector(".btc-preco");

  async function getBtcValue() {
    try {
      const btcResponse = await fetch(btcUrl);
      const btcJSON = await btcResponse.json();
      const btcPreco = `R$  ${(1 / btcJSON.BRL.sell).toFixed(7)}`.replace(
        ".",
        ","
      );

      btcText.innerText = btcPreco;
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  getBtcValue();
}
