import { IconLogo } from "/src/assets/icons/icons.js";
import { handleAuthForm } from "/src/components/auth/AuthHandler.js";
import { Input } from "/src/components/common/Input.js";
import { navigateTo } from "/src/router.js";
import { createElement } from "/src/helpers/createElement.js";
import { htmlToElement } from "/src/helpers/htmlToElement.js";

import { DOM } from "/src/helpers/dom/index.js";
import { Element } from "/src/helpers/element/index.js";

function createAuthBanner() {
	return DOM.createDiv("auth-banner", [
		DOM.createImage("auth-banner__image", "login.png", {
			alt: "Imagem ilustrativa do banner de login",
		}),
		DOM.createDiv("auth-banner__logo", [DOM.createIcon(IconLogo)]),
		DOM.createDiv("auth-banner__info", [
			DOM.createH1("auth-banner__title", "ab filmes"),
			DOM.createParagraph(
				"auth-banner__description",
				"O guia definitivo para os amantes de cinemas"
			),
		]),
	]);
}

function createToggleButtons() {
	return Element.createElement({
		tag: "nav",
		className: "auth-toggle",
		children: [
			DOM.createButton({
				className: "auth-toggle__button auth-toggle__button--active",
				textContent: "Login",
				attributes: { "data-form": "login" },
			}),
			DOM.createButton({
				className: "auth-toggle__button",
				textContent: "Cadastre",
				attributes: { "data-form": "signup" },
			}),
		],
	});
}

export async function AuthLayout({ forms }) {
	const formType = Object.keys(forms)[0];

	const section = DOM.createSection("auth");

	const authBanner = createAuthBanner();

	const authContainer = DOM.createSection("auth-form");

	const toggleButtonsElement = createToggleButtons();

	const formContainer = DOM.createDiv("auth-form__form");

	function renderInputs(inputs) {
		return inputs.map(
			({ icon, type = "text", id = "", placeholder = "" }) =>
				Input({ icon: icon, attributes: { type, id, placeholder } })
		);
	}

	function renderForm() {
		formContainer.innerHTML = "";

		const { title, submitText, inputs } = forms[formType];

		formContainer.append(
			DOM.createH2("auth-form__title", title),
			...renderInputs(inputs),
			DOM.createButton({
				className: "auth-form__submit",
				textContent: submitText,
				attributes: { type: "submit", "data-form": formType },
			})
		);

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

	authContainer.appendChild(toggleButtonsElement);
	authContainer.appendChild(formContainer);

	authContainer.querySelectorAll(".auth-toggle__button").forEach((btn) => {
		btn.addEventListener("click", () => {
			navigateTo(`/${btn.dataset.form}`);
		});
	});

	renderForm();

	section.appendChild(authBanner);
	section.appendChild(authContainer);

	return section;
}
