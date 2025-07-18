export default function initModal() {
  const containerModal = document.querySelector("[data-modal='container']");
  const btnAbrir = document.querySelector("[data-modal='abrir']");
  const btnFechar = document.querySelector("[data-modal='fechar']");
  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function cliqueForaModal(event) {
    if (event.target === this) toggleModal(event);
  }
  if (containerModal && btnAbrir && btnFechar) {
    containerModal.addEventListener("click", cliqueForaModal);
    btnAbrir.addEventListener("click", toggleModal);
    btnFechar.addEventListener("click", toggleModal);
  }
}
