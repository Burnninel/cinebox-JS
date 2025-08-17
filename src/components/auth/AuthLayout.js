import { IconLogo } from "/src/assets/icons/icons.js";
import { handleAuthForm } from "/src/components/auth/AuthHandler.js";
import { Input } from "/src/components/common/Input.js";
import { navigateTo } from "/src/router.js";
import { createElement } from "/src/helpers/createElement.js";
import { htmlToElement } from "/src/helpers/htmlToElement.js";

function createAuthBanner() {
	return createElement({
		tag: "div",
		className: "auth-banner",
		children: [
			createElement({
				tag: "img",
				attributes: {
					src: "src/assets/img/login.png",
					alt: "Imagem ilustrativa do banner de login",
				},
				className: "auth-banner__image",
			}),
			createElement({
				tag: "div",
				className: "auth-banner__logo",
				children: [htmlToElement(IconLogo())],
			}),
			createElement({
				tag: "div",
				className: "auth-banner__info",
				children: [
					createElement({
						tag: "h1",
						className: "auth-banner__title",
						textContent: "ab filmes",
					}),
					createElement({
						tag: "p",
						className: "auth-banner__description",
						textContent:
							"O guia definitivo para os amantes de cinemas",
					}),
				],
			}),
		],
	});
}

function createToggleButtons() {
	return createElement({
		tag: "nav",
		className: "auth-toggle",
		children: [
			createElement({
				tag: "button",
				className: "auth-toggle__button auth-toggle__button--active",
				textContent: "Login",
				attributes: { "data-form": "login" },
			}),
			createElement({
				tag: "button",
				className: "auth-toggle__button",
				textContent: "Cadastre",
				attributes: { "data-form": "signup" },
			}),
		],
	});
}

export async function AuthLayout({ forms }) {
	const formType = Object.keys(forms)[0];

	const section = createElement({ tag: "section", className: "auth" });

	const authBanner = createAuthBanner();

	const authContainer = createElement({
		tag: "section",
		className: "auth-form",
	});

	const toggleButtonsElement = createToggleButtons();

	const formContainer = createElement({
		tag: "div",
		className: "auth-form__form",
	});

	function renderInputs(inputs) {
		return inputs.map(
			({ icon, type = "text", id = "", placeholder = "" }) =>
				Input({ icon: icon(), attributes: { type, id, placeholder } })
		);
	}

	function renderForm() {
		formContainer.innerHTML = "";

		const { title, submitText, inputs } = forms[formType];

		formContainer.append(
			createElement({
				tag: "h2",
				className: "auth-form__title",
				textContent: title,
			}),
			...renderInputs(inputs),
			createElement({
				tag: "button",
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
