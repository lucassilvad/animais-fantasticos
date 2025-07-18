export default function initSmoothScroll() {
  const linksInternos = document.querySelectorAll(
    "[data-menu='suave'] a[href^='#']"
  );
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
    });

    /* Forma alternativa
  const sectionTop = section.offsetTop;
  window.scrollTo({
    top: sectionTop,
    behavior: "smooth",
  });
  */
  }
  if (linksInternos.length) {
    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
}
