import ScrollSuave from "./modules/scroll-suave.js";
import initScrollAnimation from "./modules/scroll-animacao.js";
import initTabNav from "./modules/tabnav.js";
import Accordion from "./modules/accordion.js";
import initModal from "./modules/modal.js";
import initToolTip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave("[data-menu='suave'] a[href^='#']");
scrollSuave.init();
const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

initScrollAnimation();
initTabNav();
initModal();
initToolTip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
