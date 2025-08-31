import { DOM } from "/src/helpers/dom/index.js";

export function Input({ icon, attributes = {} }) {
	return DOM.createDiv(`form__field`, [
		DOM.createDiv("form__input-icon", [DOM.createIcon(icon)]),
		DOM.createInput(`form__input`.trim(), attributes),
	]);
}
