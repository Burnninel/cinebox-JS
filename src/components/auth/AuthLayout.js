import { IconLogo } from "/src/assets/icons/icons.js";
import { handleAuthForm } from "/src/components/auth/AuthHandler.js";
import { navigateTo } from "/src/router.js";

export async function AuthLayout({ forms }) {
  const formType = Object.keys(forms)[0];

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

  const authContainer = document.createElement("div");
  authContainer.className = "auth-form";

  const toggleButtonsHTML = `
    <div class="auth-toggle">
      <button class="auth-toggle__button auth-toggle__button--active" data-form="login">Login</button>
      <button class="auth-toggle__button" data-form="signup">Cadastre</button>
    </div>
  `;

  const formContainer = document.createElement("div");
  formContainer.className = "auth-form__form";

  function renderForm() {
    const { title, submitText, inputs } = forms[formType];

    const inputsHTML = inputs
      .map(
        ({ type = "text", placeholder = "", id = "" }) =>
          `<input type="${type}" class="auth-form__input" placeholder="${placeholder}" id="${id}">`
      )
      .join("\n");

    formContainer.innerHTML = `
        <h1 class="auth-form__title">${title}</h1>  
        ${inputsHTML}
        <button type="submit" class="auth-form__submit" data-form="${formType}">${submitText}</button>
    `;

    updateToggleStyle();
    handleAuthForm(authContainer, inputs, formType);
  }

  function updateToggleStyle() {
    const buttons = authContainer.querySelectorAll(".auth-toggle__button");
    buttons.forEach((btn) => {
      btn.classList.toggle(
        "auth-toggle__button--active",
        btn.dataset.form === formType
      );
    });
  }

  authContainer.innerHTML = toggleButtonsHTML;
  authContainer.appendChild(formContainer);

  authContainer.querySelectorAll(".auth-toggle__button").forEach((btn) => {
    btn.addEventListener("click", () => {
      navigateTo(`/${btn.dataset.form}`);
    });
  });

  renderForm();

  section.innerHTML = authBanner;
  section.appendChild(authContainer);

  return section;
}
