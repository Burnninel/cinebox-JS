import {
  IconLogo,
  IconPopcorn,
  IconMovie,
} from "/public/assets/icons/icons.js";

export function Header() {
  const header = document.createElement("header");
  header.className = "global-header";
  header.innerHTML = `
        <div class="global-header__logo">
            ${IconLogo()}
        </div>
        <nav class="global-header__navbar">
            <button class="global-header__btn">
                ${IconPopcorn()}
                <span>Explorar</span>
            </button>
            <button class="global-header__btn">
                ${IconMovie()}
                <span>Meus Filmes</span>
            </button>
        </nav>
        <div class="global-header__login">
            <button class="global-header__btn">Entrar</button>
        </div>
    `;

    return header;
}
