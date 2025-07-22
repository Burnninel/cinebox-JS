import { IconLogo } from '/src/assets/icons/icons.js';

export function Form() {
  const element = document.createElement("section");
  element.className = "auth";

  const imagem = `
    <div class="auth-banner">
        <img src="src/assets/img/login.png" alt="Imagem ilustrativa do banner de login" class="auth-banner__image">
        <div class="auth-banner__logo">
            ${IconLogo()}
        </div>
        <div class="auth-banner__info">
            <h1 class="auth-banner__title">ab filmes</h1>
            <p class="auth-banner__description">O guia definitivo para os amantes de cinemas</p>
        </div>
    </div>
  `;

  const form = `
    <form class="auth-form">
    
    </form>
  `;

  element.innerHTML = (imagem + form).trim();

  return element;
}
