import AnimaNumeros from "./anima-numeros.js";
export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);
  // Puxa os animais através de um arquivo JSON
  // e cria cada animal utilizando createAnimal

  // Preenche cada animal no dom
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  async function criarAnimais() {
    try {
      // Fetch e espera a resposta
      const animaisResponse = await fetch(url);
      // Transforma a resposta em JSON
      const animaisJSON = await animaisResponse.json();
      // Após a transformação em JSON ativa as funções para preencher e animar os números
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  // Anima os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  // Cria uma div contendo as informações
  function createAnimal(animal) {
    // console.log(animal.total);

    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }
  return criarAnimais();
}
