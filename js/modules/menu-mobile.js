import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "ativo";

    // Define touchstart e clique como argumentos padrão
    // de events caso o usuário não defina
    if (events === undefined) this.events = ["click", "touchstart"];
    else this.events = this.events;

    this.openMenu = this.openMenu.bind(this);
  }
  openMenu(event) {
    event.preventDefault();
    this.menuButton.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuButton.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  closeMenu() {
    this.menuList.classList.remove(this.activeClass);
  }
  addMenuMobileEvents() {
    this.events.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
