import { DOM } from "/src/helpers/dom/index.js";
import { Element } from "/src/helpers/element/index.js";
import { IconLogo, IconPopcorn, IconMovie } from "/src/assets/icons/icons.js";
import { navigateTo } from "/src/router.js";

const buttonsConfig = [
	{ icon: IconPopcorn, label: "Explorar", form: "explorar" },
	{ icon: IconMovie, label: "Meus Filmes", form: "meus-filmes" },
	{ label: "Entrar", form: "login" },
];

function createButton({ icon, label, form }) {
	return DOM.createButton({
		className: "global-header__btn",
		attributes: { "data-form": form },
		children: icon
			? [
					DOM.createIcon(icon),
					DOM.createSpan("global-header__label", label),
			  ]
			: [DOM.createSpan("global-header__label", label)],
	});
}

export function Header() {
	const logo = DOM.createDiv("global-header__logo", [
		DOM.createIcon(IconLogo),
	]);

	logo.addEventListener("click", () => {
		navigateTo("/explorar");
	});

	const buttons = buttonsConfig.map(createButton);

	const navbar = Element.createElement({
		tag: "nav",
		className: "global-header__navbar",
		children: buttons.filter((btn) => btn.dataset.form !== "login"),
	});

	const loginContainer = DOM.createDiv(
		"global-header__login",
		buttons.filter((btn) => btn.dataset.form === "login")
	);

	const header = DOM.createHeader("global-header", [
		logo,
		navbar,
		loginContainer,
	]);

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
