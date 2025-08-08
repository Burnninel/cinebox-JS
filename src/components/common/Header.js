import { IconLogo, IconPopcorn, IconMovie } from "/src/assets/icons/icons.js";
import { navigateTo } from "/src/router.js";


export function Header() {
  const header = document.createElement("header");
  header.className = "global-header";
  header.innerHTML = `
        <div class="global-header__logo">
            ${IconLogo()}
        </div>
        <nav class="global-header__navbar">
            <button class="global-header__btn" data-form="explorar">
                ${IconPopcorn()}
                <span>Explorar</span>
            </button>
            <button class="global-header__btn" data-form="meus-filmes">
                ${IconMovie()}
                <span>Meus Filmes</span>
            </button>
        </nav>
        <div class="global-header__login">
            <button class="global-header__btn" data-form="login">Entrar</button>
        </div>
    `;

  header.querySelectorAll(".global-header__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      navigateTo(`/${btn.dataset.form}`)
    });
  });

  return header;
}
