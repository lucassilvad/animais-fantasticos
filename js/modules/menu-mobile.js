import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const btnMenu = document.querySelector("[data-menu='button']");
  const listaMenu = document.querySelector("[data-menu='list']");
  const eventos = ["click", "touchstart"];
  function openMenu() {
    btnMenu.classList.add("ativo");
    listaMenu.classList.add("ativo");
    outsideClick(listaMenu, eventos, () => {
      btnMenu.classList.remove("ativo");
      listaMenu.classList.remove("ativo");
    });
  }
  if (btnMenu) {
    eventos.forEach((evento) => btnMenu.addEventListener(evento, openMenu));
  }
}
