export default function initScrollAnimation() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0;

      if (isSectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
      // const sectionHeight = section.getBoundingClientRect().height;
      // if (sectionTop < -sectionHeight * 0.3) section.classList.remove("ativo");
    });
  }
  if (sections.lenght) {
    animaScroll();
    const windowMetade = window.innerHeight * 0.6;

    window.addEventListener("scroll", animaScroll);
  }
}
