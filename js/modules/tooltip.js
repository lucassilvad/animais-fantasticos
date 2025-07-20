export default class ToolTip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind dos objetos da classe aos callbacks
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  // Cria a tooltip e adiciona os eventos de mouseleave e mousemove
  // ao target
  onMouseOver({ currentTarget }) {
    // Cria a tooltip box e coloca em uma propriedade
    this.criarToolTipbox(currentTarget);

    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
  }
  // Remove a tooltip e os eventos de mousemove e mouseleave
  onMouseLeave({ currentTarget }) {
    this.toolTipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // Move a tooltip com base nos seus estilos
  // de acordo com a posição do mouse
  onMouseMove({ pageY, pageX }) {
    this.toolTipBox.style.top = pageY + 20 + "px";
    if (pageX + 240 > window.innerWidth) {
      this.toolTipBox.style.left = pageX - 200 + "px";
    } else {
      this.toolTipBox.style.left = pageX + 20 + "px";
    }
  }

  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }
  // Cria a tooltip box e coloca no body
  criarToolTipbox(element) {
    const toolTipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    toolTipBox.classList.add("tooltip");
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox);
    this.toolTipBox = toolTipBox;
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
