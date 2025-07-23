import { IconLogo } from "/src/assets/icons/icons.js";

export function Form() {
  const section = document.createElement("section");
  section.className = "auth";

  const authBanner = `
    <div class="auth-banner">
        <img 
          src="src/assets/img/login.png" 
          alt="Imagem ilustrativa do banner de login" 
          class="auth-banner__image"
        >
        <div class="auth-banner__logo">
            ${IconLogo()}
         </div>
        <div class="auth-banner__info">
            <h1 class="auth-banner__title">ab filmes</h1>
            <p class="auth-banner__description">
              O guia definitivo para os amantes de cinemas
            </p>
        </div>
    </div>
  `;

  const authForm = `
    <div class="auth-form">
        <div class="auth-toggle">
            <button class="auth-toggle__button auth-toggle__button--active">Login</button>
            <button class="auth-toggle__button">Cadastre</button>
        </div>
        <form class="auth-form__form">
            <h1 class="auth-form__title">Crie sua conta</h1>  
            <input type="text" class="auth-form__input" placeholder="Nome">
            <input type="email" class="auth-form__input" placeholder="E-mail">
            <input type="password" class="auth-form__input" placeholder="Senha">
            <button type="submit" class="auth-form__submit">Cadastre</button>
        </form>
    </div>
  `;

  section.innerHTML = (authBanner + authForm).trim();

  return section;
}
