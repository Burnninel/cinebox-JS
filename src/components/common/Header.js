import { IconLogo, IconPopcorn, IconMovie } from "/src/assets/icons/icons.js";
import { navigateTo } from "/src/router.js";
import { createElement } from "/src/helpers/createElement.js";
import { htmlToElement } from "/src/helpers/htmlToElement.js";

const buttonsConfig = [
	{ icon: IconPopcorn(), label: "Explorar", form: "explorar" },
	{ icon: IconMovie(), label: "Meus Filmes", form: "meus-filmes" },
	{ label: "Entrar", form: "login" },
];

function createButton({ icon, label, form }) {
	return createElement({
		tag: "button",
		className: "global-header__btn",
		attributes: { "data-form": form },
		children: icon
			? [
					htmlToElement(icon),
					createElement({ tag: "span", textContent: label }),
			  ]
			: [createElement({ tag: "span", textContent: label })],
	});
}

export function Header() {
	const logo = createElement({
		tag: "div",
		className: "global-header__logo",
		children: [htmlToElement(IconLogo())],
	});

	const buttons = buttonsConfig.map(createButton);

	const navbar = createElement({
		tag: "nav",
		className: "global-header__navbar",
		children: buttons.filter((btn) => btn.dataset.form !== "login"),
	});

	const loginContainer = createElement({
		tag: "div",
		className: "global-header__login",
		children: buttons.filter((btn) => btn.dataset.form === "login"),
	});

	const header = createElement({
		tag: "header",
		className: "global-header",
		children: [logo, navbar, loginContainer],
	});

	setupHeaderNavigation(buttons);

	return header;
}

function setupHeaderNavigation(buttons) {
	const setActiveButton = () => {
		const path = window.location.pathname.replace(/^\/+|\/+$/g, "");
		buttons.forEach((btn) => {
			btn.classList.toggle(
				"global-header__btn--active",
				path.startsWith(btn.dataset.form)
			);
		});
	};

	buttons.forEach((btn) =>
		btn.addEventListener("click", () => {
			navigateTo(`/${btn.dataset.form}`);
			setActiveButton();
		})
	);

	setActiveButton();
}
