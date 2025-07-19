export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = links;
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView(this.options);

    /* Forma alternativa
  const sectionTop = section.offsetTop;
  window.scrollTo({
    top: sectionTop,
    behavior: "smooth",
  });
  */
  }
  addLinkEvent() {
    linksInternos.forEach((link) =>
      link.addEventListener("click", scrollToSection)
    );
  }

  init() {
    if (linksInternos.length) {
      this.addLinkEvent();
    }
  }
}
