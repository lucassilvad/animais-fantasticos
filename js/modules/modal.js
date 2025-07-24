import MenuMobile from "./menu-mobile.js";
export default class Modal {
  constructor(btnAbrir, btnFechar, containerModal) {
    this.btnAbrir = document.querySelector(btnAbrir);
    this.btnFechar = document.querySelector(btnFechar);
    this.containerModal = document.querySelector(containerModal);
    // bind this ao call back para fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }
  // Adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
    const menuMobile = new MenuMobile(
      "[data-menu='button']",
      "[data-menu='list']"
    );
    menuMobile.closeMenu();
  }
  // Abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }
  // Fecha o modal ao clicar ao lado de fora
  cliqueForaModal(event) {
    if (event.target === this.containerModal) this.toggleModal();
  }
  // Adiciona os eventos ao modal
  addModalEvent() {
    this.containerModal.addEventListener("click", this.cliqueForaModal);
    this.btnAbrir.addEventListener("click", this.eventToggleModal);
    this.btnFechar.addEventListener("click", this.eventToggleModal);
  }

  init() {
    if (this.containerModal && this.btnAbrir && this.btnFechar) {
      this.addModalEvent();
    }
    return this;
  }
}
