import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault();
    if (event.target === this.querySelector("a")) {
      this.classList.add("ativo");
    }
    outsideClick(this, ["touchStart", "click"], () => {
      this.classList.remove("ativo");
    });
  }

  dropdownMenus.forEach((menu) => {
    ["touchStart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
